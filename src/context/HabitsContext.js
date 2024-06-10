import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const HabitsContext = createContext(null);

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useLocalStorage("habits", [
    {
      title: "Exercise",
      data: [
        {
          date: "2024/01/01",
          value: 1,
        },
        {
          date: "2024/01/01",
          value: 1,
        },
        {
          date: "2024/01/12",
          value: 1,
        },
        {
          date: "2024/01/22",
          value: 1,
        },
        {
          date: "2024/01/24",
          value: 1,
        },
        {
          date: "2024/01/11",
          value: 1,
        },
        {
          date: "2024/01/01",
          value: 1,
        },
      ],
      color: "rgba(166, 0, 237)",
    },
  ]);

  useEffect(() => {
    console.log(habits);
  }, [habits]);
  const createHabit = (title, color) => {
    setHabits((prevHabits) => [
      ...prevHabits,
      {
        title,
        color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        data: [],
      },
    ]);
  };

  const deleteHabit = (index) => {
    setHabits((prevHabits) => {
      const newHabits = [...prevHabits];
      newHabits.splice(index, 1);
      return newHabits;
    });
  };

  const markDone = (habitIndex) => {
    setHabits((prevHabits) => {
      const newHabits = [...prevHabits];
      newHabits[habitIndex].data.push({
        date: new Date().toISOString().split("T")[0].replace(/-/g, "/"),
        count: 1,
      });
      return newHabits;
    });
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        markDone,
        createHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
