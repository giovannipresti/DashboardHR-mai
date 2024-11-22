import React from 'react';
import { Users, Clock, Target } from 'lucide-react';

const ProcessDetail = ({ process }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{process.name}</h3>
            <p className="text-sm text-gray-600">
              Current: {process.current} FTE | Required: {process.required.toFixed(2)} FTE
            </p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${
          process.current >= process.required 
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>
          {((process.current - process.required) / process.required * 100).toFixed(0)}% Coverage
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {process.metrics.map((metric, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <p className="text-xl font-medium mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      {process.phases && (
        <div className="mt-8">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Process Breakdown</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {process.phases.map((phase, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-medium text-gray-900">{phase.label}</h5>
                  <span className="text-sm text-blue-600">{phase.hours}h</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{phase.details}</p>
                {phase.subMetrics && (
                  <ul className="text-xs text-gray-500 space-y-1">
                    {phase.subMetrics.map((metric, midx) => (
                      <li key={midx} className="flex items-center space-x-1">
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium mb-2">Calculation Details</h4>
        <pre className="text-sm text-gray-600 whitespace-pre-wrap">
          {process.calculation}
        </pre>
      </div>
    </div>
  );
};

export default ProcessDetail;