import React from "react";
import { Users, TrendingUp, Settings, Target, Clock } from "lucide-react";

function StatCard({ title, value, Icon }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex flex-col items-center">
        {Icon && <Icon className="w-6 h-6 text-blue-500 mb-2" />}
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}

export default function HRDashboard() {
  const stats = [
    { title: "Current FTE", value: "7.5", Icon: TrendingUp },
    { title: "Target FTE", value: "9.5", Icon: Users },
    { title: "Total HC", value: "475", Icon: Users },
    { title: "Current Ratio", value: "1:63", Icon: Settings },
    { title: "Target Ratio", value: "1:50", Icon: Target },
    { title: "Automation Potential", value: "60%", Icon: Clock },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">HR Transformation Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            Icon={stat.Icon}
          />
        ))}
      </div>
    </div>
  );
}
