const express = require('express')
const app = express()
const port = 3000

let a = 1;
let b = 2;
let c = a + b;

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.listen(port, () => {
    console.log(c)
    console.log(`Example app listening on port ${port}`)
})