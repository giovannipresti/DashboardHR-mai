export const getActivityColor = (category) => {
  const colors = {
    Strategic: "#60A5FA",
    Recruiting: "#34D399",
    Development: "#F59E0B",
    Operations: "#8B5CF6",
    Admin: "#EC4899",
    Management: "#6366F1",
  };
  return colors[category] || "#CBD5E1";
};
