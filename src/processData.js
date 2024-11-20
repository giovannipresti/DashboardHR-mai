// processData.js
export const generateProcessData = (staffingData, config) => {
  return [
    {
      name: "Recruiting & Talent Acquisition",
      icon: "Users",
      current: 1.8,
      required: staffingData.requiredRecruitingFTE,
      metrics: [
        { label: "Posizioni/Anno", value: "65" },
        { label: "Capacità Attuale", value: "38" },
        { label: "Gap", value: "-41%" },
      ],
      phases: [
        {
          label: "Fase iniziale",
          hours: 6,
          details: "Allineamento e sourcing",
        },
        {
          label: "Primi colloqui",
          hours: 13,
          details: "10 candidati + feedback",
        },
        {
          label: "Shortlist",
          hours: 8,
          details: "Colloqui tecnici e allineamenti",
        },
        { label: "Fase finale", hours: 4, details: "Negoziazione e admin" },
        { label: "Onboarding", hours: 10, details: "Setup e training" },
      ],
    },
    {
      name: "HR Operations & Admin",
      icon: "Settings",
      current: 1.2,
      required: 2.0,
      metrics: [
        { label: "Transazioni/Mese", value: "450" },
        { label: "Digital Process", value: "30%" },
        { label: "Response Time", value: "48h" },
      ],
      phases: [
        {
          label: "Document Management",
          hours: 40,
          details: "Gestione documentale",
        },
        {
          label: "Employee Support",
          hours: 60,
          details: "Supporto dipendenti",
        },
        { label: "HR Operations", hours: 50, details: "Operazioni quotidiane" },
      ],
    },
    {
      name: "Labor Cost & Payroll",
      icon: "Briefcase",
      current: 1.5,
      required: 1.5,
      metrics: [
        { label: "Transazioni/Mese", value: "550" },
        { label: "Automation", value: "45%" },
        { label: "Accuracy", value: "99.8%" },
      ],
      phases: [
        {
          label: "Payroll Processing",
          hours: 60,
          details: "Elaborazione paghe",
        },
        { label: "Cost Analysis", hours: 40, details: "Analisi costi" },
        { label: "Reporting", hours: 20, details: "Reportistica" },
      ],
    },
    {
      name: "Contractor Management",
      icon: "GitBranch",
      current: 0.5,
      required: 1.0,
      metrics: [
        { label: "Contractor HC", value: "50" },
        { label: "Fornitori", value: "12" },
        { label: "Positions/Year", value: "15" },
      ],
      phases: [
        {
          label: "Recruiting & Onboarding",
          hours: 40,
          details: "15 positions/year, 35h/position",
          subMetrics: ["Sourcing", "Selection", "Contracting"],
        },
        {
          label: "Vendor Management",
          hours: 30,
          details: "12 suppliers, Monthly review",
          subMetrics: ["Performance", "Relationship", "Negotiations"],
        },
        {
          label: "Admin & Contracts",
          hours: 20,
          details: "50 contractors, Quarterly renewal",
          subMetrics: ["Contract Management", "Billing", "Compliance"],
        },
      ],
      metrics: [
        { label: "Time to Hire", value: "35 days" },
        { label: "Contract Compliance", value: "100%" },
        { label: "Vendor Score", value: "4.2/5" },
      ],
    },
  ];
};
