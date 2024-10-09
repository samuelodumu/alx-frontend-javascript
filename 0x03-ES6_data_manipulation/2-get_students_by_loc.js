export default function getStudentsByLocation(objectsList, city) {
  const result = objectsList.filter((obj) => obj.location === city);
  return result;
}
