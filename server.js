const express = require('express');
const app = express();
app.use(express.static(__dirname+'/'));
app.listen(3000);
console.log('node running 3000');