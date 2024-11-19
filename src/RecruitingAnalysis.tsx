import React from "react";
import { Users, TrendingUp, AlertTriangle } from "lucide-react";

interface MetricCardProps {
  label: string;
  current: string;
  target: string;
  gap: string;
}

function MetricCard({ label, current, target, gap }: MetricCardProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-900">{label}</h3>
        <AlertTriangle className="w-5 h-5 text-amber-500" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Attuale:</span>
          <span>{current}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Target:</span>
          <span>{target}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Gap:</span>
          <span className="text-red-600">{gap}</span>
        </div>
      </div>
    </div>
  );
}

export default function RecruitingAnalysis() {
  const metrics = [
    {
      label: "Posizioni/Anno",
      current: "38",
      target: "65",
      gap: "-41%",
    },
    {
      label: "Time to Hire",
      current: "45 giorni",
      target: "30 giorni",
      gap: "+50%",
    },
    {
      label: "Conversion Rate",
      current: "15%",
      target: "25%",
      gap: "-40%",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recruiting Analysis</h2>
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">Gap Capacità: -41%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}
