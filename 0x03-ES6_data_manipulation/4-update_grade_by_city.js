export default function updateStudentGradeByCity(arr, str, grades) {
  const students = arr.filter((a) => a.location === str);
  students.forEach((element) => {
    grades.forEach((g) => {
      if (element.id === g.studentId) {
        element.grade = g.grade;
      }
    });
    if (!('grade' in element)) {
      element.grade = 'N/A';
    }
  });
  return students;
}
