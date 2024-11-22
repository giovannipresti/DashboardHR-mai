// App.js
import React, { useState } from 'react';
import { Users, Brain, Target, Clock, FileText, Settings } from 'lucide-react';
import HRDashboard from './HRDashboard';
import HRProcessCoverage from './HRProcessCoverage';
import RecruitingAnalysis from './RecruitingAnalysis';
import ProcessDetail from './components/recruiting/ProcessDetail';
import { ProcessConfigProvider } from './ProcessConfigContext';
import { useStaffingData } from './useStaffingData';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [staffingData, updateStaffingData] = useStaffingData();

  const navItems = [
    {
      id: 'dashboard',
      label: 'HR Dashboard',
      icon: <Users className="w-4 h-4" />,
      component: HRDashboard,
      showInNav: true
    },
    {
      id: 'process-coverage',
      label: 'Process Coverage',
      icon: <Target className="w-4 h-4" />,
      component: HRProcessCoverage,
      showInNav: true
    },
    {
      id: 'recruiting',
      label: 'Recruiting Analysis',
      icon: <Brain className="w-4 h-4" />,
      component: RecruitingAnalysis,
      showInNav: true
    },
    {
      id: 'recruiting-process',
      label: 'Recruiting Process',
      icon: <Clock className="w-4 h-4" />,
      component: ProcessDetail,
      showInNav: true,
      description: 'Detailed analysis of recruiting process phases and effort'
    }
  ];

  const CurrentComponent = navItems.find(item => item.id === currentView)?.component || HRDashboard;
  const currentNavItem = navItems.find(item => item.id === currentView);

  return (
    <ProcessConfigProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-64 min-h-screen bg-white shadow-lg">
            <div className="p-6">
              <h1 className="text-xl font-bold text-blue-700 mb-6">HR Analysis</h1>
              <nav className="space-y-1">
                {navItems.filter(item => item.showInNav).map(item => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 transition-colors ${
                      currentView === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-h-screen">
            <div className="p-6">
              {/* Header */}
              {currentNavItem?.description && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    {currentNavItem.icon}
                    <h1 className="text-2xl font-bold text-gray-900">
                      {currentNavItem.label}
                    </h1>
                  </div>
                  {currentNavItem.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {currentNavItem.description}
                    </p>
                  )}
                </div>
              )}

              {/* Main Component */}
              <CurrentComponent 
                staffingData={staffingData}
                onStaffingChange={updateStaffingData}
              />
            </div>
          </div>
        </div>
      </div>
    </ProcessConfigProvider>
  );
};

export default App;