// HRDashboard.jsx
import React from "react";
import { Users, TrendingUp, Settings, Target, Clock } from "lucide-react";
import { Card } from "./UI";
import { useProcessConfig } from "./ProcessConfigContext";

function StatCard({ title, value, Icon, description }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex flex-col items-center">
        {Icon && <Icon className="w-6 h-6 text-blue-500 mb-2" />}
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-bold">{value}</p>
        {description && (
          <p className="text-xs text-gray-500 mt-1 text-center">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

const HRDashboard = ({ staffingData, processes }) => {
  const { config } = useProcessConfig();

  const totalRequired = processes.reduce((acc, p) => acc + p.required, 0);
  const currentTotal = processes.reduce((acc, p) => acc + p.current, 0);
  const currentRatio = Math.round(staffingData.employees / currentTotal);
  const targetRatio = Math.round(staffingData.employees / totalRequired);

  const stats = [
    {
      title: "Current FTE",
      value: currentTotal.toFixed(1),
      Icon: TrendingUp,
      description: "Total HR team",
    },
    {
      title: "Target FTE",
      value: totalRequired.toFixed(1),
      Icon: Users,
      description: "Based on workload analysis",
    },
    {
      title: "Total HC",
      value: staffingData.employees,
      Icon: Users,
      description: "Total workforce",
    },
    {
      title: "Current Ratio",
      value: `1:${currentRatio}`,
      Icon: Settings,
      description: "HR:Employee ratio",
    },
    {
      title: "Target Ratio",
      value: `1:${targetRatio}`,
      Icon: Target,
      description: "Based on workload",
    },
    {
      title: "Gap",
      value: (totalRequired - currentTotal).toFixed(1),
      Icon: Clock,
      description: "Additional FTE needed",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">HR Transformation Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            Icon={stat.Icon}
            description={stat.description}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-4">
            <h3 className="font-medium mb-4">Workforce Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">AVL Employees</span>
                <span className="font-medium">{staffingData.avlEmployees}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">AVL Agency</span>
                <span className="font-medium">{staffingData.avlAgency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">AVL Contractors</span>
                <span className="font-medium">
                  {staffingData.avlContractors}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">EOL Employees</span>
                <span className="font-medium">{staffingData.eolEmployees}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm font-medium">Total Workforce</span>
                <span className="font-medium">{staffingData.employees}</span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-4">
            <h3 className="font-medium mb-4">Recruiting Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total Positions</span>
                <span className="font-medium">
                  {staffingData.totalPositions}/year
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Turnover Positions</span>
                <span className="font-medium">
                  {staffingData.turnoverPositions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Growth Positions</span>
                <span className="font-medium">
                  {staffingData.growthPositions}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-sm">Required Recruiting FTE</span>
                <span className="font-medium text-blue-600">
                  {staffingData.requiredRecruitingFTE}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;
