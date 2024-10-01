const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");
router.get("/", function (req, res) {
    res.send("hey i am aman ");
});

router.post("/register",  registerUser);
        
          
    
    
module.exports = router;``