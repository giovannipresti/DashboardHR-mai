// recruitingProcess.js

export const calculateRecruitingFTE = (config, headcount) => {
    const defaultConfig = {
      seniorHireHours: 40,
      juniorHireHours: 26,
      seniorSplit: 0.4,
      turnoverRate: 0.12,
      growthPositions: 20
    };
  
    const {
      seniorHireHours = defaultConfig.seniorHireHours,
      juniorHireHours = defaultConfig.juniorHireHours,
      seniorSplit = defaultConfig.seniorSplit,
      turnoverRate = defaultConfig.turnoverRate,
      growthPositions = defaultConfig.growthPositions
    } = config;
  
    const turnoverPositions = Math.round(headcount * turnoverRate);
    const totalPositions = turnoverPositions + growthPositions;
    
    const seniorPositions = Math.round(totalPositions * seniorSplit);
    const juniorPositions = totalPositions - seniorPositions;
  
    const totalHours = (seniorPositions * seniorHireHours) + 
                      (juniorPositions * juniorHireHours);
    
    return {
      requiredFTE: Number((totalHours / 1720).toFixed(2)),
      metrics: [
        { label: "Total Positions", value: totalPositions },
        { label: "Senior Positions", value: seniorPositions },
        { label: "Junior Positions", value: juniorPositions }
      ],
      calculation: `
        Turnover: ${headcount} × ${(turnoverRate * 100).toFixed(2)}% = ${turnoverPositions}
        Growth: ${growthPositions}
        Total: ${totalPositions} positions
        Senior (${(seniorSplit * 100).toFixed(2)}%): ${seniorPositions} × ${seniorHireHours.toFixed(2)}h = ${(seniorPositions * seniorHireHours).toFixed(2)}h
        Junior (${((1-seniorSplit) * 100).toFixed(2)}%): ${juniorPositions} × ${juniorHireHours.toFixed(2)}h = ${(juniorPositions * juniorHireHours).toFixed(2)}h
        Total Hours: ${totalHours.toFixed(2)}h
        FTE Required: ${totalHours.toFixed(2)} / 1720 = ${(totalHours/1720).toFixed(2)}
      `
    };
  };
