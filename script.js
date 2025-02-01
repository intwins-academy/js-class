const students = [
  {
    name: "John Doe",
    rollNo: 1,
    marks: 50,
  },
  {
    name: "Jane Doe",
    rollNo: 2,
    marks: 60,
  },
  {
    name: "John Smith",
    rollNo: 3,
    marks: 70,
  },
  {
    name: "Jane Smith",
    rollNo: 4,
    marks: 80,
  },
  {
    name: "John Johnson",
    rollNo: 5,
    marks: 90,
  },
  {
    name: "Jane Johnson",
    rollNo: 6,
    marks: 100,
  },
];

/* students.push({
  name: "New Student",
  rollNo: 7,
  marks: 110,
}); */

const tbody = document.querySelector("tbody");

for (let i = 0; i < students.length; i++) {
  const row = `
    <tr>
        <td>${students[i].name}</td>
        <td>${students[i].rollNo}</td>
        <td>${students[i].marks}</td>
        <td></td>
    </tr>
    `;

  tbody.innerHTML += row;
}

function addResult() {
  const name = prompt("Enter the name of the student");
  const rollNo = parseInt(prompt("Enter the roll number of the student"));
  const marks = parseInt(prompt("Enter the marks of the student"));

  students.push({
    name: name,
    rollNo: rollNo,
    marks: marks,
  });
  console.log(students);

  const row = `
    <tr>
    <td>${students[students.length - 1].name}</td>
    <td>${students[students.length - 1].rollNo}</td>
    <td>${students[students.length - 1].marks}</td>
    </tr>
    `;

  tbody.innerHTML += row;
}
