// DetailModal.jsx
import React, { useState } from "react";

const ConfigInput = ({ label, value, onChange, description, step = 1 }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      step={step}
      className="w-full border rounded p-2"
    />
    {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
  </div>
);

const DetailModal = ({ process, onClose, onUpdateConfig }) => {
  const [config, setConfig] = useState(process.config || {});

  const renderProcessInputs = () => {
    switch (process.processKey) {
      case 'recruiting':
        return (
          <>
            <ConfigInput
              label="Hours per Senior Hire"
              value={config.seniorHireHours || 40}
              onChange={val => setConfig({...config, seniorHireHours: val})}
              description="Time spent on senior level recruitment process"
            />
            <ConfigInput
              label="Hours per Junior Hire"
              value={config.juniorHireHours || 26}
              onChange={val => setConfig({...config, juniorHireHours: val})}
              description="Time spent on junior level recruitment process"
            />
            <ConfigInput
              label="Senior Split (%)"
              value={config.seniorSplit || 40}
              onChange={val => setConfig({...config, seniorSplit: val/100})}
              description="Percentage of positions that are senior level"
            />
          </>
        );
        
      case 'training':
        return (
          <>
            <ConfigInput
              label="Analysis Hours per Employee"
              value={config.analysisHours || 0.9}
              onChange={val => setConfig({...config, analysisHours: val})}
              description="Time spent on training needs analysis"
              step={0.1}
            />
            <ConfigInput
              label="Delivery Hours per Employee"
              value={config.deliveryHours || 1.8}
              onChange={val => setConfig({...config, deliveryHours: val})}
              description="Time spent on training delivery"
              step={0.1}
            />
            <ConfigInput
              label="Admin Hours per Employee"
              value={config.adminHours || 0.6}
              onChange={val => setConfig({...config, adminHours: val})}
              description="Time spent on training administration"
              step={0.1}
            />
          </>
        );

      case 'performance':
        return (
          <>
            <ConfigInput
              label="Setup Hours per Employee"
              value={config.setupHours || 0.2}
              onChange={val => setConfig({...config, setupHours: val})}
              description="Time spent on performance review setup"
              step={0.1}
            />
            <ConfigInput
              label="Execution Hours per Employee"
              value={config.executionHours || 0.5}
              onChange={val => setConfig({...config, executionHours: val})}
              description="Time spent on review execution"
              step={0.1}
            />
            <ConfigInput
              label="Review Hours per Employee"
              value={config.reviewHours || 0.3}
              onChange={val => setConfig({...config, reviewHours: val})}
              description="Time spent on review analysis"
              step={0.1}
            />
          </>
        );

      case 'admin':
        return (
          <>
            <ConfigInput
              label="Personnel Hours per Employee"
              value={config.personnelHours || 2}
              onChange={val => setConfig({...config, personnelHours: val})}
              description="Time spent on personnel administration"
              step={0.5}
            />
            <ConfigInput
              label="Payroll Hours per Employee"
              value={config.payrollHours || 1.5}
              onChange={val => setConfig({...config, payrollHours: val})}
              description="Time spent on payroll management"
              step={0.5}
            />
            <ConfigInput
              label="Time & Attendance Hours"
              value={config.timeAttendanceHours || 1}
              onChange={val => setConfig({...config, timeAttendanceHours: val})}
              description="Time spent on time and attendance"
              step={0.5}
            />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{process.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-2">Calculation Logic:</h4>
          <pre className="text-sm text-gray-600 whitespace-pre-wrap">
            {process.calculation}
          </pre>
        </div>

        <div className="space-y-4">
          {renderProcessInputs()}
        </div>

        <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onUpdateConfig(config)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;