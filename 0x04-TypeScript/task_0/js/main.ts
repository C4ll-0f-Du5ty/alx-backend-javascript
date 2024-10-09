interface Student {
    firstName: string
    lastName: string
    age:number
    location:string
}

const firstStudent: Student = {
    firstName: 'bob',
    lastName: 'done',
    age: 55,
    location: 'UK'
}

const secondStudent: Student = {
    firstName: 'jack',
    lastName: 'mike',
    age: 53,
    location: 'US'
}

const listStudents: Student[] = [firstStudent, secondStudent]


const table = document.createElement("table")
document.body.appendChild(table)

listStudents.forEach(student => {
    let row = table.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    cell1.textContent = student.firstName
    cell2.textContent = student.location
})
