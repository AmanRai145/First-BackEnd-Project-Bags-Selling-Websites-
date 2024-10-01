const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const { generateToken } = require("../utils/generateToken");


module.exports.registerUser = function (req, res) {
    try {
        let { email, password, fullname } = req.body;
         
        bcrypt.genSalt(10, function (err, salt) {
            
            
            bcrypt.hash(password, salt, async function(err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    });

                 let token = generateToken(user);
                 res.cookie("token", token)
                 res.send( "creted the users sexexfully");
                   
                }
            });
        });

        
    } catch (err) {
        console.log(err.message);
    }
};

