//initiate ex
var express=require('express');
//add morgen lib middle layer for coloring log lines 
var morgan=require('morgan');
var mongoose=require('mongoose');
var parser=require('body-parser');
//define router object we will use it from express lib
var router=express.Router();
var appRoute=require('./app/routes/api')(router);
var path=require('path');

mongoose.connect('mongodb://localhost:27017/testdb',function(err){
    if(err){
        console.log('Not Connected to DB : '+err)
    }
    else{
        console.log('Connectd to DB')
    }
})
//create app to call express from it 
var app=express();
//using log lib
app.use(morgan('dev'));
//parse appliction/json
app.use(parser.json());
//parse application/x-ww-form-urlencode
app.use(parser.urlencoded({extended:true})); 
app.use(express.static(__dirname +'/public'));
//just to use router object as middel layer and modify url to add /api befor route
app.use('/api',appRoute);

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname +'/public/app/views/index.html'))
})
//define port for app to start listen
app.listen(9090,function(){
    console.log('Hello from server');
});

//connect to mongo db
