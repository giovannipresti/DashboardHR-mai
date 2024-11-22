export const calculateStaffingMetrics = (staffingData) => {
    const totalEmployees = 
      staffingData.avlEmployees + 
      staffingData.avlAgency + 
      staffingData.avlContractors + 
      staffingData.eolEmployees;
  
    const turnoverPositions = Math.round((totalEmployees * staffingData.turnoverRate) / 100);
    const totalPositions = turnoverPositions + staffingData.growthPositions;
  
    const requiredRecruitingFTE = ((totalPositions * 40 * 0.4 + totalPositions * 26 * 0.6) / 1720).toFixed(2);
  
    return {
      totalEmployees,
      turnoverPositions,
      totalPositions,
      requiredRecruitingFTE: Number(requiredRecruitingFTE),
      gapPercentage: Math.round(((38 - totalPositions) / totalPositions) * 100)
    };
  };
  
  export const defaultStaffingValues = {
    avlEmployees: 340,
    avlAgency: 50,
    avlContractors: 50,
    eolEmployees: 35,
    turnoverRate: 12,
    growthPositions: 20,
    currentRecruitingCapacity: 38
  };