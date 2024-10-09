export default function getStudentIdsSum(objectsList) {
  const sum = 0;
  const sumOfIds = objectsList.reduce((accumulator, currentValue) => accumulator + currentValue.id,
    sum);
  return sumOfIds;
}
