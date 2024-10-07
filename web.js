const express = require('express'); 
const app = express();
const path = require('path'); 
const port = 3000;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'))
}); 

app.get('/experience', function (req, res) {
    res.sendFile(path.join(__dirname,'public/Experience.html'))
}); 

app.get('/projects', function (req, res) {
    res.sendFile(path.join(__dirname,'public/Projects.html'))
}); 

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname,'public/Contact.html'))
}); 

app.listen(port, () => {
  console.log(`Server running at 3000`);
});