const User = require('../models/User');
const asyncHandler = require('../config/generateToken');
const generateToken = require('../config/generateToken');
// const { userInfo } = require('os');


exports.authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            chips: user.chips,
            token: generateToken(user._id),

        })


    } else {
        res.status(401);
        throw new Error('invalid email or password');



    }

})