// StaffingCalculator.jsx
import React from "react";
import { Card } from "./UI";

const StaffingCalculator = ({ onStaffingChange }) => {
  const calculateRequiredFTE = (totalPositions) => {
    const hoursPerPosition = 38; // Average between senior and junior positions
    const hoursPerYear = 1720;
    return (totalPositions * hoursPerPosition) / hoursPerYear;
  };

  const updateStaffing = (turnover, growth) => {
    const employees = 475;
    const turnoverPositions = Math.round(employees * (turnover / 100));
    const growthPositions = growth;
    const totalPositions = turnoverPositions + growthPositions;
    const requiredRecruitingFTE = calculateRequiredFTE(totalPositions);

    onStaffingChange({
      employees,
      turnoverPositions,
      growthPositions,
      totalPositions,
      requiredRecruitingFTE,
    });
  };

  React.useEffect(() => {
    updateStaffing(12, 20); // Initial values
  }, []);

  return (
    <Card className="shadow-lg mb-6">
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-700">
            Total Headcount
          </div>
          <div className="text-2xl font-bold text-gray-900">475</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-700">Turnover Rate</div>
          <div className="text-2xl font-bold text-gray-900">12%</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-700">
            Growth Positions
          </div>
          <div className="text-2xl font-bold text-gray-900">20</div>
        </div>
      </div>
    </Card>
  );
};

export default StaffingCalculator;
