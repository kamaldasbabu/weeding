 const router = require('express').Router();
 const role = require('../constants/roles');
 const authController = require("../controllers/auth")


 router.post("/login", [], (req, res) => {

    console.log(req, res);
    res.sent({});
 });

 router.post("/register", [], (req, res) => {
    console.log("---------")
    authController.register(req, res);
 });


 module.exports = router;