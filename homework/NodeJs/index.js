const express = require('express')
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

const students = [
     {
        id: 1,
        name: 'Elnur'
     },
     {
        id: 2,
        name: 'Aykhan'
     },
     {
        id: 3,
        name:'Ferhad'
     }
]
app.get('/students', (req, res) => {
    res.status(200).json(students)
})

// GET operation
app.get('/students/:id', (req,res) => {
    const param = req.params
    const student = students.find((item) => item.id == param.id)
    if (student){
        return res.status(200).json(student)
    }else {
        return res.status(400).json('Student not fount with the given id')
    }
})


// POST operation
app.post('/students', (req, res) => {
    const student = req.body
    students.push(student)
    return res.status(201).json('Student added suucesfully !')
})

// PUT operation
app.put('/students/:id', (req, res) => {
    const param = req.params;
    const updatedStudent = req.body;
    const index = students.findIndex((item) => item.id == param.id);
    if (index !== -1) {
        students[index] = updatedStudent;
    return res.status(200).json('Student updated successfully!');
    } else {
        return res.status(400).json('Student not found with the given id');
    }
});

// PATCH operation
app.patch('/students/:id', (req, res) => {
    const param = req.params;
    const updates = req.body;
    const student = students.find((item) => item.id == param.id);
    if (student) {
    const keys = Object.keys(updates);
           for (let i = 0; i < keys.length; i++) {

                    const key = keys[i];
        student[key] = updates[key];
        }
        return res.status(200).json('Student updated successfully!');
    } else {
        return res.status(400).json('Student not found with the given id');
    }
});

// DELETE operation
app.delete('/students/:id', (req, res) => {
    const param = req.params;
    const index = students.findIndex((item) => item.id == param.id);
    if (index !== -1) {
    students.splice(index, 1);
          return res.status(200).json('Student deleted successfully!');
    }else {
    return res.status(400).json('Student not found with the given id');
    }
});

const PORT = 7000

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`.bold.blue))



