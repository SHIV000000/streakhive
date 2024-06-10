import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import HabitList from "./components/HabitList";
import {
  CirclePicker,
  GithubPicker,
  SketchPicker,
  TwitterPicker,
} from "react-color";
import "daisyui";
import { HabitsContext } from "./context/HabitsContext";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const { habits, setHabits, createHabit } = useContext(HabitsContext);

  const [newHabitTitle, setNewHabitTitle] = useState("");

  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

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
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              if (newHabitTitle && color) {
                createHabit(newHabitTitle, color);
                setNewHabitTitle("");
              }
            }}
          >
            Add Habit
          </button>
          <ColorPicker setColor={setColor} color={color} />
        </div>

        {/* Render HabitList with habits */}
        <HabitList habits={habits} />
      </div>
    </div>
  );
};

export default App;
