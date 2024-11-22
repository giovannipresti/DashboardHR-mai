// src/components/recruiting/ProcessPhase.jsx
import React from 'react';
import PhaseActivity from './PhaseActivity';

const ProcessPhase = ({ 
  phase, 
  totalProcessHours,
  onActivityUpdate, 
  phaseIndex, 
  editingActivity, 
  setEditingActivity 
}) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-lg">{phase.name}</h3>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">
            {((phase.totalHours / totalProcessHours) * 100).toFixed(1)}%
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {phase.totalHours}h
          </span>
        </div>
      </div>
      <div className="space-y-2">
        {phase.activities.map((activity, activityIndex) => (
          <PhaseActivity
            key={activity.name}
            activity={activity}
            isEditing={editingActivity === `${phaseIndex}-${activityIndex}`}
            onEditStart={() => setEditingActivity(`${phaseIndex}-${activityIndex}`)}
            onUpdate={(newHours) => onActivityUpdate(phaseIndex, activityIndex, newHours)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessPhase;