const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

const horses = ['Geddy', 'Neil', 'Alex', 'Stang', 'Pierce'];

app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {horseNames: horses});
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});