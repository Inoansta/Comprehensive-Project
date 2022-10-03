const express = require('express');

const app = express();

app.listen(3000, () => { console.log(`Example app listening on port 3000`)})
const currentDate = new Date();
const timestamp = currentDate.getTime();
app.get('/tasks',(req, res) => {
    console.log('http://localhost:3000/tasks This is the url');
    console.log(timestamp + 'This is the time');
    res.send('Hello World!')})
app.get('/index',(req, res) => {res.send('Hello index!')})