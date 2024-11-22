// HRProcessCoverage.jsx
import React, { useState } from 'react';
import { Calculator, Settings, AlertTriangle } from 'lucide-react';
import DetailModal from './DetailModal';
import ProcessDetail from './ProcessDetail';
import { useProcessConfig } from './ProcessConfigContext';
import { calculateRecruitingFTE } from './recruitingProcess';
import { calculateTrainingFTE } from './trainingProcess';
import { calculatePerformanceFTE } from './performanceProcess';
import { calculateAdminFTE } from './adminProcess';

const ProcessCard = ({ process, onClick, onConfigClick }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-medium">{process.name}</h3>
        {process.gap < -20 && (
          <AlertTriangle className="w-4 h-4 text-amber-500" />
        )}
      </div>
      <button 
        onClick={() => onConfigClick(process)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
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

    <div className="mt-4 flex justify-between items-center">
      <div className="text-sm">
        <span className="text-gray-600">Current: </span>
        <span className="font-medium">{process.current} FTE</span>
      </div>
      <div className="text-sm">
        <span className="text-gray-600">Required: </span>
        <span className="font-medium">{process.required.toFixed(2)} FTE</span>
      </div>
      <button
        onClick={() => onClick(process)}
        className="text-sm text-blue-600 hover:text-blue-800"
      >
        View Details
      </button>
    </div>
  </div>
);

const HRProcessCoverage = ({ staffingData }) => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [configProcess, setConfigProcess] = useState(null);
  const { configs, updateConfig } = useProcessConfig();
  
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
        processKey: 'recruiting',
        gap: ((1.8 - recruiting.requiredFTE) / recruiting.requiredFTE) * 100
      },
      {
        name: "Training & Development",
        current: 0.8,
        required: training.requiredFTE,
        metrics: training.metrics,
        phases: training.phases,
        calculation: training.calculation,
        config: configs.training,
        processKey: 'training',
        gap: ((0.8 - training.requiredFTE) / training.requiredFTE) * 100
      },
      {
        name: "Performance Management",
        current: 1.0,
        required: performance.requiredFTE,
        metrics: performance.metrics,
        phases: performance.phases,
        calculation: performance.calculation,
        config: configs.performance,
        processKey: 'performance',
        gap: ((1.0 - performance.requiredFTE) / performance.requiredFTE) * 100
      },
      {
        name: "HR Admin & Operations",
        current: 2.0,
        required: admin.requiredFTE,
        metrics: admin.metrics,
        phases: admin.phases,
        calculation: admin.calculation,
        config: configs.admin,
        processKey: 'admin',
        gap: ((2.0 - admin.requiredFTE) / admin.requiredFTE) * 100
      }
    ];
  };

  const processes = getProcesses();
  const totalRequired = processes.reduce((acc, p) => acc + p.required, 0);
  const totalCurrent = processes.reduce((acc, p) => acc + p.current, 0);
  const totalGap = ((totalCurrent - totalRequired) / totalRequired) * 100;

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Process Coverage Analysis</h2>
        <div className="flex items-center space-x-4">
          <Calculator className="w-5 h-5 text-blue-600" />
          <div className="text-sm text-gray-600">
            <span>Current: {totalCurrent.toFixed(1)} FTE</span>
            <span className="mx-2">|</span>
            <span>Required: {totalRequired.toFixed(1)} FTE</span>
            <span className="mx-2">|</span>
            <span className={totalGap < -20 ? "text-red-600" : "text-gray-600"}>
              Gap: {totalGap.toFixed(0)}%
            </span>
          </div>
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
            updateConfig(configProcess.processKey, newConfig);
            setConfigProcess(null);
          }}
        />
      )}
    </div>
  );
};

export default HRProcessCoverage;