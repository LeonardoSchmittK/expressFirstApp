
const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');
const port = 300;

app.listen(port,()=>{
  console.log('App listening on port ' + port)
})

app.get('/',(req,res)=>{
 res.sendFile(path.resolve(__dirname,'index.html'))
})


app.get('/about',(req,res)=>{
 res.sendFile(path.resolve(__dirname,'about.html'))
})
