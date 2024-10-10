interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

const student1: Student = {
    firstname: "Xaden",
    lastname: "Riorson",
    age: 25,
    location: "Basgiath"
}

const student2: Student = {
    firstname: "Violet",
    lastname: "Sorrengail",
    age: 19,
    location: "Basgiath"
}

const studentList = [student1, student2]

// render a table and for each elements in the array, append a new row to the table
const table = document.createElement("table"); 
studentList.forEach((student) => {
    const row = table.insertRow();
    const firstname = row.insertCell(0);
    const location = row.insertCell(1);

    firstname.textContent = student.firstname;
    location.textContent = student.location;
})

document.body.appendChild(table);
