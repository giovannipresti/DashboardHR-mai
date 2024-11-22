// recruitingProcess.js

export const calculateRecruitingFTE = (config, headcount) => {
  const defaultConfig = {
      seniorHireHours: 40,
      juniorHireHours: 26,
      seniorSplit: 0.4,
      turnoverRate: 0.12,
      growthPositions: 20,
      onboardingHours: 10
  };

  const {
      seniorHireHours = defaultConfig.seniorHireHours,
      juniorHireHours = defaultConfig.juniorHireHours,
      seniorSplit = defaultConfig.seniorSplit,
      turnoverRate = defaultConfig.turnoverRate,
      growthPositions = defaultConfig.growthPositions,
      onboardingHours = defaultConfig.onboardingHours
  } = config;

  // Calculate turnover positions
  const turnoverPositions = Math.round(headcount * turnoverRate);
  const totalPositions = turnoverPositions + growthPositions;

  // Split between senior and junior positions
  const seniorPositions = Math.round(totalPositions * seniorSplit);
  const juniorPositions = totalPositions - seniorPositions;

  // Calculate effort per type
  const seniorEffort = seniorPositions * seniorHireHours;
  const juniorEffort = juniorPositions * juniorHireHours;
  const onboardingEffort = totalPositions * onboardingHours;

  // Total hours and FTE calculation
  const totalHours = seniorEffort + juniorEffort + onboardingEffort;
  const requiredFTE = Number((totalHours / 1720).toFixed(2));

  // Detailed breakdown for metrics
  const breakdown = {
      senior: {
          positions: seniorPositions,
          hoursPerPosition: seniorHireHours,
          totalHours: seniorEffort
      },
      junior: {
          positions: juniorPositions,
          hoursPerPosition: juniorHireHours,
          totalHours: juniorEffort
      },
      onboarding: {
          positions: totalPositions,
          hoursPerPosition: onboardingHours,
          totalHours: onboardingEffort
      }
  };

  return {
      requiredFTE,
      metrics: [
          { label: "Total Positions", value: totalPositions },
          { label: "Hours/Senior", value: seniorHireHours },
          { label: "Hours/Junior", value: juniorHireHours }
      ],
      phases: [
          {
              label: "Senior Hiring",
              hours: seniorEffort,
              details: `${seniorPositions} positions × ${seniorHireHours}h`,
              subMetrics: [
                  "Initial phase: 6h",
                  "First interviews: 13h",
                  "Shortlist: 8h",
                  "Final phase: 4h",
                  "Onboarding: 10h"
              ]
          },
          {
              label: "Junior Hiring",
              hours: juniorEffort,
              details: `${juniorPositions} positions × ${juniorHireHours}h`,
              subMetrics: [
                  "Initial phase: 3h",
                  "First interviews: 8h",
                  "Shortlist: 5h",
                  "Final phase: 2h",
                  "Onboarding: 8h"
              ]
          },
          {
              label: "Onboarding",
              hours: onboardingEffort,
              details: `${totalPositions} positions × ${onboardingHours}h`,
              subMetrics: [
                  "Setup & welcome",
                  "Stakeholder meetings",
                  "Initial training",
                  "Follow-up"
              ]
          }
      ],
      calculation: `
      Positions Calculation:
      - Turnover (${(turnoverRate * 100).toFixed(1)}%): ${headcount} × ${turnoverRate} = ${turnoverPositions}
      - Growth positions: ${growthPositions}
      - Total positions: ${totalPositions}

      Effort Breakdown:
      Senior (${(seniorSplit * 100)}%):
      - ${seniorPositions} positions × ${seniorHireHours}h = ${seniorEffort}h
      
      Junior (${((1-seniorSplit) * 100)}%):
      - ${juniorPositions} positions × ${juniorHireHours}h = ${juniorEffort}h
      
      Onboarding:
      - ${totalPositions} positions × ${onboardingHours}h = ${onboardingEffort}h
      
      Total Hours: ${totalHours}h
      Required FTE: ${totalHours} / 1720 = ${requiredFTE}
      `,
      breakdown
  };
};