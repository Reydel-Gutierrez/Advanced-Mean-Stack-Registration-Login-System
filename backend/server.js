var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
  console.log('Web browser Opened');
  res.send("Welcome to the Mean Stack Auth Course");
});

app.listen(PORT, () => {
  console.log('Listening');
})
