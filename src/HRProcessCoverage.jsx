// HRProcessCoverage.jsx
import React, { useState } from "react";
import { Calculator, Settings } from "lucide-react";
import DetailModal from "./DetailModal";
import { calculateRecruitingFTE } from "./recruitingProcess";
import { calculateTrainingFTE } from "./trainingProcess";
import { calculatePerformanceFTE } from "./performanceProcess";
import { calculateAdminFTE } from "./adminProcess";

const ProcessCard = ({ process, onConfigClick }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{process.name}</h3>
      <button onClick={() => onConfigClick(process)} className="p-2 hover:bg-gray-100 rounded-full">
        <Settings className="w-5 h-5 text-gray-600" />
      </button>
    </div>
    
    <div className="grid grid-cols-3 gap-4">
      {process.metrics.map((metric, idx) => (
        <div key={idx} className="bg-gray-50 p-3 rounded">
          <div className="text-sm text-gray-600">{metric.label}</div>
          <div className="text-lg font-medium">{metric.value}</div>
        </div>
      ))}
    </div>

    <div className="mt-4">
      <div className="text-sm font-medium mb-2">Process Coverage</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Current: {process.current} FTE</span>
        <span className="text-sm text-gray-600">Required: {process.required.toFixed(2)} FTE</span>
      </div>
    </div>
  </div>
);

const HRProcessCoverage = ({ staffingData }) => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [configs, setConfigs] = useState({
    recruiting: {},
    training: {},
    performance: {},
    admin: {}
  });

  const getProcesses = () => {
    const headcount = staffingData.totalEmployees;
    
    const recruiting = calculateRecruitingFTE(configs.recruiting, headcount);
    const training = calculateTrainingFTE(configs.training, headcount);
    const performance = calculatePerformanceFTE(configs.performance, headcount);
    const admin = calculateAdminFTE(configs.admin, headcount);

    return [
      {
        name: "Recruiting & Talent Acquisition",
        current: 1.8,
        required: recruiting.requiredFTE,
        metrics: recruiting.metrics,
        calculation: recruiting.calculation,
        config: configs.recruiting,
        processKey: 'recruiting'
      },
      {
        name: "Training & Development",
        current: 0.8,
        required: training.requiredFTE,
        metrics: training.metrics,
        calculation: training.calculation,
        config: configs.training,
        processKey: 'training'
      },
      {
        name: "Performance Management",
        current: 1.0,
        required: performance.requiredFTE,
        metrics: performance.metrics,
        calculation: performance.calculation,
        config: configs.performance,
        processKey: 'performance'
      },
      {
        name: "HR Admin & Operations",
        current: 2.0,
        required: admin.requiredFTE,
        metrics: admin.metrics,
        calculation: admin.calculation,
        config: configs.admin,
        processKey: 'admin'
      }
    ];
  };

  const processes = getProcesses();

  const handleConfigUpdate = (processKey, newConfig) => {
    setConfigs(prev => ({
      ...prev,
      [processKey]: { ...prev[processKey], ...newConfig }
    }));
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Process Coverage Analysis</h2>
        <div className="flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">
            Total Required: {processes.reduce((acc, p) => acc + p.required, 0).toFixed(1)} FTE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {processes.map(process => (
          <ProcessCard 
            key={process.name}
            process={process}
            onConfigClick={setSelectedProcess}
          />
        ))}
      </div>

      {selectedProcess && (
        <DetailModal
          process={selectedProcess}
          onClose={() => setSelectedProcess(null)}
          onUpdateConfig={(newConfig) => {
            handleConfigUpdate(selectedProcess.processKey, newConfig);
            setSelectedProcess(null);
          }}
        />
      )}
    </div>
  );
};

export default HRProcessCoverage;
