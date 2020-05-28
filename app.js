
const express = require('express')
const app = express();
const fs = require('fs');
// ('./file') - local module
// ('file') - global module

// setting up our first express web server 

// react - localhost: 3000 ->

// GET - simply retrieving info

let counter = 0;

app.get('/', (req, res) => {
    fs.writeFileSync('./myData.txt', 'hello godBu')
    res.send(`Requested 0 times.`)
    //res.send(`Requested ${counter}.`)
    //counter++
    //res.sendFile(__dirname + '/index.html')
})

app.get('/index', (req, res) => {
    //res.send('Requested.');
    res.sendFile(__dirname + '/index.html')
})
app.get('/about', (req, res) => {
    //res.send('Requested.');
    res.sendFile(__dirname + '/about.html')
})

app.listen(3000, () => {
    console.log('I am here to serve port 3000.');
})

/*const myFirstImport = require('./index');

myFirstImport.sayHello();
myFirstImport.sayGoodbye();
myFirstImport.sayWhat();*/

//Control + C to reload server, reload app.js and refresh browser