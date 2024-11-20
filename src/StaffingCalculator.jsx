// StaffingCalculator.jsx
import React, { useState, useEffect } from "react";
import { Card } from "./UI";
import { AlertTriangle } from "lucide-react";

const StaffingCalculator = ({ onStaffingChange }) => {
  const [staffing, setStaffing] = useState({
    avlEmployees: 340,
    avlAgency: 50,
    avlContractors: 50,
    eolEmployees: 35,
    turnoverRate: 12,
    growthPositions: 20,
  });

  const totalEmployees =
    staffing.avlEmployees +
    staffing.avlAgency +
    staffing.avlContractors +
    staffing.eolEmployees;
  const turnoverPositions = Math.round(
    (totalEmployees * staffing.turnoverRate) / 100
  );
  const totalPositions = turnoverPositions + staffing.growthPositions;
  const requiredRecruitingFTE = (
    (totalPositions * 40 * 0.4 + totalPositions * 26 * 0.6) /
    1720
  ).toFixed(2);

  useEffect(() => {
    onStaffingChange({
      employees: totalEmployees,
      turnoverPositions,
      growthPositions: staffing.growthPositions,
      totalPositions,
      requiredRecruitingFTE,
      avlEmployees: staffing.avlEmployees,
      avlAgency: staffing.avlAgency,
      avlContractors: staffing.avlContractors,
      eolEmployees: staffing.eolEmployees,
    });
  }, [staffing]);

  const handleChange = (field) => (e) => {
    setStaffing((prev) => ({
      ...prev,
      [field]: Number(e.target.value),
    }));
  };

  return (
    <Card className="shadow-lg mb-6">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Staffing Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div className="text-xs text-gray-500 mt-1">Direct employees</div>
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
              <div className="text-xs text-gray-500 mt-1">
                Temporary/agency staff
              </div>
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
              <div className="text-xs text-gray-500 mt-1">
                External contractors
              </div>
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
              <div className="text-xs text-gray-500 mt-1">EOL staff</div>
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
              <div className="text-xs text-gray-500 mt-1">
                Annual turnover percentage
              </div>
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
              <div className="text-xs text-gray-500 mt-1">
                New positions planned
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total HC</div>
            <div className="text-xl font-bold text-blue-700">
              {totalEmployees}
            </div>
            <div className="text-xs text-gray-500 mt-1">Current workforce</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Turnover Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {turnoverPositions}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Based on turnover rate
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Growth Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {staffing.growthPositions}
            </div>
            <div className="text-xs text-gray-500 mt-1">New headcount</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {totalPositions}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Requiring {requiredRecruitingFTE} FTE
            </div>
            <div className="text-xs text-gray-500">
              Based on 40% Senior / 60% Junior
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StaffingCalculator;
