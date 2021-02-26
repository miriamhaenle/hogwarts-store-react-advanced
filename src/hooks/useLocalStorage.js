import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';

export const useLocalStorage = (key, defaultValue) => {
  const initialValue = loadFromLocal(key) ?? defaultValue;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    saveToLocal(key, value);
  }, [key, value]);

  return [value, setValue];
};
