// App.js
import React, { useState } from 'react';
import { Users, Brain, Target, Clock } from 'lucide-react';
import { ProcessConfigProvider } from './ProcessConfigContext';
import { useStaffingData } from './useStaffingData';
import HRDashboard from './HRDashboard';
import HRProcessCoverage from './HRProcessCoverage';
import RecruitingAnalysis from './RecruitingAnalysis';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [staffingData, updateStaffingData] = useStaffingData();

  const navItems = [
    {
      id: 'dashboard',
      label: 'HR Dashboard',
      icon: <Users className="w-4 h-4" />,
      component: HRDashboard
    },
    {
      id: 'process-coverage',
      label: 'Process Coverage',
      icon: <Target className="w-4 h-4" />,
      component: HRProcessCoverage
    },
    {
      id: 'recruiting',
      label: 'Recruiting Analysis',
      icon: <Brain className="w-4 h-4" />,
      component: RecruitingAnalysis
    }
  ];

  const CurrentComponent = navItems.find(item => item.id === currentView)?.component || HRDashboard;

  return (
    <ProcessConfigProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 min-h-screen bg-white shadow-lg p-6">
            <h1 className="text-xl font-bold text-blue-700 mb-8">HR Analysis</h1>
            <nav className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 transition-colors ${
                    currentView === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 h-screen overflow-auto">
            <CurrentComponent 
              staffingData={staffingData}
              onStaffingChange={updateStaffingData}
            />
          </div>
        </div>
      </div>
    </ProcessConfigProvider>
  );
};

export default App;