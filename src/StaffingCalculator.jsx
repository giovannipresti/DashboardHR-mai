// StaffingCalculator.jsx
import React, { useState } from "react";
import { Card } from "./UI";
import { AlertTriangle } from "lucide-react";

const StaffingCalculator = ({ onStaffingChange }) => {
  const [employees, setEmployees] = useState(475);
  const [turnoverRate, setTurnoverRate] = useState(12);
  const [growthPositions, setGrowthPositions] = useState(20);

  const turnoverPositions = Math.round((employees * turnoverRate) / 100);
  const totalPositions = turnoverPositions + growthPositions;
  const requiredRecruitingFTE = (
    (totalPositions * 40 * 0.4 + totalPositions * 26 * 0.6) /
    1720
  ).toFixed(2);

  React.useEffect(() => {
    onStaffingChange({
      employees,
      turnoverPositions,
      growthPositions,
      totalPositions,
      requiredRecruitingFTE,
    });
  }, [employees, turnoverRate, growthPositions]);

  return (
    <Card className="shadow-lg mb-6">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Staffing Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Employees
            </label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-xs text-gray-500 mt-1">
              AVL + EOL + Contractors
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Turnover Rate (%)
            </label>
            <input
              type="number"
              value={turnoverRate}
              onChange={(e) => setTurnoverRate(Number(e.target.value))}
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
              value={growthPositions}
              onChange={(e) => setGrowthPositions(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-xs text-gray-500 mt-1">
              New positions planned
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Turnover Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {turnoverPositions}
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Growth Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {growthPositions}
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total Positions</div>
            <div className="text-xl font-bold text-blue-700">
              {totalPositions}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm text-yellow-800">
              Required Recruiting FTE: {requiredRecruitingFTE}
              <span className="text-xs ml-2">
                (Based on 40% Senior / 60% Junior split)
              </span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StaffingCalculator;
