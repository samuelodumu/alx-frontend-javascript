interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Xaden",
    lastName: "Riorson",
    age: 25,
    location: "Basgiath war college"
}

const student2: Student = {
    firstName: "Violet",
    lastName: "Sorrengail",
    age: 19,
    location: "Basgiath war college"
}

const studentList = [student1, student2]

// render a table and for each elements in the array, append a new row to the table
const table = document.createElement("table"); 
studentList.forEach((student) => {
    const row = table.insertRow();
    const firstname = row.insertCell(0);
    const location = row.insertCell(1);

    firstname.textContent = student.firstName;
    location.textContent = student.location;
})

document.body.appendChild(table);
