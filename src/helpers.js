let idCounter = 1;

export const getId = (key = 'default') => {
  const id = `${key}_${idCounter}`;
  idCounter++;
  return id;
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
