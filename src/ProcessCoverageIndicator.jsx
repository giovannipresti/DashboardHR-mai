// src/ProcessCoverageIndicator.jsx
import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const ProcessCoverageIndicator = ({ current, required, name }) => {
  // Calculate coverage percentage
  const coverage = ((current - required) / required) * 100;
  const formattedCoverage = coverage.toFixed(0);
  const isOverstaffed = coverage > 0;
  
  // Determine status and styling
  const getStatusConfig = () => {
    if (coverage > 20) {
      return {
        icon: <TrendingUp className="w-5 h-5 text-yellow-500" />,
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-700",
        label: "Over-staffed"
      };
    } else if (coverage < -20) {
      return {
        icon: <TrendingDown className="w-5 h-5 text-red-500" />,
        bgColor: "bg-red-50",
        textColor: "text-red-700",
        label: "Under-staffed"
      };
    } else {
      return {
        icon: <AlertTriangle className="w-5 h-5 text-green-500" />,
        bgColor: "bg-green-50",
        textColor: "text-green-700",
        label: "Optimal"
      };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className={`p-4 rounded-lg ${statusConfig.bgColor}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{name}</h3>
        {statusConfig.icon}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <div className="text-sm text-gray-600">Current</div>
          <div className="text-lg font-medium">{current} FTE</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Required</div>
          <div className="text-lg font-medium">{required} FTE</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className={`text-sm ${statusConfig.textColor} font-medium`}>
          {statusConfig.label}
        </div>
        <div className={`text-sm ${statusConfig.textColor} font-bold`}>
          {isOverstaffed ? "+" : ""}{formattedCoverage}%
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          {isOverstaffed ? 
            `${(coverage/100 * required).toFixed(1)} FTE above optimal` :
            `${Math.abs(coverage/100 * required).toFixed(1)} FTE below optimal`
          }
        </div>
      </div>
    </div>
  );
};

export default ProcessCoverageIndicator;