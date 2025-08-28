const express=require("express")
const { userRegistration, userLogin, ensureAuthenticated, UserContact } = require("../ValidationInput/Inputvalid")
// const { registration, login, getUser, contact } = require("../userController")
const sendData = require("../userController")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("All Good ")
})

router.post("/contact", UserContact, sendData);

// router.post("/login",userLogin,login)
// router.get("/getuser",ensureAuthenticated,getUser)

module.exports=router