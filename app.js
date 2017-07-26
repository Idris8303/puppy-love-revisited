const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(2313, function(){
  console.log('Becky is listening to port 2313!');
})
