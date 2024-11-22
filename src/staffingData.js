// staffingData.js

export const defaultStaffingData = {
    totalEmployees: 475,
    breakdown: {
      avlEmployees: 340,
      avlAgency: 50,
      avlContractors: 50,
      eolEmployees: 35
    },
    recruitingNeeds: {
      turnoverRate: 0.12,
      growthPositions: 20
    },
    currentCapacity: {
      recruiting: {
        seniorPositions: 11,
        juniorPositions: 27
      },
      total: 38
    }
  };
  
  export const calculateStaffingMetrics = (data) => {
    const turnoverPositions = Math.round(data.totalEmployees * data.recruitingNeeds.turnoverRate);
    const totalPositions = turnoverPositions + data.recruitingNeeds.growthPositions;
    const gap = totalPositions - data.currentCapacity.total;
    const gapPercentage = ((gap / totalPositions) * 100).toFixed(1);
  
    return {
      turnoverPositions,
      totalPositions,
      gap,
      gapPercentage,
      metrics: {
        currentFTE: (data.currentCapacity.total / 45).toFixed(1),
        requiredFTE: (totalPositions / 45).toFixed(1),
        gapFTE: ((totalPositions - data.currentCapacity.total) / 45).toFixed(1)
      }
    };
  };
  
  export const validateStaffingData = (data) => {
    const required = ['totalEmployees', 'breakdown', 'recruitingNeeds', 'currentCapacity'];
    const missing = required.filter(key => !data[key]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required staffing data: ${missing.join(', ')}`);
    }
  
    return true;
  };