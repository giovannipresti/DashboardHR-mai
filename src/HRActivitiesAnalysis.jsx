import React from "react";
import { Card } from "./UI";
import { Users, Clock, TrendingDown, Settings, ArrowRight } from "lucide-react";

const HRActivitiesAnalysis = () => {
  const teamActivities = [
    {
      role: "Payroll Specialist",
      name: "Manuela",
      currentActivities: [
        {
          name: "Gestione Note Spese",
          hours: 80,
          automationPotential: "Alto",
          impact: "Concur riduce effort 70%",
        },
        {
          name: "Pagamenti",
          hours: 30,
          automationPotential: "Alto",
          impact: "Automazione bancaria 60%",
        },
      ],
      futureState: {
        automation: ["Concur", "Banking Integration"],
        newFocus: ["Analytics", "Process Optimization"],
      },
    },
    {
      role: "HR Specialist",
      name: "Barbara",
      currentActivities: [
        {
          name: "Training Management",
          hours: 60,
          automationPotential: "Medio",
          impact: "LMS riduce effort 50%",
        },
        {
          name: "Admin Tasks",
          hours: 40,
          automationPotential: "Alto",
          impact: "Workflow automation 70%",
        },
      ],
      futureState: {
        automation: ["LMS", "Workflow Tools"],
        newFocus: ["Development Programs", "Strategic HR"],
      },
    },
  ];

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          HR Activities Analysis
        </h1>
      </div>

      {teamActivities.map((member) => (
        <Card key={member.name} className="mb-6">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  {member.role}
                </h2>
                <p className="text-sm text-gray-600">{member.name}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {member.currentActivities.map((activity) => (
                  <div key={activity.name} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">
                        {activity.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          activity.automationPotential === "Alto"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {activity.automationPotential} potenziale
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <div className="flex items-center justify-between">
                        <span>Ore attuali:</span>
                        <span className="font-medium">{activity.hours}h</span>
                      </div>
                      <p className="mt-2">{activity.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Automazioni Previste
                    </h3>
                    <ul className="space-y-1">
                      {member.futureState.automation.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <Settings className="w-4 h-4 text-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Focus Futuro
                    </h3>
                    <ul className="space-y-1">
                      {member.futureState.newFocus.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <ArrowRight className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HRActivitiesAnalysis;
