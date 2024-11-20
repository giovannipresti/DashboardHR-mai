// App.js
import React, { useState } from "react";
import { Users, Brain, Target, Clock, FileText } from "lucide-react";
import HRDashboard from "./HRDashboard";
import RecruitingAnalysis from "./RecruitingAnalysis";
import HRActivitiesAnalysis from "./HRActivitiesAnalysis";
import ExpenseAnalysis from "./ExpenseAnalysis";
import HRTeamEffort from "./HRTeamEffort";
import HRProcessCoverage from "./HRProcessCoverage";
import {
  ProcessConfigProvider,
  useProcessConfig,
} from "./ProcessConfigContext";
import { generateProcessData } from "./processData";

const MainContent = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [staffingData, setStaffingData] = useState({
    employees: 475,
    turnoverPositions: 57,
    growthPositions: 20,
    totalPositions: 77,
    requiredRecruitingFTE: 3.2,
    avlEmployees: 340,
    avlAgency: 50,
    avlContractors: 50,
    eolEmployees: 35,
  });

  const { config } = useProcessConfig();
  const processes = generateProcessData(staffingData, config);

  const navItems = [
    {
      id: "dashboard",
      label: "HR Dashboard",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "process-coverage",
      label: "Process Coverage",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "team-effort",
      label: "Team Effort",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "recruiting",
      label: "Recruiting Analysis",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      id: "expense",
      label: "Expense Analysis",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <HRDashboard staffingData={staffingData} processes={processes} />
        );
      case "process-coverage":
        return (
          <HRProcessCoverage
            staffingData={staffingData}
            onStaffingChange={setStaffingData}
          />
        );
      case "team-effort":
        return (
          <HRTeamEffort staffingData={staffingData} processes={processes} />
        );
      case "recruiting":
        return <RecruitingAnalysis staffingData={staffingData} />;
      case "expense":
        return <ExpenseAnalysis staffingData={staffingData} />;
      default:
        return (
          <HRDashboard staffingData={staffingData} processes={processes} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-lg p-6">
          <h1 className="text-xl font-bold text-blue-700 mb-8">HR Analysis</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 transition-colors ${
                  currentView === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 h-screen overflow-auto">{renderView()}</div>
      </div>
    </div>
  );
};

const App = () => (
  <ProcessConfigProvider>
    <MainContent />
  </ProcessConfigProvider>
);

export default App;
