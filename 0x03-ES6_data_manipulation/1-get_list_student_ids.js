export default function getListStudentIds(objectsList) {
  if (Array.isArray(objectsList)) {
    const ids = objectsList.map((obj) => obj.id);
    return ids;
  }
  return [];
}
