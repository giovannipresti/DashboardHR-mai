// processData.js
import { calculateRecruitingFTE } from './recruitingProcess';
import { calculateTrainingFTE } from './trainingProcess';
import { calculatePerformanceFTE } from './performanceProcess';
import { calculateAdminFTE } from './adminProcess';

export const generateProcessData = (staffingData, configs = {}) => {
  const headcount = staffingData.totalEmployees;

  return [
    {
      name: "Recruiting & Talent Acquisition",
      icon: "Users",
      current: 1.8,
      ...calculateRecruitingFTE(configs.recruiting || {}, headcount),
      config: configs.recruiting,
      processKey: 'recruiting'
    },
    {
      name: "Training & Development",
      icon: "Brain",
      current: 0.8,
      ...calculateTrainingFTE(configs.training || {}, headcount),
      config: configs.training,
      processKey: 'training'
    },
    {
      name: "Performance Management",
      icon: "Target",
      current: 1.0,
      ...calculatePerformanceFTE(configs.performance || {}, headcount),
      config: configs.performance,
      processKey: 'performance'
    },
    {
      name: "HR Admin & Operations",
      icon: "Settings",
      current: 2.0,
      ...calculateAdminFTE(configs.admin || {}, headcount),
      config: configs.admin,
      processKey: 'admin'
    }
  ];
};
