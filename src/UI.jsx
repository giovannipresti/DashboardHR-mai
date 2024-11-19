import React from "react";

export const Card = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ""}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3 className={`text-lg font-medium text-gray-900 ${className || ""}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
