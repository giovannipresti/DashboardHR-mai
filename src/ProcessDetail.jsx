// ProcessDetail.jsx
import React from "react";
import { Card } from "./UI";
import { Users, Settings, Briefcase, GitBranch, Brain, Target } from "lucide-react";

const icons = {
  Users: Users,
  Settings: Settings,
  Briefcase: Briefcase,
  GitBranch: GitBranch,
  Brain: Brain,
  Target: Target
};

const ProcessDetail = ({ process }) => {
  const Icon = icons[process.icon];

  return (
    <Card className="shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium">{process.name}</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-sm text-gray-600">Current:</span>
              <span className="ml-2 font-medium">
                {process.current.toFixed(1)} FTE
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-600">Required:</span>
              <span className="ml-2 font-medium">
                {process.required.toFixed(1)} FTE
              </span>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm ${
                process.current >= process.required
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {(
                ((process.current - process.required) / process.required) *
                100
              ).toFixed(0)}
              %
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {process.metrics.map((metric, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className="text-lg font-medium mt-1">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Process Breakdown
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {process.phases.map((phase, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-gray-900">{phase.label}</div>
                  <div className="text-sm text-blue-600">{phase.hours}h</div>
                </div>
                <p className="text-sm text-gray-600">{phase.details}</p>
                {phase.subMetrics && (
                  <div className="mt-2">
                    {phase.subMetrics.map((metric, midx) => (
                      <div key={midx} className="text-xs text-gray-500 mt-1">
                        • {metric}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProcessDetail;
