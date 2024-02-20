const express = require('express');
const router = express.Router();
router.get('/all' , (req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"saurv"}])
})
router.get('/all' , (req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"saurv"}])
})
router.get('/one', (req,res)=>{
    res.send({id:1,name:"sachin"})
})
module.exports = router;