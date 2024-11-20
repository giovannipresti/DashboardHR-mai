// ProcessConfigContext.js
import React, { createContext, useContext, useState } from "react";

const defaultConfig = {
  recruiting: {
    seniorHireHours: 40,
    juniorHireHours: 26,
    onboardingHours: 9,
    sourcingBaseHours: 8,
    adminBaseHours: 4,
  },
  training: {
    analysisHours: 0.9,
    deliveryHours: 1.8,
    coordinationHours: 0.6,
    reportingHours: 0.4,
  },
  performance: {
    setupHours: 0.2,
    executionHours: 0.5,
    reviewHours: 0.3,
    reportingHours: 0.2,
  },
  admin: {
    personnelHours: 2,
    payrollHours: 1.5,
    timeAttendanceHours: 1,
    supportHours: 1,
  },
};

const ProcessConfigContext = createContext();

export const ProcessConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);

  const updateConfig = (processName, newConfig) => {
    setConfig((prev) => {
      const processKey = processName.toLowerCase().split(" ")[0];
      return {
        ...prev,
        [processKey]: { ...prev[processKey], ...newConfig },
      };
    });
  };

  return (
    <ProcessConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ProcessConfigContext.Provider>
  );
};

export const useProcessConfig = () => {
  const context = useContext(ProcessConfigContext);
  if (!context) {
    throw new Error(
      "useProcessConfig must be used within a ProcessConfigProvider"
    );
  }
  return context;
};
