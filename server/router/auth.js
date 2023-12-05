const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');


require('../db/conn');
const User = require('../model/userSchema');

// Register Route
router.post('/register', async (req,res) => {
    const{ name, email, password, cpassword, phone, work } = req.body;

    if (!name ||!email ||!password || !cpassword ||!phone ||!work) {
        return res.status(422).json({ message: 'Please fill all fields'
        });
    }

    if (password!== cpassword) {    
        return res.status(422).json({ message: 'Passwords do not match'
        });
    }

    try {

        const userexist = await User.findOne({ email: email })
    
        if (userexist) {
            return res.status(422).json({ message: 'User already exists'});
        }

        const newUser = new User({name, email, password, phone, work});

        newUser.save()
            
        res.status(201).json({ message: 'Registration successful'});

    } 
    catch(err) {
        console.log(err);
    }

});


// Login route
router.post('/login', async (req,res) => {
    const{ email, password } = req.body;

    if (!email ||!password) {
        return res.status(422).json({ message: 'Please fill all fields'});
    }

    try {

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch ) {
            return res.status(400).json({ message: 'Invalid Credentials'});
        }

        const token = await user.generateAuthToken();
        res.cookie('token', token, {
            expires: new Date(Date.now() + 258920000000),
            httpOnly: true
        });
        
        res.status(200).json({ message: 'Login Successful'});


    }
    catch(err) {
        console.log(err);
    }
});

router.get('/about',authenticate,  (req, res) => {
    res.send(req.rootUser);
});

module.exports = router;