export default function getStudentIdsSum(arr) {
  return arr.reduce((accum, current) => accum + current.id, 0);
}
