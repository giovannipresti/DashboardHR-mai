// adminProcess.js

export const calculateAdminFTE = (config, headcount) => {
    const defaultConfig = {
      personnelHours: 2,
      payrollHours: 1.5,
      timeAttendanceHours: 1,
      supportHours: 1
    };
  
    const {
      personnelHours = defaultConfig.personnelHours,
      payrollHours = defaultConfig.payrollHours,
      timeAttendanceHours = defaultConfig.timeAttendanceHours,
      supportHours = defaultConfig.supportHours
    } = config;
  
    const hoursPerEmployee = personnelHours + payrollHours + 
                            timeAttendanceHours + supportHours;
    const totalHours = headcount * hoursPerEmployee;
    
    // Base administrative tasks
    const baseHours = 480; // 40h per month for base tasks
    const totalAnnualHours = totalHours + baseHours;
  
    return {
      requiredFTE: Number((totalAnnualHours / 1720).toFixed(2)),
      metrics: [
        { label: "Hours/Employee", value: hoursPerEmployee.toFixed(2) },
        { label: "Base Hours", value: baseHours },
        { label: "Total Hours", value: Math.round(totalAnnualHours) }
      ],
      calculation: `
        Per Employee:
        - Personnel Admin: ${personnelHours.toFixed(2)}h
        - Payroll: ${payrollHours.toFixed(2)}h
        - Time & Attendance: ${timeAttendanceHours.toFixed(2)}h
        - Support: ${supportHours.toFixed(2)}h
        Total per employee: ${hoursPerEmployee.toFixed(2)}h
  
        Employee-based hours: ${headcount} × ${hoursPerEmployee.toFixed(2)}h = ${totalHours.toFixed(2)}h
        Base admin hours: ${baseHours}h
        Total annual hours: ${totalAnnualHours.toFixed(2)}h
        FTE Required: ${totalAnnualHours.toFixed(2)} / 1720 = ${(totalAnnualHours/1720).toFixed(2)}
      `
    };
  };
