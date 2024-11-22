// src/HRProcessCoverage.jsx
import React, { useState } from "react";
import { Calculator, Settings } from "lucide-react";
import DetailModal from "./DetailModal";
import ProcessCoverageIndicator from './ProcessCoverageIndicator';
import { calculateRecruitingFTE } from "./recruitingProcess";
import { calculateTrainingFTE } from "./trainingProcess";
import { calculatePerformanceFTE } from "./performanceProcess";
import { calculateAdminFTE } from "./adminProcess";

const ProcessCard = ({ process, onClick, onConfigClick }) => (
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
      <ProcessCoverageIndicator 
        name="Process Coverage"
        current={process.current}
        required={process.required}
      />
    </div>

    <div className="mt-4 flex justify-end">
      <button
        onClick={() => onClick(process)}
        className="text-sm text-blue-600 hover:text-blue-800"
      >
        View Details
      </button>
    </div>
  </div>
);

const ProcessDetail = ({ process }) => (
  <div className="bg-white rounded-lg p-6">
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {process.phases?.map((phase, idx) => (
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

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Calculation Details:</h4>
        <pre className="text-sm text-gray-600 whitespace-pre-wrap">
          {process.calculation}
        </pre>
      </div>
    </div>
  </div>
);

const HRProcessCoverage = ({ staffingData }) => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [configProcess, setConfigProcess] = useState(null);
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
        phases: recruiting.phases,
        calculation: recruiting.calculation,
        config: configs.recruiting,
        processKey: 'recruiting'
      },
      {
        name: "Training & Development",
        current: 0.8,
        required: training.requiredFTE,
        metrics: training.metrics,
        phases: training.phases,
        calculation: training.calculation,
        config: configs.training,
        processKey: 'training'
      },
      {
        name: "Performance Management",
        current: 1.0,
        required: performance.requiredFTE,
        metrics: performance.metrics,
        phases: performance.phases,
        calculation: performance.calculation,
        config: configs.performance,
        processKey: 'performance'
      },
      {
        name: "HR Admin & Operations",
        current: 2.0,
        required: admin.requiredFTE,
        metrics: admin.metrics,
        phases: admin.phases,
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
            onClick={setSelectedProcess}
            onConfigClick={setConfigProcess}
          />
        ))}
      </div>

      {selectedProcess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg m-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedProcess.name}</h3>
                <button 
                  onClick={() => setSelectedProcess(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <ProcessDetail process={selectedProcess} />
            </div>
          </div>
        </div>
      )}

      {configProcess && (
        <DetailModal
          process={configProcess}
          onClose={() => setConfigProcess(null)}
          onUpdateConfig={(newConfig) => {
            handleConfigUpdate(configProcess.processKey, newConfig);
            setConfigProcess(null);
          }}
        />
      )}
    </div>
  );
};

export default HRProcessCoverage;