export function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function trimString(string, length = 32) {
  const trimmed = string.substring(0, length);
  const dots = string.length < length ? "" : "...";
  return trimmed + dots;
}
