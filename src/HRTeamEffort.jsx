import React, { useState } from "react";
import { Users, Clock, AlertTriangle } from "lucide-react";
import { Card } from "./UI";
import TeamMemberCard from "./TeamMemberCard";
import { initialTeamMembers, organizationData, categories } from "./teamData";

const HRTeamEffort = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const handleFTEChange = (memberIndex, activityIndex, newFTE) => {
    const updatedMembers = [...teamMembers];
    const member = updatedMembers[memberIndex];

    const totalOtherFTE = member.activities.reduce(
      (sum, act, idx) => (idx === activityIndex ? sum : sum + act.fte),
      0
    );

    const maxAllowedFTE = member.fteCap - totalOtherFTE;
    const adjustedFTE = Math.min(Math.max(0, newFTE), maxAllowedFTE);

    member.activities[activityIndex].fte = adjustedFTE;
    setTeamMembers(updatedMembers);
  };

  const handleAddActivity = (memberIndex, newActivity) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[memberIndex] = {
      ...updatedMembers[memberIndex],
      activities: [...updatedMembers[memberIndex].activities, newActivity],
    };
    setTeamMembers(updatedMembers);
  };

  const handleRemoveActivity = (memberIndex, activityIndex) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[memberIndex] = {
      ...updatedMembers[memberIndex],
      activities: updatedMembers[memberIndex].activities.filter(
        (_, idx) => idx !== activityIndex
      ),
    };
    setTeamMembers(updatedMembers);
  };

  const calculateTotalTeamFTE = () => {
    return teamMembers
      .reduce(
        (sum, member) =>
          sum +
          member.activities.reduce(
            (memberSum, activity) => memberSum + activity.fte,
            0
          ),
        0
      )
      .toFixed(2);
  };

  const calculateCategoryTotals = () => {
    const totals = Object.keys(categories).reduce(
      (acc, cat) => ({ ...acc, [cat]: 0 }),
      {}
    );

    teamMembers.forEach((member) => {
      member.activities.forEach((activity) => {
        totals[activity.category] += activity.fte;
      });
    });

    return totals;
  };

  const calculateRecruitingMetrics = () => {
    // Calculate current recruiting FTE
    const recruitingFTE = teamMembers.reduce((total, member) => {
      const memberRecruitingFTE = member.activities
        .filter(activity => activity.category === "Recruiting")
        .reduce((sum, activity) => sum + activity.fte, 0);
      return total + memberRecruitingFTE;
    }, 0);

    // Calculate current recruiting capacity
    let currentCapacity = 0;
    teamMembers.forEach((member) => {
      if (member.recruitingCapacity) {
        currentCapacity += member.recruitingCapacity.positions || member.recruitingCapacity.seniorPositions || 0;
      }
    });

    // Calculate gap percentage
    const requiredCapacity = organizationData.recruitingNeeds.total;
    const gap = ((currentCapacity - requiredCapacity) / requiredCapacity * 100).toFixed(0);

    return {
      currentFTE: recruitingFTE.toFixed(1),
      currentCapacity,
      requiredCapacity,
      gap: `${gap}%`
    };
  };

  const categoryTotals = calculateCategoryTotals();
  const recruitingMetrics = calculateRecruitingMetrics();

  return (
    <div className="w-full space-y-6 p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            HR Team Effort Allocation
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Organization: {organizationData.totalHeadcount} HC | Current Ratio:{" "}
            {organizationData.hrRatio} | Benchmark: {organizationData.benchmark}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">
            {calculateTotalTeamFTE()} / 7.5 FTE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-blue-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Recruiting & Talent Acquisition</h3>
              <AlertTriangle
                className={
                  recruitingMetrics.currentCapacity < recruitingMetrics.requiredCapacity
                    ? "text-red-500"
                    : "text-green-500"
                }
              />
            </div>
            <div className="space-y-1 text-sm">
              <p>Current: {recruitingMetrics.currentFTE} FTE</p>
              <p>Required: {(recruitingMetrics.requiredCapacity / 45).toFixed(1)} FTE</p>
              <p className="text-red-600">Gap: {recruitingMetrics.gap}</p>
              <div className="mt-2 pt-2 border-t border-gray-200">
                <p>Posizioni/Anno</p>
                <p>Capacità Attuale: {recruitingMetrics.currentCapacity}</p>
                <p>Gap: {recruitingMetrics.gap}</p>
              </div>
            </div>
          </div>
        </Card>

        {Object.entries(categoryTotals).map(([category, total]) => (
          <Card key={category} className="bg-gray-50">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: categories[category].color }}
                />
                <h3 className="font-medium">{category}</h3>
              </div>
              <p className="text-2xl font-bold">{total.toFixed(2)} FTE</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {teamMembers.map((member, memberIndex) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            memberIndex={memberIndex}
            onFTEChange={handleFTEChange}
            onAddActivity={handleAddActivity}
            onRemoveActivity={handleRemoveActivity}
          />
        ))}
      </div>
    </div>
  );
};

export default HRTeamEffort;
