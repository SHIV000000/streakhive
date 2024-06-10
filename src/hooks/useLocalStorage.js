import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Get the value from localStorage if it exists, otherwise use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", error);
      return initialValue;
    }
  });

  // Function to update the value in both state and localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key:", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
