const express = require("express")
const mongoose = require("mongoose")

const bcrypt = require("bcrypt");

const router = express.Router();
const {User} =require('../models/user')

router.post('/', async (req, res) => {
    try {


		const user = await User.findOne({ email: req.body.email });
	
		if (!user)
			return res.status(401).send({ message: "No existing user with this email" });
        
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password, salt);  
            
            User.findOneAndUpdate(
                { email: req.body.email },
        
                { password: hashPassword },
        
                function (err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(response);
                    }
                }
            )
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

});


module.exports = router