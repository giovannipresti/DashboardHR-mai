import React, { useState, useEffect } from 'react';
import { Users, Clock, TrendingUp, Settings, Target } from 'lucide-react';

const StatCard = ({ title, value, Icon, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex flex-col items-center">
      {Icon && <Icon className="w-6 h-6 text-blue-500 mb-2" />}
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-lg font-bold">{value}</p>
      {description && (
        <p className="text-xs text-gray-500 mt-1 text-center">{description}</p>
      )}
    </div>
  </div>
);

const HRDashboard = ({ staffingData, processes }) => {
  const [staffing, setStaffing] = useState({
    avlEmployees: 340,
    avlAgency: 50,
    avlContractors: 50,
    eolEmployees: 35,
    turnoverRate: 12,
    growthPositions: 20,
  });

  useEffect(() => {
    if (staffingData) {
      setStaffing({
        avlEmployees: staffingData.avlEmployees,
        avlAgency: staffingData.avlAgency,
        avlContractors: staffingData.avlContractors,
        eolEmployees: staffingData.eolEmployees,
        turnoverRate: 12,
        growthPositions: staffingData.growthPositions,
      });
    }
  }, [staffingData]);

  const totalRequired = processes?.reduce((acc, p) => acc + p.required, 0) || 0;
  const currentTotal = processes?.reduce((acc, p) => acc + p.current, 0) || 0;
  const totalEmployees = staffing.avlEmployees + staffing.avlAgency + 
    staffing.avlContractors + staffing.eolEmployees;
  const currentRatio = Math.round(totalEmployees / currentTotal);
  const targetRatio = Math.round(totalEmployees / totalRequired);

  const stats = [
    {
      title: "Current FTE",
      value: currentTotal.toFixed(1),
      Icon: TrendingUp,
      description: "Total HR team"
    },
    {
      title: "Target FTE",
      value: totalRequired.toFixed(1),
      Icon: Users,
      description: "Based on workload"
    },
    {
      title: "Total HC",
      value: totalEmployees,
      Icon: Users,
      description: "Total workforce"
    },
    {
      title: "Current Ratio",
      value: `1:${currentRatio}`,
      Icon: Settings,
      description: "HR:Employee ratio"
    },
    {
      title: "Target Ratio",
      value: `1:${targetRatio}`,
      Icon: Target,
      description: "Based on workload"
    },
    {
      title: "Gap",
      value: (totalRequired - currentTotal).toFixed(1),
      Icon: Clock,
      description: "Additional FTE needed"
    }
  ];

  // Staffing Calculator Section
  const turnoverPositions = Math.round((totalEmployees * staffing.turnoverRate) / 100);
  const totalPositions = turnoverPositions + staffing.growthPositions;
  const requiredRecruitingFTE = ((totalPositions * 40 * 0.4 + totalPositions * 26 * 0.6) / 1720).toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">HR Transformation Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Staffing Calculator */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Staffing Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AVL Employees
              </label>
              <input
                type="number"
                value={staffing.avlEmployees}
                onChange={(e) => setStaffing({...staffing, avlEmployees: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AVL Agency Workers
              </label>
              <input
                type="number"
                value={staffing.avlAgency}
                onChange={(e) => setStaffing({...staffing, avlAgency: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AVL Contractors
              </label>
              <input
                type="number"
                value={staffing.avlContractors}
                onChange={(e) => setStaffing({...staffing, avlContractors: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EOL Employees
              </label>
              <input
                type="number"
                value={staffing.eolEmployees}
                onChange={(e) => setStaffing({...staffing, eolEmployees: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Turnover Rate (%)
              </label>
              <input
                type="number"
                value={staffing.turnoverRate}
                onChange={(e) => setStaffing({...staffing, turnoverRate: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Growth Positions
              </label>
              <input
                type="number"
                value={staffing.growthPositions}
                onChange={(e) => setStaffing({...staffing, growthPositions: Number(e.target.value)})}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Calculator Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Total HC</div>
            <div className="text-xl font-bold text-blue-700">{totalEmployees}</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Turnover Positions</div>
            <div className="text-xl font-bold text-blue-700">{turnoverPositions}</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Growth Positions</div>
            <div className="text-xl font-bold text-blue-700">{staffing.growthPositions}</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Required Recruiting FTE</div>
            <div className="text-xl font-bold text-blue-700">{requiredRecruitingFTE}</div>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-medium mb-4">Workforce Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">AVL Employees</span>
              <span className="font-medium">{staffing.avlEmployees}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">AVL Agency</span>
              <span className="font-medium">{staffing.avlAgency}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">AVL Contractors</span>
              <span className="font-medium">{staffing.avlContractors}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">EOL Employees</span>
              <span className="font-medium">{staffing.eolEmployees}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm font-medium">Total Workforce</span>
              <span className="font-medium">{totalEmployees}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-medium mb-4">Recruiting Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Total Positions</span>
              <span className="font-medium">{totalPositions}/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Turnover Positions</span>
              <span className="font-medium">{turnoverPositions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Growth Positions</span>
              <span className="font-medium">{staffing.growthPositions}</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-sm">Required Recruiting FTE</span>
              <span className="font-medium text-blue-600">{requiredRecruitingFTE}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;