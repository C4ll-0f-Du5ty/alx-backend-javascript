export default function updateStudentGradeByCity(arr, str, grades) {
  // const students = arr.filter((a) => a.location === str);
  // students.forEach((e) => {
  //   grades.forEach((g) => {
  //     if (e.id === g.studentId) {
  //       e.grade = g.grade;
  //     }
  //   });
  //   if (!('grade' in e)) {
  //     e.grade = 'N/A';
  //   }
  // });
  // return students.map((student) => {
  //   const grade = grades.find((g) => g.studentId === student.id);
  //   student.grade = grade ? grade.grade : 'N/A';
  //   return student;
  // });
  return arr.filter((a) => a.location === str).map((student) => {
    grades.map((grade) => {
      if (grade.studentId === student.id) {
        // eslint-disable-next-line no-param-reassign
        student.grade = grade.grade;
      }
      return student;
    });
    if (!('grade' in student)) {
      // eslint-disable-next-line no-param-reassign
      student.grade = 'N/A';
    }
    return student;
  });
}
