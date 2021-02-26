export const loadFromLocal = (key) => {
  try {
    const local = JSON.parse(localStorage.getItem(key));
    return local;
  } catch (error) {
    console.error(error.message);
  }
};

export const saveToLocal = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
