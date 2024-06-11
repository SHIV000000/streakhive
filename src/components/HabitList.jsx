import React from "react";
import HabitCard from "./HabitCard";

const HabitList = ({ habits }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {habits.map((habit, index) => (
        <HabitCard
          key={index}
          index={index}
          title={habit.title}
          data={habit.data}
          color={habit.color}
        />
      ))}
    </div>
  );
};

export default HabitList;
