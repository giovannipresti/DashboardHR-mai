// DetailModal.jsx
import React, { useState } from "react";

const DetailModal = ({ isOpen, onClose, process, onUpdateConfig }) => {
  const [config, setConfig] = useState({});

  if (!isOpen) return null;

  const renderConfigInputs = () => {
    switch (process.name) {
      case "Recruiting & Talent Acquisition":
        return (
          <>
            <ConfigInput
              label="Hours per Senior Hire"
              value={config.seniorHireHours || 40}
              onChange={(val) => setConfig({ ...config, seniorHireHours: val })}
              description="Total hours needed for full senior hiring cycle"
            />
            <ConfigInput
              label="Hours per Junior Hire"
              value={config.juniorHireHours || 26}
              onChange={(val) => setConfig({ ...config, juniorHireHours: val })}
              description="Total hours needed for full junior hiring cycle"
            />
            <ConfigInput
              label="Hours per Onboarding"
              value={config.onboardingHours || 9}
              onChange={(val) => setConfig({ ...config, onboardingHours: val })}
              description="Hours needed per new hire onboarding"
            />
          </>
        );

      case "Training & Development":
        return (
          <>
            <ConfigInput
              label="Analysis Hours per Employee"
              value={config.analysisHours || 0.9}
              onChange={(val) => setConfig({ ...config, analysisHours: val })}
              description="Hours needed per employee for needs analysis"
              step={0.1}
            />
            <ConfigInput
              label="Delivery Hours per Employee"
              value={config.deliveryHours || 1.8}
              onChange={(val) => setConfig({ ...config, deliveryHours: val })}
              description="Hours needed per employee for training delivery"
              step={0.1}
            />
          </>
        );

      // Add similar cases for other processes
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{process.name} Configuration</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Dimensioning Logic</h4>
            <p className="text-sm text-gray-700">{process.calculation}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Configuration Parameters</h4>
            {renderConfigInputs()}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onUpdateConfig(process.name, config);
                onClose();
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfigInput = ({ label, value, onChange, description, step = 1 }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      step={step}
      className="w-full border rounded-lg px-3 py-2"
    />
    {description && <p className="text-xs text-gray-500">{description}</p>}
  </div>
);

export default DetailModal;
