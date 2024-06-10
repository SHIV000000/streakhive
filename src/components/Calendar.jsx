import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Calendar = ({ color, onDone, onSkip }) => {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), 0, 1);
  const endDate = new Date(today.getFullYear() + 1, 0, 0);

  const handleClick = (value) => {
    if (value.date.getTime() < today.getTime()) {
      // Disable interaction for past dates
      return;
    }

    if (value.count === 0) {
      onDone(value.date);
    } else {
      onSkip(value.date);
    }
  };

  return (
    <div className="calendar">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={[]}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)}`,
          };
        }}
        onClick={handleClick}
      />
      <style>{`
        .color-empty {
          background-color: #efefef;
        }
        .color-scale-0 {
          background-color: #efefef;
        }
        .color-scale-1 {
          background-color: ${color};
        }
        .color-scale-2 {
          background-color: ${color};
          opacity: 0.8;
        }
        .color-scale-3 {
          background-color: ${color};
          opacity: 0.6;
        }
        .color-scale-4 {
          background-color: ${color};
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
