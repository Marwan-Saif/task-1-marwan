const express = require('express');
const app = express();

const students = [
  { name: 'Mostafa', age: 21, major: 'Computer Science' },
  { name: 'Naser', age: 21, major: 'Engineer' },
  { name: 'Elngar', age: 21, major: 'student' }
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
