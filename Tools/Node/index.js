const express = require('express');
const url = require('url');
const crypto = require('crypto');

const app = express();

app.listen(3000, () => { console.log(`Example app listening on port 3000`)})
const currentDate = new Date();
const timestamp = currentDate.getTime();
app.get('/tasks',(req, res) => {
    var rand = crypto.randomUUID(); //uuid
    var url_parts = req.url; //
    console.log(`The current url is http://localhost:3000${url_parts}`);
    console.log(timestamp + 'This is the time');
    console.log(`The xrequest-id of header is ${rand}`)
    res.setHeader('xrequest-id', `${rand}`);
    res.send('Hello World!')})
app.get('/index',(req, res) => {res.send('Hello index!')})