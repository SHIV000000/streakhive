import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HabitList from "./components/HabitList";
import HabitCard from "./components/HabitCard"; // Import HabitCard component
import "daisyui";

const App = () => {
  const [habits, setHabits] = useState([
    {
      title: "Exercise",
      data: Array(371).fill(0),
      colorOptions: ["rgba(235, 64, 52, 0.1)", "rgba(235, 64, 52, 1)"],
      tooltipContent: Array(371).fill("Some tooltip content"), // Update tooltipContent array
    },
    {
      title: "Money Spent",
      data: Array(371).fill(0),
      colorOptions: ["rgba(44, 189, 89, 0.1)", "rgba(44, 189, 89, 1)"],
      tooltipContent: Array(371).fill("Some tooltip content"), // Update tooltipContent array
    },
    {
      title: "Alcohol Consumption",
      data: Array(371).fill(0),
      colorOptions: ["rgba(243, 193, 18, 0.1)", "rgba(243, 193, 18, 1)"],
      tooltipContent: Array(371).fill("Some tooltip content"), // Update tooltipContent array
    },
  ]);

  const [newHabitTitle, setNewHabitTitle] = useState("");

  const addHabit = () => {
    const newHabit = {
      title: newHabitTitle,
      data: Array(371).fill(0),
      colorOptions: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 1)"],
      tooltipContent: Array(371).fill("Some tooltip content"), // Update tooltipContent array
    };
    setHabits([...habits, newHabit]);
    setNewHabitTitle("");
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="mb-4 flex flex-col sm:flex-row items-center">
          <input
            type="text"
            value={newHabitTitle}
            onChange={(e) => setNewHabitTitle(e.target.value)}
            placeholder="New habit title"
            className="input input-bordered mr-2 mb-2 sm:mb-0 w-full sm:w-auto"
          />
          <button className="btn btn-primary" onClick={addHabit}>
            Add Habit
          </button>
        </div>
        {/* Render HabitList with habits */}
        <HabitList habits={habits} />
      </div>
    </div>
  );
};

export default App;
