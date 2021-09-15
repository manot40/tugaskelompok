export function objKeysToArray(obj) {
  return Object.keys(obj).map((id) => {
    return {
      id,
      ...obj[id],
    };
  });
}
