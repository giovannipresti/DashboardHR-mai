// processData.js
import {
  Users,
  Brain,
  Settings,
  FileText,
  Target,
  Clock,
  DollarSign,
} from "lucide-react";

const ANNUAL_HOURS = 1720;

// Utility functions for FTE calculations
const calculateFTE = (hours) => hours / ANNUAL_HOURS;
const roundFTE = (fte) => Math.round(fte * 1000) / 1000;
const getBasicHours = (base, population) => base * population;

export const generateProcessData = (staffingData) => {
  const { employees, totalPositions, turnoverPositions, growthPositions } =
    staffingData;
  const seniorPositions = Math.round(totalPositions * 0.4);
  const juniorPositions = totalPositions - seniorPositions;

  // Core process time calculations
  const recruitingHours = {
    seniorHiring: seniorPositions * 40, // 40h per senior hire
    juniorHiring: juniorPositions * 26, // 26h per junior hire
    onboarding: totalPositions * 9, // 9h per hire for onboarding
    sourcingBase: Math.max(totalPositions * 8, 240), // Base hours + per position
    adminBase: Math.max(totalPositions * 4, 180), // Base admin hours
  };

  const trainingHours = {
    needsAnalysis: employees * 0.9, // 0.9h per employee
    delivery: employees * 1.8, // 1.8h per employee
    coordination: employees * 0.6, // 0.6h per employee
    reporting: employees * 0.4, // 0.4h per employee
  };

  const performanceHours = {
    setup: employees * 0.2, // 0.2h per employee
    execution: employees * 0.5, // 0.5h per employee
    review: employees * 0.3, // 0.3h per employee
    reporting: employees * 0.2, // 0.2h per employee
  };

  const adminHours = {
    personnel: employees * 2, // 2h per employee
    payroll: employees * 1.5, // 1.5h per employee
    timeAttendance: employees * 1, // 1h per employee
    support: employees * 1, // 1h per employee
  };

  return [
    {
      name: "Recruiting & Talent Acquisition",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      current: 1.8,
      required: roundFTE(
        calculateFTE(Object.values(recruitingHours).reduce((a, b) => a + b, 0))
      ),
      calculation: `Based on: ${totalPositions} positions/year (${turnoverPositions} turnover + ${growthPositions} growth)`,
      subProcesses: [
        {
          name: "Senior Recruiting",
          hours: recruitingHours.seniorHiring,
          volume: seniorPositions,
          fte: roundFTE(calculateFTE(recruitingHours.seniorHiring)),
          notes: "40h per senior hire (full cycle)",
        },
        {
          name: "Junior/Middle Recruiting",
          hours: recruitingHours.juniorHiring,
          volume: juniorPositions,
          fte: roundFTE(calculateFTE(recruitingHours.juniorHiring)),
          notes: "26h per junior hire (full cycle)",
        },
        {
          name: "Onboarding Programs",
          hours: recruitingHours.onboarding,
          fte: roundFTE(calculateFTE(recruitingHours.onboarding)),
          notes: "9h per new hire",
        },
        {
          name: "Sourcing & Pipeline",
          hours: recruitingHours.sourcingBase,
          fte: roundFTE(calculateFTE(recruitingHours.sourcingBase)),
          notes: "Base + per position effort",
        },
        {
          name: "Process Administration",
          hours: recruitingHours.adminBase,
          fte: roundFTE(calculateFTE(recruitingHours.adminBase)),
          notes: "Base + per position admin",
        },
      ],
    },
    {
      name: "Training & Development",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      current: 0.8,
      required: roundFTE(
        calculateFTE(Object.values(trainingHours).reduce((a, b) => a + b, 0))
      ),
      calculation: `Based on: ${employees} employees training load`,
      subProcesses: [
        {
          name: "Training Needs Analysis",
          hours: trainingHours.needsAnalysis,
          fte: roundFTE(calculateFTE(trainingHours.needsAnalysis)),
          notes: `${(0.9).toFixed(1)}h per employee analysis time`,
        },
        {
          name: "Training Delivery",
          hours: trainingHours.delivery,
          fte: roundFTE(calculateFTE(trainingHours.delivery)),
          notes: `${(1.8).toFixed(1)}h per employee delivery time`,
        },
        {
          name: "Program Coordination",
          hours: trainingHours.coordination,
          fte: roundFTE(calculateFTE(trainingHours.coordination)),
          notes: `${(0.6).toFixed(1)}h per employee coordination`,
        },
        {
          name: "Tracking & Reporting",
          hours: trainingHours.reporting,
          fte: roundFTE(calculateFTE(trainingHours.reporting)),
          notes: `${(0.4).toFixed(1)}h per employee reporting`,
        },
      ],
    },
    {
      name: "Performance Management",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      current: 0.8,
      required: roundFTE(
        calculateFTE(Object.values(performanceHours).reduce((a, b) => a + b, 0))
      ),
      calculation: `Based on: ${employees} employees performance management`,
      subProcesses: [
        {
          name: "Process Setup & Training",
          hours: performanceHours.setup,
          fte: roundFTE(calculateFTE(performanceHours.setup)),
          notes: "Setup, training materials, communications",
        },
        {
          name: "Process Execution",
          hours: performanceHours.execution,
          fte: roundFTE(calculateFTE(performanceHours.execution)),
          notes: "Reviews, feedback, monitoring",
        },
        {
          name: "Review & Calibration",
          hours: performanceHours.review,
          fte: roundFTE(calculateFTE(performanceHours.review)),
          notes: "Calibration meetings, analysis",
        },
        {
          name: "Reporting & Analytics",
          hours: performanceHours.reporting,
          fte: roundFTE(calculateFTE(performanceHours.reporting)),
          notes: "Results analysis and reporting",
        },
      ],
    },
    {
      name: "HR Administration",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      current: 2.4,
      required: roundFTE(
        calculateFTE(Object.values(adminHours).reduce((a, b) => a + b, 0))
      ),
      calculation: `Based on: ${employees} employees admin load`,
      subProcesses: [
        {
          name: "Personnel Administration",
          hours: adminHours.personnel,
          fte: roundFTE(calculateFTE(adminHours.personnel)),
          notes: "Documentation, contracts, policies",
        },
        {
          name: "Payroll Management",
          hours: adminHours.payroll,
          fte: roundFTE(calculateFTE(adminHours.payroll)),
          notes: "Payroll processing and controls",
        },
        {
          name: "Time & Attendance",
          hours: adminHours.timeAttendance,
          fte: roundFTE(calculateFTE(adminHours.timeAttendance)),
          notes: "Time tracking, leave management",
        },
        {
          name: "Employee Support",
          hours: adminHours.support,
          fte: roundFTE(calculateFTE(adminHours.support)),
          notes: "Employee inquiries and support",
        },
      ],
    },
  ];
};
