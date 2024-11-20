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
import React from "react";

export const categories = {
  Strategic: { label: "Strategic", color: "#60A5FA" },
  Recruiting: { label: "Recruiting", color: "#34D399" },
  PeopleDev: { label: "People Development", color: "#F59E0B" },
  Operations: { label: "Operations", color: "#8B5CF6" },
  Admin: { label: "Admin", color: "#EC4899" },
  Management: { label: "Management", color: "#6366F1" },
};

export const initialTeamMembers = [
  {
    role: "Head of HR",
    name: "Presti",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    focusAreas: [
      "Direzione strategica",
      "Gestione team",
      "Relazioni corporate",
    ],
    activities: [
      {
        name: "Direzione strategica",
        category: "Strategic",
        fte: 0.4,
        hoursPerMonth: 57,
      },
      {
        name: "Gestione team",
        category: "Management",
        fte: 0.3,
        hoursPerMonth: 43,
      },
      {
        name: "Relazioni corporate",
        category: "Strategic",
        fte: 0.3,
        hoursPerMonth: 43,
      },
    ],
    fteCap: 1.0,
  },
  {
    role: "HR Business Partner",
    name: "Pizzinato",
    icon: <Target className="w-6 h-6 text-blue-600" />,
    focusAreas: ["Recruiting senior", "People partnership Emilia Romagna"],
    activities: [
      {
        name: "Recruiting senior",
        category: "Recruiting",
        fte: 0.6,
        hoursPerMonth: 86,
      },
      {
        name: "People partnership",
        category: "Strategic",
        fte: 0.4,
        hoursPerMonth: 57,
      },
    ],
    fteCap: 1.0,
    recruitingCapacity: {
      seniorPositions: 11,
      timePerPosition: 40,
    },
  },
  {
    role: "HR Specialist",
    name: "Borella",
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    focusAreas: [
      "Training Management",
      "Procedure amministrative",
      "Immigration",
      "Onboarding Torino",
    ],
    activities: [
      {
        name: "Training Management",
        category: "PeopleDev",
        fte: 0.4,
        hoursPerMonth: 57,
      },
      {
        name: "Immigration & Admin",
        category: "Admin",
        fte: 0.2,
        hoursPerMonth: 29,
      },
      {
        name: "Procedure Admin",
        category: "Admin",
        fte: 0.2,
        hoursPerMonth: 29,
      },
      {
        name: "Onboarding",
        category: "Operations",
        fte: 0.2,
        hoursPerMonth: 29,
      },
    ],
    fteCap: 1.0,
  },
  {
    role: "Labour Cost Specialist",
    name: "Ramondetti",
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    focusAreas: [
      "Gestione costo del lavoro",
      "MBO e compensation",
      "Reporting HR",
      "Gestione SAP",
    ],
    activities: [
      {
        name: "Labor Cost Management",
        category: "Admin",
        fte: 0.4,
        hoursPerMonth: 57,
      },
      {
        name: "Compensation & MBO",
        category: "Strategic",
        fte: 0.3,
        hoursPerMonth: 43,
      },
      {
        name: "HR Reporting & SAP",
        category: "Operations",
        fte: 0.2,
        hoursPerMonth: 29,
      },
      {
        name: "SAP Management",
        category: "Operations",
        fte: 0.1,
        hoursPerMonth: 14,
      },
    ],
    fteCap: 1.0,
  },
  {
    role: "Payroll Specialist",
    name: "Gadaleta",
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    focusAreas: ["Amministrazione personale", "Gestione payroll", "Benefits"],
    activities: [
      {
        name: "Payroll Management",
        category: "Admin",
        fte: 0.5,
        hoursPerMonth: 72,
      },
      {
        name: "Personnel Admin",
        category: "Admin",
        fte: 0.3,
        hoursPerMonth: 43,
      },
      {
        name: "Benefits Administration",
        category: "Admin",
        fte: 0.2,
        hoursPerMonth: 29,
      },
    ],
    fteCap: 1.0,
  },
  {
    role: "HR Professional EOL",
    name: "Labarile",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    focusAreas: [
      "Full-cycle HR per EOL",
      "Recruiting e onboarding",
      "Training ed operations",
    ],
    activities: [
      {
        name: "EOL Recruiting & Onboarding",
        category: "Recruiting",
        fte: 0.4,
        hoursPerMonth: 57,
      },
      {
        name: "EOL Training",
        category: "PeopleDev",
        fte: 0.3,
        hoursPerMonth: 43,
      },
      {
        name: "EOL HR Operations",
        category: "Operations",
        fte: 0.3,
        hoursPerMonth: 43,
      },
    ],
    fteCap: 1.0,
    recruitingCapacity: {
      positions: 4,
      timePerPosition: 26,
    },
  },
  {
    role: "Recruiter",
    name: "Beliunaite",
    icon: <UserPlus className="w-6 h-6 text-blue-600" />,
    focusAreas: ["Recruiting junior/middle", "Supporto onboarding"],
    activities: [
      {
        name: "Junior/Middle Recruiting",
        category: "Recruiting",
        fte: 0.7,
        hoursPerMonth: 100,
      },
      {
        name: "Onboarding Support",
        category: "Operations",
        fte: 0.3,
        hoursPerMonth: 43,
      },
    ],
    fteCap: 1.0,
    recruitingCapacity: {
      positions: 27,
      timePerPosition: 26,
    },
  },
  {
    role: "Flexibility & Contractors Manager",
    name: "Luppi",
    icon: <GitBranch className="w-6 h-6 text-blue-600" />,
    focusAreas: [
      "Gestione flessibilità",
      "Coordinamento contractor",
      "Gestione fornitori engineering",
    ],
    activities: [
      {
        name: "Contractor Management",
        category: "Operations",
        fte: 0.2,
        hoursPerMonth: 29,
      },
      {
        name: "Vendor Management",
        category: "Admin",
        fte: 0.15,
        hoursPerMonth: 21,
      },
      {
        name: "Flexibility Management",
        category: "Operations",
        fte: 0.15,
        hoursPerMonth: 21,
      },
    ],
    fteCap: 0.5,
  },
];

export const organizationData = {
  totalHeadcount: 475,
  breakdown: {
    avl: 340,
    eol: 35,
    interinali: 50,
    contractors: 50,
  },
  hrRatio: "1:63",
  benchmark: "1:45-1:75",
  recruitingNeeds: {
    turnover: 45,
    growth: 20,
    total: 65,
  },
  recruitingCapacity: {
    current: 38,
    gap: -27,
    gapPercentage: -41,
  },
};
