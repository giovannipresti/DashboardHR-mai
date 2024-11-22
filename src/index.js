import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Export calculations
export { calculateRecruitingFTE } from './recruitingProcess';
export { calculateTrainingFTE } from './trainingProcess';
export { calculatePerformanceFTE } from './performanceProcess';
export { calculateAdminFTE } from './adminProcess';

export const calculateTotalFTE = (configs, headcount) => {
  const recruiting = calculateRecruitingFTE(configs.recruiting, headcount);
  const training = calculateTrainingFTE(configs.training, headcount);
  const performance = calculatePerformanceFTE(configs.performance, headcount);
  const admin = calculateAdminFTE(configs.admin, headcount);

  return {
    recruiting,
    training,
    performance,
    admin,
    totalFTE: recruiting.requiredFTE + 
              training.requiredFTE + 
              performance.requiredFTE + 
              admin.requiredFTE
  };
};
