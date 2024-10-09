export default function updateStudentGradeByCity(objectsList, city, newGrades) {
  const studentsAtLocation = objectsList.filter((obj) => obj.location === city);
  const idsList = newGrades.map((obj) => obj.studentId);
  const studentsWithId = studentsAtLocation.map((obj) => obj.id in idsList);
  return studentsWithGrade;
}
