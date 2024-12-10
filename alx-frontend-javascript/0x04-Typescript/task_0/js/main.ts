// an interface named Student that accepts the following elements: 
//      firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const student1: Student = {
    firstName: 'Peter',
    lastName: 'Obi',
    age: 52,
    location: '4 somewhere in austrailia'
}

const student2: Student = {
    firstName: 'Donald',
    lastName: 'Trump',
    age: 58,
    location: '1 Where POTUS lives'
}

let studentsList: Array<Student> = [student1, student2];
let headers: string[] = ["Firstname", "Lastname", 'Age', "Location"];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

headers.forEach((heading) =>{
    const headercell = document.createElement("th");
    headercell.textContent = heading;
    headerRow.appendChild(headercell);
});
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const LastnameCell = document.createElement("td");
    LastnameCell.textContent = student.lastName;
    row.appendChild(LastnameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = String(student.age);
    row.appendChild(ageCell);

    const LocationCell = document.createElement("td");
    LocationCell.textContent = student.location;
    row.appendChild(LocationCell);

    table.appendChild(row);
});

document.body.appendChild(table);
