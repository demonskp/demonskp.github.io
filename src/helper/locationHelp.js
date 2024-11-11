export function saveString(key, value) {
  localStorage.setItem(key, value.toString());
}

export function getString(key) {
  return localStorage.getItem(key).toString();
}

export function saveObject(key, value) {
  let realValue = JSON.stringify(value);
  localStorage.setItem(key, realValue);
}

export function getObject(key) {
  const realValue = localStorage.getItem(key);
  let result = null;
  try {
    result = JSON.parse(realValue);
    result = result || null;
  } catch (error) {
    result = null;
  }

  return result;
}
