// useStaffingData.js
import { useState, useEffect } from 'react';
import { defaultStaffingData, validateStaffingData } from './staffingData';

export const useStaffingData = () => {
  const [staffingData, setStaffingData] = useState(() => {
    const saved = localStorage.getItem('staffingData');
    try {
      const parsed = saved ? JSON.parse(saved) : defaultStaffingData;
      validateStaffingData(parsed);
      return parsed;
    } catch (error) {
      console.warn('Invalid staffing data, using defaults:', error);
      return defaultStaffingData;
    }
  });

  const updateStaffingData = (updates) => {
    setStaffingData(prev => {
      const updated = { ...prev, ...updates };
      try {
        validateStaffingData(updated);
        localStorage.setItem('staffingData', JSON.stringify(updated));
        return updated;
      } catch (error) {
        console.error('Invalid staffing data update:', error);
        return prev;
      }
    });
  };

  return [staffingData, updateStaffingData];
};