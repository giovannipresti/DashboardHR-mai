import React, { useState } from "react";
import { Card } from "./UI";
import { categories } from "./teamData";
import ActivitySlider from "./ActivitySlider";
import { Plus, X } from "lucide-react";

const TeamMemberCard = ({
  member,
  memberIndex,
  onFTEChange,
  onAddActivity,
  onRemoveActivity,
}) => {
  const [newActivity, setNewActivity] = useState({
    name: "",
    category: "Operations",
  });
  const [isAdding, setIsAdding] = useState(false);

  const calculateTotalFTE = (activities) => {
    return activities.reduce((sum, activity) => sum + activity.fte, 0);
  };

  const handleAddActivity = () => {
    if (newActivity.name) {
      onAddActivity(memberIndex, {
        ...newActivity,
        fte: 0,
        hoursPerMonth: 0,
      });
      setNewActivity({ name: "", category: "Operations" });
      setIsAdding(false);
    }
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
            <div key={activity.name} className="flex items-center space-x-2">
              <div className="flex-1">
                <ActivitySlider
                  activity={activity}
                  onFTEChange={(newValue) =>
                    onFTEChange(memberIndex, activityIndex, newValue)
                  }
                />
              </div>
              <button
                onClick={() => onRemoveActivity(memberIndex, activityIndex)}
                className="p-1 hover:bg-red-100 rounded"
              >
                <X className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {isAdding ? (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                value={newActivity.name}
                onChange={(e) =>
                  setNewActivity({ ...newActivity, name: e.target.value })
                }
                placeholder="Activity name"
                className="flex-1 p-2 border rounded"
              />
              <select
                value={newActivity.category}
                onChange={(e) =>
                  setNewActivity({ ...newActivity, category: e.target.value })
                }
                className="p-2 border rounded bg-white"
              >
                {Object.keys(categories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAdding(false)}
                className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddActivity}
                className="px-3 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded"
                disabled={!newActivity.name}
              >
                Add Activity
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="mt-4 flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800"
          >
            <Plus className="w-4 h-4" />
            <span>Add Activity</span>
          </button>
        )}

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
