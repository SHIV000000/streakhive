import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const HabitCard = ({
  title,
  data,
  colorOptions = [],
  onMarkDone,
  onSkipDay,
  onDelete,
  tooltipContent = [],
}) => {
  const initialCompletionLevels = data.map((completed) =>
    completed ? colorOptions.length - 1 : 0
  );
  const [completionLevels, setCompletionLevels] = useState(initialCompletionLevels);

  const generateCalendar = (data, getColorClass) => {
    return data.map((_, index) => (
      <div
        key={index}
        data-tooltip-id={`tooltip-${index}`}
        data-tooltip-content={tooltipContent[index]}
        style={{
          width: '1rem',
          height: '1rem',
          cursor: 'pointer',
          backgroundColor: getColorClass(completionLevels[index])
        }}
        onClick={() => handleMark(index)}
      >
        <Tooltip id={`tooltip-${index}`} place="top" effect="solid" />
      </div>
    ));
  };

  const handleMark = (index) => {
    const newCompletionLevels = [...completionLevels];
    newCompletionLevels[index] = Math.min(newCompletionLevels[index] + 1, colorOptions.length - 1);
    setCompletionLevels(newCompletionLevels);
    if (onMarkDone) {
      onMarkDone(index, newCompletionLevels[index]);
    }
  };

  const handleSkipDay = () => {
    if (onSkipDay) {
      onSkipDay();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const getDayLabels = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days.map((day, index) => (
      <div key={index} style={{ textAlign: 'center', fontSize: '0.75rem', color: '#718096' }}>
        {day}
      </div>
    ));
  };

  const getColorClass = (completionLevel) => {
    // Assigning different color intensities based on completion level
    const colorIntensity = Math.floor(completionLevel / 2);
    return colorOptions[colorIntensity];
  };

  const handleDone = (index) => {
    handleMark(index);
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1rem', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, auto)', gap: '0.25rem' }}>
        {getDayLabels()}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(52, auto)', gap: '0.25rem' }}>
        {generateCalendar(data, getColorClass)}
      </div>
      <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', display: 'flex', gap: '0.5rem' }}>
        <button style={{ padding: '0.25rem 0.5rem', backgroundColor: '#4299e1', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }} onClick={handleDone}>
          Done
        </button>
        <button style={{ padding: '0.25rem 0.5rem', backgroundColor: '#f56565', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
