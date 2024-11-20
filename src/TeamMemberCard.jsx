import React from "react";
import { Card } from "./UI";
import { categories } from "./teamData";
import ActivitySlider from "./ActivitySlider";

const TeamMemberCard = ({ member, memberIndex, onFTEChange }) => {
  const calculateTotalFTE = (activities) => {
    return activities.reduce((sum, activity) => sum + activity.fte, 0);
  };

  return (
    <Card className="shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          {member.icon}
          <div className="flex-1">
            <h3 className="text-lg font-medium text-blue-700">{member.role}</h3>
            <p className="text-sm text-gray-600">{member.name}</p>
          </div>
          <div className="text-sm">
            <span
              className={`font-medium ${
                calculateTotalFTE(member.activities) > member.fteCap
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {calculateTotalFTE(member.activities).toFixed(2)}
            </span>
            <span className="text-gray-600"> / {member.fteCap} FTE</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p className="font-medium mb-1">Focus Areas:</p>
          <ul className="list-disc list-inside space-y-1">
            {member.focusAreas.map((area, idx) => (
              <li key={idx}>{area}</li>
            ))}
          </ul>
        </div>

        {member.recruitingCapacity && (
          <div className="bg-blue-50 p-3 rounded-lg mb-4 text-sm">
            <p className="font-medium text-blue-700">Recruiting Capacity:</p>
            <div className="mt-1 text-gray-600">
              <p>
                Positions/Year:{" "}
                {member.recruitingCapacity.positions ||
                  member.recruitingCapacity.seniorPositions}
              </p>
              <p>
                Time per Position: {member.recruitingCapacity.timePerPosition}h
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {member.activities.map((activity, activityIndex) => (
            <ActivitySlider
              key={activity.name}
              activity={activity}
              onFTEChange={(newValue) =>
                onFTEChange(memberIndex, activityIndex, newValue)
              }
            />
          ))}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="h-2 bg-gray-200 rounded overflow-hidden">
            {member.activities.map((activity, idx) => (
              <div
                key={idx}
                style={{
                  width: `${activity.fte * 100}%`,
                  backgroundColor: categories[activity.category].color,
                }}
                className="h-full float-left"
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
