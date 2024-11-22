import React, { useState } from 'react';

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

  const renderRecruitingConfig = () => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <ConfigInput
          label="Hours per Senior Hire"
          value={config.seniorHireHours || 40}
          onChange={val => setConfig({...config, seniorHireHours: val})}
          description="Total process time for senior positions"
        />
        <ConfigInput
          label="Hours per Junior Hire"
          value={config.juniorHireHours || 26}
          onChange={val => setConfig({...config, juniorHireHours: val})}
          description="Total process time for junior positions"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ConfigInput
          label="Senior Split (%)"
          value={(config.seniorSplit || 0.4) * 100}
          onChange={val => setConfig({...config, seniorSplit: val/100})}
          description="Percentage of senior positions"
          step={5}
        />
        <ConfigInput
          label="Turnover Rate (%)"
          value={(config.turnoverRate || 0.12) * 100}
          onChange={val => setConfig({...config, turnoverRate: val/100})}
          description="Annual turnover percentage"
          step={0.5}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ConfigInput
          label="Growth Positions"
          value={config.growthPositions || 20}
          onChange={val => setConfig({...config, growthPositions: val})}
          description="New positions from growth"
        />
        <ConfigInput
          label="Onboarding Hours"
          value={config.onboardingHours || 10}
          onChange={val => setConfig({...config, onboardingHours: val})}
          description="Hours per position for onboarding"
        />
      </div>
    </>
  );

  const renderProcessConfig = () => {
    switch (process.processKey) {
      case 'recruiting':
        return renderRecruitingConfig();
      // ... altri casi per gli altri processi
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{process.name} Configuration</h3>
          <button onClick={onClose}>×</button>
        </div>

        <div className="space-y-6">
          {renderProcessConfig()}

          <div className="border-t pt-4 mt-6">
            <div className="flex justify-end space-x-3">
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
      </div>
    </div>
  );
};

export default DetailModal;