export default function getStudentsByLocation (arr, str) {
    return arr.filter(obj => obj.location == str)
}
