const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/users')


// @desc generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


// @desc register user
// @route POST /api/v1/user/
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user already exist
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create a user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }

})


// @desc login user
// @route POST /api/v1/user/login
// @access public
const loginUser = asyncHandler ( async (req, res) =>{
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const user = await User.findOne({ email })
    if (user && ( await bcrypt.compare ( password, user.password ) )) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }

})


// @desc get user
// @route GET /api/v1/user/me
// @access public
const getUser = asyncHandler ( async ( req, res) => {
    const { _id, name, email, role } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        role,
        token: generateToken(_id)
    })
})

module.exports = {
    registerUser,
    loginUser,
    getUser
}
