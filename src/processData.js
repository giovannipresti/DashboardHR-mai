import { calculateStaffingMetrics } from './utils/calculations';

export const generateProcessData = (staffingData) => {
  const metrics = calculateStaffingMetrics(staffingData);
  
  return [
    {
      name: "Recruiting & Talent Acquisition",
      icon: "Users",
      current: 1.8,
      required: metrics.requiredRecruitingFTE,
      metrics: [
        { 
          label: "Posizioni/Anno", 
          value: metrics.totalPositions.toString() 
        },
        { 
          label: "Capacità Attuale", 
          value: staffingData.currentRecruitingCapacity.toString() 
        },
        { 
          label: "Gap", 
          value: `${metrics.gapPercentage}%` 
        }
      ],
      phases: [
        {
          label: "Fase iniziale",
          hours: 6,
          details: "Allineamento e sourcing"
        },
        {
          label: "Primi colloqui",
          hours: 13,
          details: "10 candidati + feedback"
        },
        {
          label: "Shortlist",
          hours: 8,
          details: "Colloqui tecnici e allineamenti"
        },
        {
          label: "Fase finale",
          hours: 4,
          details: "Negoziazione e admin"
        },
        {
          label: "Onboarding",
          hours: 10,
          details: "Setup e training"
        }
      ]
    },
    {
      name: "HR Operations & Admin",
      icon: "Settings",
      current: 1.2,
      required: 2.0,
      metrics: [
        { label: "Transazioni/Mese", value: "450" },
        { label: "Digital Process", value: "30%" },
        { label: "Response Time", value: "48h" }
      ],
      phases: [
        {
          label: "Document Management",
          hours: 40,
          details: "Gestione documentale"
        },
        {
          label: "Employee Support",
          hours: 60,
          details: "Supporto dipendenti"
        },
        {
          label: "HR Operations",
          hours: 50,
          details: "Operazioni quotidiane"
        }
      ]
    },
    {
      name: "Labor Cost & Payroll",
      icon: "Briefcase",
      current: 1.5,
      required: 1.5,
      metrics: [
        { label: "Transazioni/Mese", value: "550" },
        { label: "Automation", value: "45%" },
        { label: "Accuracy", value: "99.8%" }
      ],
      phases: [
        {
          label: "Payroll Processing",
          hours: 60,
          details: "Elaborazione paghe"
        },
        {
          label: "Cost Analysis",
          hours: 40,
          details: "Analisi costi"
        },
        {
          label: "Reporting",
          hours: 20,
          details: "Reportistica"
        }
      ]
    },
    {
      name: "Contractor Management",
      icon: "GitBranch",
      current: 0.5,
      required: 1.0,
      metrics: [
        { label: "Contractor HC", value: "50" },
        { label: "Fornitori", value: "12" },
        { label: "Positions/Year", value: "15" }
      ],
      phases: [
        {
          label: "Recruiting & Onboarding",
          hours: 40,
          details: "15 positions/year, 35h/position",
          subMetrics: ["Sourcing", "Selection", "Contracting"]
        },
        {
          label: "Vendor Management",
          hours: 30,
          details: "12 suppliers, Monthly review",
          subMetrics: ["Performance", "Relationship", "Negotiations"]
        },
        {
          label: "Admin & Contracts",
          hours: 20,
          details: "50 contractors, Quarterly renewal",
          subMetrics: ["Contract Management", "Billing", "Compliance"]
        }
      ]
    },
    {
      name: "Training & Development",
      icon: "Brain",
      current: 0.8,
      required: 1.2,
      metrics: [
        { label: "Ore/Dipendente", value: "12" },
        { label: "Corsi/Anno", value: "25" },
        { label: "Digital Learning", value: "30%" }
      ],
      phases: [
        {
          label: "Training Needs Analysis",
          hours: 120,
          details: "Analysis and Planning"
        },
        {
          label: "Content Development",
          hours: 200,
          details: "Material preparation"
        },
        {
          label: "Training Delivery",
          hours: 400,
          details: "Course execution"
        },
        {
          label: "Assessment & Reporting",
          hours: 100,
          details: "Evaluation and reporting"
        }
      ]
    },
    {
      name: "Employee Relations",
      icon: "Users",
      current: 0.7,
      required: 0.8,
      metrics: [
        { label: "Cases/Month", value: "15" },
        { label: "Resolution Time", value: "5d" },
        { label: "Satisfaction", value: "4.2/5" }
      ],
      phases: [
        {
          label: "Case Management",
          hours: 30,
          details: "Employee relations"
        },
        {
          label: "Communication",
          hours: 20,
          details: "Internal comms"
        },
        {
          label: "Policy & Compliance",
          hours: 15,
          details: "Policy management"
        }
      ]
    },
    {
      name: "Performance Management",
      icon: "Target",
      current: 1.0,
      required: 1.0,
      metrics: [
        { label: "Reviews/Year", value: "475" },
        { label: "Digital Process", value: "60%" },
        { label: "Completion Rate", value: "98%" }
      ],
      phases: [
        {
          label: "Process Setup",
          hours: 80,
          details: "Configuration and prep"
        },
        {
          label: "Execution Support",
          hours: 240,
          details: "Manager and employee support"
        },
        {
          label: "Review & Analysis",
          hours: 120,
          details: "Data analysis and reporting"
        }
      ]
    }
  ];
};