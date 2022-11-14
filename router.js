const express = require('express');

const router = express.Router();
const users = [
    {name: "ben", age: "20"},
    {name: "John", age: "30"},
    {name: "chris", age: "40"},
    {name: "jane", age: "50"}
    
    ];

router.get("/users",(req,res)=>{
    res.send({
        status:0,
        ms:"get users succeed",
        data:users,
    });
});
router.post("/user",(req,res)=>{
  const body = req.body;
  console.log("body",body);
    res.send({
        msg: "post succeed",
        data: body
    })
})

module.exports = router;