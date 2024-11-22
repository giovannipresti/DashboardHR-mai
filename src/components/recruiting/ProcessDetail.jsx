// src/components/recruiting/ProcessDetail.jsx
import React, { useState } from 'react';
import ProcessHeader from './ProcessHeader';
import ProcessPhase from './ProcessPhase';
import ImpactAnalysis from './ImpactAnalysis';
import { initialProcessData } from './processData';

const ProcessDetail = () => {
  const [editingActivity, setEditingActivity] = useState(null);
  const [phases, setPhases] = useState(initialProcessData);

  const handleActivityUpdate = (phaseIndex, activityIndex, newHours) => {
    setPhases(prevPhases => {
      const newPhases = [...prevPhases];
      const phase = {...newPhases[phaseIndex]};
      
      // Update activity hours
      phase.activities = [...phase.activities];
      phase.activities[activityIndex] = {
        ...phase.activities[activityIndex],
        hours: newHours
      };

      // Recalculate phase total
      phase.totalHours = phase.activities.reduce((sum, act) => sum + act.hours, 0);
      
      newPhases[phaseIndex] = phase;
      return newPhases;
    });
    setEditingActivity(null);
  };

  const totalProcessHours = phases.reduce((sum, phase) => sum + phase.totalHours, 0);

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <ProcessHeader totalHours={totalProcessHours} />

      <div className="space-y-6">
        {phases.map((phase, phaseIndex) => (
          <ProcessPhase
            key={phase.name}
            phase={phase}
            totalProcessHours={totalProcessHours}
            onActivityUpdate={handleActivityUpdate}
            phaseIndex={phaseIndex}
            editingActivity={editingActivity}
            setEditingActivity={setEditingActivity}
          />
        ))}
      </div>

      <ImpactAnalysis totalHours={totalProcessHours} />
    </div>
  );
};

export default ProcessDetail;