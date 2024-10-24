const exp = require('constants');
const e = require('express');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));

});
// app.get('/css', (req, res) => {
//   res.sendFile(path.join(__dirname,'../css','styles.css'))
// })
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../about.html'));
})
app.use((req, res) => {
  res.status(400).sendFile(path.join(__dirname, '404.html'));
})

app.listen('2222', () => {
  console.log(`Server running at http://127.0.0.1:2222/`);
})