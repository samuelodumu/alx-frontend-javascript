export default function updateStudentGradeByCity(objectsList, city, newGrades) {
  const studentsAtLocation = objectsList.filter((obj) => obj.location === city);
  return studentsAtLocation.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
