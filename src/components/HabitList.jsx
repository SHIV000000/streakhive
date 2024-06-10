import React from "react";
import HabitCard from "./HabitCard";

const HabitList = ({ habits }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {habits.map((habit, index) => (
        <HabitCard
          key={index}
          title={habit.title}
          data={habit.data}
          colorOptions={habit.colorOptions} // Pass colorOptions to HabitCard
          tooltipContent={habit.tooltipContent} // Pass tooltipContent to HabitCard
          // Pass any other required props to HabitCard as needed
        />
      ))}
    </div>
  );
};

export default HabitList;
