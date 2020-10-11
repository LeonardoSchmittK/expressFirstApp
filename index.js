// const http = require('http');
// const fs = require('fs');
// const about =  fs.readFileSync('about.html');
// const home = fs.readFileSync('index.html');

// const server = http.createServer((req,res)=>{
//   if(req.url === '/about') {
//      res.writeHead(200)
//     res.end(about)
//   }else {
//    res.end(home)
//   }
// })

// server.listen(3100,()=>{
//  console.log('Server Running')
// });


const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
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
