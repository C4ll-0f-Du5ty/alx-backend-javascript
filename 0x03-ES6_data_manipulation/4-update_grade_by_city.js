export default function updateStudentGradeByCity(arr, str, grades) {
  const students = [...arr.filter((a) => a.location === str)];
  students.forEach((e) => {
    grades.forEach((g) => {
      if (e.id === g.studentId) {
        e.grade = g.grade;
      }
    });
    if (!('grade' in e)) {
      e.grade = 'N/A';
    }
  });
  return students;
}
