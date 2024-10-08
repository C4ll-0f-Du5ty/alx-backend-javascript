export default function getListStudentIds(arr) {
  return (Array.isArray(arr) ? arr.map((obj) => obj.id) : []);
  // console.log(ids)
}
