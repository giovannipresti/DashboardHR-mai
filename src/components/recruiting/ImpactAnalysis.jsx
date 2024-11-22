// src/components/recruiting/ImpactAnalysis.jsx
import React from 'react';

const ImpactAnalysis = ({ totalHours }) => {
  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
      <h4 className="font-medium mb-2">Impact Analysis</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-600">Process Duration</p>
          <p className="text-lg font-medium">{totalHours} hours</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Calendar Time</p>
          <p className="text-lg font-medium">~4-6 weeks</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">FTE Impact</p>
          <p className="text-lg font-medium">{(totalHours/1720).toFixed(3)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Monthly Capacity</p>
          <p className="text-lg font-medium">{Math.floor(1720/(totalHours*12))} positions</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactAnalysis;