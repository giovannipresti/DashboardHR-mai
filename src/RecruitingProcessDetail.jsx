import React, { useState } from 'react';
import { Clock, Users, CheckCircle2, Edit2, Save } from 'lucide-react';

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

const RecruitingProcessDetail = () => {
  const [editingActivity, setEditingActivity] = useState(null);
  const [phases, setPhases] = useState([
    {
      name: "Initial Phase",
      totalHours: 6,
      activities: [
        { name: "Alignment with Manager", hours: 2, description: "Requirements definition and role analysis" },
        { name: "Sourcing & Screening", hours: 4, description: "CV screening and initial candidate pool" }
      ]
    },
    {
      name: "First Interviews",
      totalHours: 13,
      activities: [
        { name: "Interviews", hours: 10, description: "10 candidates × 1h each" },
        { name: "Feedback & Reports", hours: 3, description: "Detailed evaluation and reporting" }
      ]
    },
    {
      name: "Shortlist",
      totalHours: 8,
      activities: [
        { name: "Second Interviews", hours: 3, description: "3 finalists × 1h each" },
        { name: "Technical Interviews", hours: 3, description: "Technical assessment" },
        { name: "Internal Alignments", hours: 2, description: "Evaluation meetings" }
      ]
    },
    {
      name: "Final Phase",
      totalHours: 4,
      activities: [
        { name: "Negotiation", hours: 2, description: "Offer and conditions" },
        { name: "Administration", hours: 2, description: "Pre-hiring paperwork" }
      ]
    },
    {
      name: "Onboarding",
      totalHours: 10,
      activities: [
        { name: "Setup & Welcome", hours: 1, description: "Initial setup" },
        { name: "Stakeholder Meetings", hours: 2, description: "Key introductions" },
        { name: "Initial Training", hours: 2, description: "Basic training" },
        { name: "Check-in", hours: 1, description: "First day support" },
        { name: "Follow-up", hours: 3, description: "Trial period monitoring" },
        { name: "Administration", hours: 1, description: "Documentation" }
      ]
    }
  ]);

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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Senior Recruiting Process Analysis</h2>
          <p className="text-sm text-gray-600 mt-1">Detailed breakdown of time allocation per phase</p>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-medium">Total: {totalProcessHours}h</span>
        </div>
      </div>

      <div className="space-y-6">
        {phases.map((phase, phaseIndex) => (
          <div key={phase.name} className="border rounded-lg p-4">
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
                  onUpdate={(newHours) => handleActivityUpdate(phaseIndex, activityIndex, newHours)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium mb-2">Impact Analysis</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Process Duration</p>
            <p className="text-lg font-medium">{totalProcessHours} hours</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Calendar Time</p>
            <p className="text-lg font-medium">~4-6 weeks</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">FTE Impact</p>
            <p className="text-lg font-medium">{(totalProcessHours/1720).toFixed(3)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Monthly Capacity</p>
            <p className="text-lg font-medium">{Math.floor(1720/(totalProcessHours*12))} positions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitingProcessDetail;