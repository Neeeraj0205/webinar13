const route = require('express').Router();
let persons=[
    {name:'abc',age:22,city:'dysfg'},
    {name:'fdgfd',age:67,city:'dycbsfg'}
]
route.get('/',(req,res)=>{
    res.render('persons',{persons})
})
module.exports =route;