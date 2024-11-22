// src/components/recruiting/ProcessHeader.jsx
import React from 'react';
import { Clock } from 'lucide-react';

const ProcessHeader = ({ totalHours }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold">Senior Recruiting Process Analysis</h2>
        <p className="text-sm text-gray-600 mt-1">
          Detailed breakdown of time allocation per phase
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-blue-600" />
        <span className="text-lg font-medium">Total: {totalHours}h</span>
      </div>
    </div>
  );
};

export default ProcessHeader;