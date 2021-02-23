export const loadFromLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error.message);
  }
};

export const saveToLocal = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
