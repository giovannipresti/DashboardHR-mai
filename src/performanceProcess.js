// performanceProcess.js

export const calculatePerformanceFTE = (config, headcount) => {
    const defaultConfig = {
      setupHours: 0.2,
      executionHours: 0.5,
      reviewHours: 0.3,
      cyclsPerYear: 1
    };
  
    const {
      setupHours = defaultConfig.setupHours,
      executionHours = defaultConfig.executionHours,
      reviewHours = defaultConfig.reviewHours,
      cyclesPerYear = defaultConfig.cyclsPerYear
    } = config;
  
    const hoursPerEmployee = setupHours + executionHours + reviewHours;
    const totalHours = headcount * hoursPerEmployee * cyclesPerYear;
    
    const adminHours = headcount * 0.2; // Global process admin
    const totalAnnualHours = totalHours + adminHours;
  
    return {
      requiredFTE: Number((totalAnnualHours / 1720).toFixed(2)),
      metrics: [
        { label: "Hours/Review", value: hoursPerEmployee.toFixed(2) },
        { label: "Reviews/Year", value: headcount * cyclesPerYear },
        { label: "Total Hours", value: Math.round(totalAnnualHours) }
      ],
      calculation: `
        Per Review:
        - Setup: ${setupHours.toFixed(2)}h
        - Execution: ${executionHours.toFixed(2)}h
        - Review: ${reviewHours.toFixed(2)}h
        Total per review: ${hoursPerEmployee.toFixed(2)}h
  
        Review hours: ${headcount} × ${hoursPerEmployee.toFixed(2)}h × ${cyclesPerYear} = ${totalHours.toFixed(2)}h
        Admin hours: ${headcount} × 0.20h = ${adminHours.toFixed(2)}h
        Total annual hours: ${totalAnnualHours.toFixed(2)}h
        FTE Required: ${totalAnnualHours.toFixed(2)} / 1720 = ${(totalAnnualHours/1720).toFixed(2)}
      `
    };
  };
