// src/components/recruiting/processData.js
export const initialProcessData = [
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
  ];