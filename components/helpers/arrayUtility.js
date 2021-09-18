export function objKeysToArray(obj) {
  return Object.keys(obj).map((id) => {
    return {
      id,
      ...obj[id],
    };
  });
}

export function sortArray(arr, prop, sort) {
  if (sort === "asc")
    arr.sort((a, b) => (a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0));
  if (sort === "des")
    arr.sort((a, b) => (a[prop] < b[prop] ? 1 : b[prop] < a[prop] ? -1 : 0));
}

export function filterArray(arr, filterStr = "", category = "") {
  const regexp = new RegExp(filterStr, "i");
  const fitleredCategory = arr.filter((film) => {
    for (let el of film.category) {
      if (el.match(category)) return true;
    }
  });
  return fitleredCategory.filter((el) => {
    return el.name.match(regexp) ? true : false;
  });
}
