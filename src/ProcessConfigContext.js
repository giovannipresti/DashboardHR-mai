// ProcessConfigContext.js
import React from "react";

const ProcessConfigContext = React.createContext();

export const ProcessConfigProvider = ({ children }) => {
  const [config] = React.useState({
    hoursPerPosition: {
      senior: 40,
      junior: 26,
    },
    hoursPerYear: 1720,
  });

  return (
    <ProcessConfigContext.Provider value={{ config }}>
      {children}
    </ProcessConfigContext.Provider>
  );
};

export const useProcessConfig = () => {
  const context = React.useContext(ProcessConfigContext);
  if (!context) {
    throw new Error(
      "useProcessConfig must be used within a ProcessConfigProvider"
    );
  }
  return context;
};
