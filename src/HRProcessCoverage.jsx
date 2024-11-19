import React from 'react';
import { Card } from './UI';
import { AlertTriangle, TrendingDown, TrendingUp, Users, Brain, Clock, Settings, FileText } from 'lucide-react';

const HRProcessCoverage = () => {
  const processes = [
    {
      name: "Recruiting & Talent Acquisition",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      currentEffort: {
        fte: 1.7,
        hours: 243,
        team: [
          { name: "Pizzinato", role: "HR Business Partner", fte: 0.6 },
          { name: "Beliunaite", role: "Recruiter", fte: 0.7 },
          { name: "Labarile", role: "HR Professional EOL", fte: 0.4 }
        ],
        activities: [
          "Senior Recruiting (86h)",
          "Junior/Middle Recruiting (100h)",
          "EOL Recruiting (57h)"
        ]
      },
      requiredEffort: {
        fte: 3.0,
        rationale: [
          "65 posizioni/anno da coprire",
          "40h/posizione senior",
          "26h/posizione junior",
          "Sourcing proattivo necessario"
        ]
      },
      gap: -43
    },
    {
      name: "Training & Development",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      currentEffort: {
        fte: 0.7,
        hours: 100,
        team: [
          { name: "Borella", role: "HR Specialist", fte: 0.4 },
          { name: "Labarile", role: "HR Professional EOL", fte: 0.3 }
        ],
        activities: [
          "Training Management (57h)",
          "EOL Training (43h)"
        ]
      },
      requiredEffort: {
        fte: 1.5,
        rationale: [
          "475 dipendenti da gestire",
          "45h/persona/anno necessarie",
          "Framework competenze da implementare",
          "Performance management da strutturare"
        ]
      },
      gap: -53
    },
    {
      name: "HR Operations & Admin",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      currentEffort: {
        fte: 2.1,
        hours: 300,
        team: [
          { name: "Gadaleta", role: "Payroll Specialist", fte: 1.0 },
          { name: "Borella", role: "HR Specialist", fte: 0.4 },
          { name: "Luppi", role: "Flexibility & Contractors Manager", fte: 0.35 },
          { name: "Ramondetti", role: "Labour Cost Specialist", fte: 0.35 }
        ],
        activities: [
          "Payroll & Benefits (144h)",
          "Personnel Admin (43h)",
          "Immigration & Admin (58h)",
          "Contractor Management (55h)"
        ]
      },
      requiredEffort: {
        fte: 1.5,
        rationale: [
          "475 dipendenti da gestire",
          "Processi da automatizzare",
          "Effort riducibile con tecnologia",
          "30h/persona/anno target"
        ]
      },
      gap: 40
    },
    {
      name: "Strategic HR & Organization",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      currentEffort: {
        fte: 1.0,
        hours: 143,
        team: [
          { name: "Presti", role: "Head of HR", fte: 0.7 },
          { name: "Ramondetti", role: "Labour Cost Specialist", fte: 0.3 }
        ],
        activities: [
          "Strategic Planning (57h)",
          "Corporate Relations (43h)",
          "Compensation & MBO (43h)"
        ]
      },
      requiredEffort: {
        fte: 1.5,
        rationale: [
          "Workforce planning strategico",
          "Organization development",
          "Succession planning",
          "Change management"
        ]
      },
      gap: -33
    },
    {
      name: "Employee Relations & Communication",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      currentEffort: {
        fte: 0.5,
        hours: 71,
        team: [
          { name: "Pizzinato", role: "HR Business Partner", fte: 0.4 },
          { name: "Presti", role: "Head of HR", fte: 0.1 }
        ],
        activities: [
          "People Partnership (57h)",
          "Employee Support (14h)"
        ]
      },
      requiredEffort: {
        fte: 1.0,
        rationale: [
          "475 dipendenti da supportare",
          "Engagement da strutturare",
          "Internal communication",
          "Employee experience"
        ]
      },
      gap: -50
    }
  ];

  const totalCurrentFTE = processes.reduce((acc, curr) => acc + curr.currentEffort.fte, 0);
  const totalRequiredFTE = processes.reduce((acc, curr) => acc + curr.requiredEffort.fte, 0);
  const totalGap = ((totalRequiredFTE - totalCurrentFTE) / totalRequiredFTE * 100).toFixed(0);

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">HR Process Coverage Analysis</h1>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Current FTE</p>
            <p className="text-xl font-bold text-gray-900">{totalCurrentFTE.toFixed(1)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Required FTE</p>
            <p className="text-xl font-bold text-blue-600">{totalRequiredFTE.toFixed(1)}</p>
          </div>
          <TrendingDown className="w-6 h-6 text-red-600" />
          <div className="text-center">
            <p className="text-sm text-gray-600">Gap</p>
            <p className="text-xl font-bold text-red-600">-{totalGap}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {processes.map((process) => (
          <Card key={process.name} className="shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {process.icon}
                  <h3 className="text-lg font-medium text-blue-700">{process.name}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Current:</span>
                    <span className="ml-2 font-medium">{process.currentEffort.fte.toFixed(1)} FTE</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Required:</span>
                    <span className="ml-2 font-medium">{process.requiredEffort.fte.toFixed(1)} FTE</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    process.gap > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {process.gap > 0 ? '+' : ''}{process.gap}%
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Current Team Coverage</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {process.currentEffort.team.map((member, idx) => (
                    <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-medium text-blue-700">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                      <div className="text-sm font-medium text-blue-600 mt-1">{member.fte.toFixed(1)} FTE</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700">Current Activities</h4>
                  <ul className="space-y-2">
                    {process.currentEffort.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700">Required Coverage Rationale</h4>
                  <ul className="space-y-2">
                    {process.requiredEffort.rationale.map((reason, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        {process.gap <= 0 ? 
                          <AlertTriangle className="w-4 h-4 text-red-500" /> :
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        }
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="shadow-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-blue-700 mb-4">Coverage Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Critical Gaps</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Recruiting coverage (-43%)</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Development & training (-53%)</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Strategic HR (-33%)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Optimization Areas</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>HR Operations (+40% - reducibile con automazione)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Required Actions</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Settings className="w-4 h-4" />
                  <span>Automazione processi amministrativi</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Potenziamento team recruiting</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Brain className="w-4 h-4" />
                  <span>Strutturazione area development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HRProcessCoverage;