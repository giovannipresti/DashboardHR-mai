import React from "react";
import { Card } from "./UI";
import {
  Users,
  Brain,
  Target,
  Settings,
  DollarSign,
  Briefcase,
  UserPlus,
  GitBranch,
} from "lucide-react";

const HRTeamEffort = () => {
  const hoursToFTE = (hours) => (hours / 143).toFixed(2);

  const teamMembers = [
    {
      role: "Head of HR",
      name: "Presti",
      focusAreas: [
        "Direzione strategica",
        "Gestione team",
        "Relazioni corporate",
      ],
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Strategic Planning",
          hours: 57,
          category: "Strategic",
        },
        {
          name: "Team Management",
          hours: 43,
          category: "Management",
        },
        {
          name: "Corporate Relations",
          hours: 43,
          category: "Strategic",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "HR Business Partner",
      name: "Pizzinato",
      focusAreas: ["Recruiting senior", "People partnership Emilia Romagna"],
      icon: <Target className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Senior Recruiting",
          hours: 86,
          category: "Recruiting",
        },
        {
          name: "People Partnership",
          hours: 57,
          category: "Strategic",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "HR Specialist",
      name: "Borella",
      focusAreas: [
        "Training Management",
        "Procedure amministrative",
        "Immigration",
        "Onboarding Torino",
      ],
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Training Management",
          hours: 57,
          category: "Development",
        },
        {
          name: "Immigration & Admin",
          hours: 29,
          category: "Admin",
        },
        {
          name: "Procedure Admin",
          hours: 29,
          category: "Admin",
        },
        {
          name: "Onboarding",
          hours: 29,
          category: "Operations",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "Labour Cost Specialist",
      name: "Ramondetti",
      focusAreas: [
        "Gestione costo del lavoro",
        "MBO e compensation",
        "Reporting HR",
        "Gestione SAP",
      ],
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Labor Cost Management",
          hours: 57,
          category: "Admin",
        },
        {
          name: "Compensation & MBO",
          hours: 43,
          category: "Strategic",
        },
        {
          name: "HR Reporting & SAP",
          hours: 29,
          category: "Operations",
        },
        {
          name: "SAP Management",
          hours: 14,
          category: "Operations",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "Payroll Specialist",
      name: "Gadaleta",
      focusAreas: ["Amministrazione personale", "Gestione payroll", "Benefits"],
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Payroll Management",
          hours: 72,
          category: "Admin",
        },
        {
          name: "Personnel Admin",
          hours: 43,
          category: "Admin",
        },
        {
          name: "Benefits Administration",
          hours: 29,
          category: "Admin",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "HR Professional EOL",
      name: "Labarile",
      focusAreas: [
        "Full-cycle HR per EOL",
        "Recruiting e onboarding",
        "Training ed operations",
      ],
      icon: <Users className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "EOL Recruiting & Onboarding",
          hours: 57,
          category: "Recruiting",
        },
        {
          name: "EOL Training",
          hours: 43,
          category: "Development",
        },
        {
          name: "EOL HR Operations",
          hours: 43,
          category: "Operations",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "Recruiter",
      name: "Beliunaite",
      focusAreas: ["Recruiting junior/middle", "Supporto onboarding"],
      icon: <UserPlus className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Junior/Middle Recruiting",
          hours: 100,
          category: "Recruiting",
        },
        {
          name: "Onboarding Support",
          hours: 43,
          category: "Operations",
        },
      ],
      fteCap: 1.0,
    },
    {
      role: "Flexibility & Contractors Manager",
      name: "Luppi (50%)",
      focusAreas: [
        "Gestione flessibilità",
        "Coordinamento contractor",
        "Gestione fornitori engineering",
      ],
      icon: <GitBranch className="w-6 h-6 text-blue-600" />,
      activities: [
        {
          name: "Contractor Management",
          hours: 29,
          category: "Operations",
        },
        {
          name: "Vendor Management",
          hours: 21,
          category: "Admin",
        },
        {
          name: "Flexibility Management",
          hours: 21,
          category: "Operations",
        },
      ],
      fteCap: 0.5,
    },
  ];

  const calculateCategoryTotals = () => {
    const totals = {
      Strategic: 0,
      Recruiting: 0,
      Development: 0,
      Operations: 0,
      Admin: 0,
      Management: 0,
    };

    teamMembers.forEach((member) => {
      member.activities.forEach((activity) => {
        totals[activity.category] += activity.hours;
      });
    });

    return totals;
  };

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            AVL Italia HR Team Effort Analysis
          </h1>
          <p className="text-sm text-gray-600 mt-2">Total FTE Available: 7.5</p>
        </div>
      </div>

      <Card className="shadow-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-blue-700 mb-4">
            Team Effort Distribution
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(calculateCategoryTotals()).map(
              ([category, hours]) => (
                <div key={category} className="p-4 bg-white rounded-lg border">
                  <div className="text-sm text-gray-600">{category}</div>
                  <div className="text-xl font-bold text-gray-900">
                    {hoursToFTE(hours)} FTE
                  </div>
                  <div className="text-sm text-gray-500">{hours} hours</div>
                </div>
              )
            )}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.name} className="shadow-lg">
            <div className="p-6">
              <div className="flex flex-row items-center space-x-2">
                {member.icon}
                <div>
                  <h3 className="text-lg font-medium text-blue-700">
                    {member.role}
                  </h3>
                  <div className="text-sm text-gray-600">{member.name}</div>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">
                    Activities & Effort:
                  </div>
                  {member.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-600">{activity.name}</span>
                      <div className="text-right">
                        <span className="font-medium">
                          {hoursToFTE(activity.hours)} FTE
                        </span>
                        <span className="text-gray-500 text-xs ml-2">
                          ({activity.hours}h)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Effort vs Cap:</span>
                    <div>
                      <span
                        className={`font-medium ${
                          hoursToFTE(
                            member.activities.reduce(
                              (acc, curr) => acc + curr.hours,
                              0
                            )
                          ) > member.fteCap
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {hoursToFTE(
                          member.activities.reduce(
                            (acc, curr) => acc + curr.hours,
                            0
                          )
                        )}
                      </span>
                      <span className="text-gray-500 ml-1">
                        / {member.fteCap} FTE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HRTeamEffort;
