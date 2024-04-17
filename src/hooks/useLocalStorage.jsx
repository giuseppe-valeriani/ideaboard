import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  // The function accepts the key and the initial format wanted, usually array
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  // UseState can also accept a function as an input, so we have to check it
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  // We use the function so it will call LocalStorage only for the initial value
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // Whenever the value changes, the store gets updated
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
