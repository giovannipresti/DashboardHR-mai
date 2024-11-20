// HRProcessCoverage.jsx
import React from "react";
import { Calculator } from "lucide-react";
import StaffingCalculator from "./StaffingCalculator";
import ProcessDetail from "./ProcessDetail";
import SummaryMetrics from "./SummaryMetrics";
import { generateProcessData } from "./processData";
import { useProcessConfig } from "./ProcessConfigContext";

const HRProcessCoverage = ({ staffingData, onStaffingChange }) => {
  const { config } = useProcessConfig();
  const processes = generateProcessData(staffingData, config);

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          HR Process Coverage Analysis
        </h1>
        <div className="flex items-center space-x-2">
          <Calculator className="w-6 h-6 text-blue-600" />
          <span className="text-sm text-gray-600">
            Current FTE: 7.5 / Required:{" "}
            {processes.reduce((acc, p) => acc + p.required, 0).toFixed(1)}
          </span>
        </div>
      </div>

      <StaffingCalculator
        staffingData={staffingData}
        onStaffingChange={onStaffingChange}
      />

      {processes.map((process) => (
        <ProcessDetail key={process.name} process={process} />
      ))}

      <SummaryMetrics processes={processes} />
    </div>
  );
};

export default HRProcessCoverage;
