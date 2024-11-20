import React from "react";
import { categories } from "./teamData";

const ActivitySlider = ({ activity, onFTEChange }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: categories[activity.category].color }}
          />
          <span className="text-gray-700">{activity.name}</span>
        </div>
        <div className="flex space-x-4">
          <span className="text-gray-600">
            {(activity.fte * 100).toFixed(0)}%
          </span>
          <span className="text-gray-500">
            {(activity.fte * 143).toFixed(0)}h/m
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="0"
          max="100"
          value={activity.fte * 100}
          onChange={(e) => onFTEChange(Number(e.target.value) / 100)}
          className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              categories[activity.category].color
            } 0%, ${categories[activity.category].color} ${
              activity.fte * 100
            }%, #EFF6FF ${activity.fte * 100}%, #EFF6FF 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default ActivitySlider;
