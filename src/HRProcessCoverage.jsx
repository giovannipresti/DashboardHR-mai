import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./UI";
import {
  AlertTriangle,
  Users,
  Brain,
  Settings,
  Calculator,
  Briefcase,
  Search,
  GitBranch,
} from "lucide-react";

const HRProcessCoverage = () => {
  const processes = [
    {
      name: "Recruiting & Talent Acquisition",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      current: 1.8,
      required: 3.0,
      metrics: [
        { label: "Posizioni/Anno", value: "65" },
        { label: "Capacità Attuale", value: "38" },
        { label: "Gap", value: "-41%" },
      ],
    },
    {
      name: "HR Operations & Admin",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      current: 1.2,
      required: 2.0,
      metrics: [
        { label: "Transazioni/Mese", value: "450" },
        { label: "Digital Process", value: "30%" },
        { label: "Response Time", value: "48h" },
      ],
    },
    {
      name: "Labor Cost & Payroll",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      current: 1.5,
      required: 1.5,
      metrics: [
        { label: "Transazioni/Mese", value: "550" },
        { label: "Automation", value: "45%" },
        { label: "Accuracy", value: "99.8%" },
      ],
    },
  ];

  const contractorProcess = {
    name: "Contractor Management",
    icon: <GitBranch className="w-6 h-6 text-blue-600" />,
    current: 0.5,
    required: 1.0,
    subProcesses: [
      {
        name: "Recruiting & Onboarding",
        hours: 40,
        metrics: ["15 positions/year", "35h/position"],
      },
      {
        name: "Vendor Management",
        hours: 30,
        metrics: ["12 suppliers", "Monthly review"],
      },
      {
        name: "Admin & Contracts",
        hours: 20,
        metrics: ["50 contractors", "Quarterly renewal"],
      },
    ],
  };

  const totalFTEGap =
    processes.reduce((acc, p) => acc + (p.required - p.current), 0) +
    (contractorProcess.required - contractorProcess.current);

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          HR Process Coverage Analysis
        </h1>
        <div className="flex items-center space-x-2">
          <Calculator className="w-6 h-6 text-blue-600" />
          <span className="text-sm text-gray-600">Current FTE: 7.5</span>
        </div>
      </div>

      {processes.map((process) => (
        <Card key={process.name} className="shadow-lg">
          <CardContent>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-medium">{process.name}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Current:</span>
                    <span className="ml-2 font-medium">
                      {process.current.toFixed(1)} FTE
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Required:</span>
                    <span className="ml-2 font-medium">
                      {process.required.toFixed(1)} FTE
                    </span>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      process.current >= process.required
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {(
                      ((process.current - process.required) /
                        process.required) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {process.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-lg font-medium mt-1">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Contractor Process Card */}
      <Card className="shadow-lg">
        <CardContent>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                  {contractorProcess.icon}
                </div>
                <h3 className="text-lg font-medium">
                  {contractorProcess.name}
                </h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <span className="text-sm text-gray-600">Current:</span>
                  <span className="ml-2 font-medium">
                    {contractorProcess.current.toFixed(1)} FTE
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">Required:</span>
                  <span className="ml-2 font-medium">
                    {contractorProcess.required.toFixed(1)} FTE
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                  {(
                    ((contractorProcess.current - contractorProcess.required) /
                      contractorProcess.required) *
                    100
                  ).toFixed(0)}
                  %
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {contractorProcess.subProcesses.map((subprocess, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-900 mb-2">
                    {subprocess.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {subprocess.metrics.map((metric, midx) => (
                      <div key={midx} className="mb-1">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardContent>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  FTE Gap
                </h4>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-2xl font-bold text-red-500">
                    {totalFTEGap.toFixed(1)}
                  </span>
                  <span className="text-gray-600">Additional FTE needed</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Critical Areas
                </h4>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold">
                    {
                      [...processes, contractorProcess].filter(
                        (p) => p.current < p.required
                      ).length
                    }
                  </span>
                  <span className="text-gray-600">understaffed processes</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRProcessCoverage;
