import React, { useState } from 'react';
import { Users, Clock, TrendingUp, Settings, Target } from 'lucide-react';
import { calculateStaffingMetrics, defaultStaffingValues } from './utils/calculations';

const StatCard = ({ title, value, Icon, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex flex-col items-center">
      {Icon && <Icon className="w-6 h-6 text-blue-500 mb-2" />}
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-lg font-bold">{value}</p>
      {description && (
        <p className="text-xs text-gray-500 mt-1 text-center">{description}</p>
      )}
    </div>
  </div>
);

const HRDashboard = ({ onStaffingChange }) => {
  const [staffing, setStaffing] = useState(() => {
    const savedData = localStorage.getItem('staffingCalculator');
    return savedData ? JSON.parse(savedData) : defaultStaffingValues;
  });

  const metrics = calculateStaffingMetrics(staffing);

  const handleChange = (field) => (e) => {
    const newStaffing = {
      ...staffing,
      [field]: Number(e.target.value)
    };
    
    const newMetrics = calculateStaffingMetrics(newStaffing);
    
    setStaffing(newStaffing);
    localStorage.setItem('staffingCalculator', JSON.stringify(newStaffing));

    if (onStaffingChange) {
      onStaffingChange({
        ...newStaffing,
        ...newMetrics
      });
    }
  };

  const handleReset = () => {
    setStaffing(defaultStaffingValues);
    localStorage.setItem('staffingCalculator', JSON.stringify(defaultStaffingValues));
    if (onStaffingChange) {
      onStaffingChange({
        ...defaultStaffingValues,
        ...calculateStaffingMetrics(defaultStaffingValues)
      });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Staffing Calculator</h2>
        <button
          onClick={handleReset}
          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset to Default</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AVL Employees
            </label>
            <input
              type="number"
              value={staffing.avlEmployees}
              onChange={handleChange("avlEmployees")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AVL Agency Workers
            </label>
            <input
              type="number"
              value={staffing.avlAgency}
              onChange={handleChange("avlAgency")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AVL Contractors
            </label>
            <input
              type="number"
              value={staffing.avlContractors}
              onChange={handleChange("avlContractors")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              EOL Employees
            </label>
            <input
              type="number"
              value={staffing.eolEmployees}
              onChange={handleChange("eolEmployees")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Turnover Rate (%)
            </label>
            <input
              type="number"
              value={staffing.turnoverRate}
              onChange={handleChange("turnoverRate")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Growth Positions
            </label>
            <input
              type="number"
              value={staffing.growthPositions}
              onChange={handleChange("growthPositions")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total HC</p>
          <p className="text-xl font-bold text-blue-700">{metrics.totalEmployees}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Turnover Positions</p>
          <p className="text-xl font-bold text-blue-700">{metrics.turnoverPositions}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Positions</p>
          <p className="text-xl font-bold text-blue-700">{metrics.totalPositions}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Required Recruiting FTE</p>
          <p className="text-xl font-bold text-blue-700">{metrics.requiredRecruitingFTE}</p>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;