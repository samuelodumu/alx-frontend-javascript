export default function getListStudentIds(objectsList) {
  if (Array.isArray(objectsList)) {
    const newMap = new Map(Object.entries(objectsList));
    const ids = [];
    for (const x of newMap.values()) {
      ids.push(x.id);
    }
    return ids;
  }
  return [];
}
