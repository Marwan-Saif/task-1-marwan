const express = require('express');
const app = express();

const students = [
  { name: 'Marwan Saif', age: 21, major: 'Computer Science' },
  { name: 'Mohamed Saif', age: 21, major: 'Engineer' },
  { name: 'Moaz Saif', age: 21, major: 'student' }
];

app.get('/students', (req, res) => {
  let studentList = '<ul>';

  students.forEach(student => {
    const { name, age, major } = student;
    studentList += `<li>${name}, ${age}, ${major}</li>`;
  });

  studentList += '</ul>';

  res.send(studentList);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
