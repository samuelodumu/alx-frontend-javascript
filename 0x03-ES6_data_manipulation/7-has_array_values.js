export default function hasValuesFromArray(set, array) {
  const arrayToSet = new Set(array);
  let value = false;
  for (const arg of arrayToSet) {
    if (!set.has(arg)) {
      value = false;
      break;
    } else {
      value = true;
    }
  }
  return value;
}
