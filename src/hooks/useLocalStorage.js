import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const localData = localStorage.getItem(key);
  const initial = localData ? JSON.parse(localData) : defaultValue;

  const [value, setValue] = useState(initial);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
