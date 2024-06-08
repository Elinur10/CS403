const express = require('express')
const bodyParser = require('body-parser')
require('colors')
const app = express()
app.use(bodyParser.json())

const studentss =[
    {
        id: 1,
        name: 'ferhad'
    },
    {
        id:2,
        name: 'elnur'
    },
    {
        id:3,
        name:'isa'
    }
]



app.get('/sudents', (req, res) => {
    res.status(200).json('CS403 in backend by Nodejs')
})

const PORT = 7000
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}` .bold.green))