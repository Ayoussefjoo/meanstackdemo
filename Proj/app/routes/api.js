var user=require('../models/user'); 
module.exports=function(router){
//http://localhost:9090/Users
router.post('/Users',function(req,res){
    var _user=new user();
    _user.username=req.body.username;
    _user.password=req.body.password;
    _user.email=req.body.email;
    _user.save(function(err){
        if(err){
        res.send(err);
        }else{
            res.send('User has been created');
        }
    });
    
    });
    //handel route / in app 
    router.get('/',function(req,res){
        res.send('hello')
    });
    return router;
}