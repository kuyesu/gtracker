const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/users')


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
            email: user.email
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

})


// @desc get user
// @route GET /api/v1/user/me
// @access public
const genSalt = asyncHandler ( async ( req, res) => {

})

module.exports = {
    registerUser,
    loginUser,
    getUser
}
