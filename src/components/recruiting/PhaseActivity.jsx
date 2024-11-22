// src/components/recruiting/PhaseActivity.jsx
import React, { useState } from 'react';
import { CheckCircle2, Edit2, Save } from 'lucide-react';

const PhaseActivity = ({ 
  activity, 
  onUpdate, 
  isEditing, 
  onEditStart 
}) => {
  const [editedHours, setEditedHours] = useState(activity.hours);

  const handleSave = () => {
    onUpdate(parseFloat(editedHours));
  };

  return (
    <div className="flex items-start space-x-2 text-sm">
      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="font-medium">{activity.name}</span>
          <div className="flex items-center space-x-2">
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={editedHours}
                  onChange={(e) => setEditedHours(e.target.value)}
                  className="w-16 p-1 border rounded"
                  step="0.5"
                  min="0"
                />
                <button 
                  onClick={handleSave}
                  className="text-green-600 hover:text-green-800"
                >
                  <Save className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <span className="text-gray-600">{activity.hours}h</span>
                <button 
                  onClick={onEditStart}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
        <p className="text-gray-500">{activity.description}</p>
      </div>
    </div>
  );
};

export default PhaseActivity;