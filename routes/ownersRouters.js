const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === "development"){
    router.post("/create", async function (req, res) {
       let owners = await ownerModel.find();
       if (owners.length > 0) {
        return res 
        .status(503)
        .send("You don't have right to create a new owner.")
       }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    })
    return res.status(201).send("Owner created successfully");
    });
}

router.get("/", function (req, res) {
    res.send("hey i am aman from owner");
});

module.exports = router;

