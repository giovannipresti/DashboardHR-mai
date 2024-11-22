// trainingProcess.js

export const calculateTrainingFTE = (config, headcount) => {
    const defaultConfig = {
      analysisHours: 0.9,
      deliveryHours: 1.8,
      adminHours: 0.6,
      coursesPerYear: 25
    };
  
    const {
      analysisHours = defaultConfig.analysisHours,
      deliveryHours = defaultConfig.deliveryHours,
      adminHours = defaultConfig.adminHours,
      coursesPerYear = defaultConfig.coursesPerYear
    } = config;
  
    const hoursPerEmployee = analysisHours + deliveryHours + adminHours;
    const totalHours = headcount * hoursPerEmployee;
    const courseAdminHours = coursesPerYear * 16; // 16h admin per course
    
    const totalAnnualHours = totalHours + courseAdminHours;
  
    return {
      requiredFTE: Number((totalAnnualHours / 1720).toFixed(2)),
      metrics: [
        { label: "Hours/Employee", value: hoursPerEmployee.toFixed(2) },
        { label: "Courses/Year", value: coursesPerYear },
        { label: "Total Hours", value: Math.round(totalAnnualHours) }
      ],
      calculation: `
        Per Employee:
        - Analysis: ${analysisHours.toFixed(2)}h
        - Delivery: ${deliveryHours.toFixed(2)}h
        - Admin: ${adminHours.toFixed(2)}h
        Total per employee: ${hoursPerEmployee.toFixed(2)}h
        
        Employee-based hours: ${headcount} × ${hoursPerEmployee.toFixed(2)}h = ${totalHours.toFixed(2)}h
        Course admin hours: ${coursesPerYear} courses × 16h = ${courseAdminHours}h
        Total annual hours: ${totalAnnualHours.toFixed(2)}h
        FTE Required: ${totalAnnualHours.toFixed(2)} / 1720 = ${(totalAnnualHours/1720).toFixed(2)}
      `
    };
  };
