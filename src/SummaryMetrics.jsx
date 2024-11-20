// SummaryMetrics.jsx
import React from "react";
import { Card } from "./UI";
import { AlertTriangle } from "lucide-react";

const SummaryMetrics = ({ processes }) => {
  const totalFTEGap = processes.reduce(
    (acc, p) => acc + (p.required - p.current),
    0
  );
  const understaffedProcesses = processes.filter((p) => p.current < p.required);

  return (
    <Card className="shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Summary</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">FTE Gap</h4>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold text-red-500">
                {totalFTEGap.toFixed(1)}
              </span>
              <span className="text-gray-600">Additional FTE needed</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">
              Critical Areas
            </h4>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-2xl font-bold">
                {understaffedProcesses.length}
              </span>
              <span className="text-gray-600">understaffed processes</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SummaryMetrics;
