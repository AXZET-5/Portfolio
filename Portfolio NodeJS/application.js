const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
});

router.get('/education',function(req,res){
  res.sendFile(path.join(__dirname+'/education.html'));
});

router.get('/achievements',function(req,res){
  res.sendFile(path.join(__dirname+'/achievements.html'));
});

router.get('/experience',function(req,res){
  res.sendFile(path.join(__dirname+'/experience.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');