// ProcessConfigContext.js
import React, { createContext, useContext, useState } from 'react';

const defaultConfig = {
  recruiting: {
    seniorHireHours: 40,
    juniorHireHours: 26,
    seniorSplit: 0.4,
    turnoverRate: 0.12,
    growthPositions: 20,
    onboardingHours: 10
  },
  training: {
    analysisHours: 0.9,
    deliveryHours: 1.8,
    adminHours: 0.6
  },
  performance: {
    setupHours: 0.2,
    executionHours: 0.5,
    reviewHours: 0.3
  },
  admin: {
    personnelHours: 2,
    payrollHours: 1.5,
    timeAttendanceHours: 1,
    supportHours: 1
  }
};

const ProcessConfigContext = createContext();

export function ProcessConfigProvider({ children }) {
  const [configs, setConfigs] = useState(() => {
    const savedConfigs = localStorage.getItem('processConfigs');
    return savedConfigs ? JSON.parse(savedConfigs) : defaultConfig;
  });

  const updateConfig = (processKey, newConfig) => {
    setConfigs(prev => {
      const updated = {
        ...prev,
        [processKey]: { ...prev[processKey], ...newConfig }
      };
      localStorage.setItem('processConfigs', JSON.stringify(updated));
      return updated;
    });
  };

  const resetConfig = (processKey) => {
    setConfigs(prev => ({
      ...prev,
      [processKey]: defaultConfig[processKey]
    }));
  };

  const value = {
    configs,
    updateConfig,
    resetConfig,
    defaultConfig
  };

  return (
    <ProcessConfigContext.Provider value={value}>
      {children}
    </ProcessConfigContext.Provider>
  );
}

export function useProcessConfig() {
  const context = useContext(ProcessConfigContext);
  if (!context) {
    throw new Error('useProcessConfig must be used within ProcessConfigProvider');
  }
  return context;
}