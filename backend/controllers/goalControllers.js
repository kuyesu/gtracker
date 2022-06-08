const asyncHandler = require('express-async-handler')
const Goal = require('../models/goals')
const User = require('../models/users')
// @desc get goals
// @route GET /api/v1/goals
// @access Private
const getGoals = asyncHandler ( async (req, res) => {
    const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals)
})

// @desc set goals
// @route POST /api/v1/goals
// @access Private
const setGoal = asyncHandler ( async (req, res) => {
    const { title, description, completed, owner } = req.body
    if (!title || !description || !completed || !owner) {
        res.status(400)
        throw new Error('Field is required')
    }
    const goal = await Goal.create({
        user: req.user.id,
        title,
        description,
        completed,
        owner
    })

    res.status(200).json(goal)
})

// @desc update goals
// @route PUT /api/v1/goals/:id
// @access Private
const updateGoal = asyncHandler ( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    // Make sure user is owner of goal
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
    res.status(200).json(updatedGoal)
})

// @desc delete goals
// @route DELETE /api/v1/goals/:id
// @access Private
const deleteGoal = asyncHandler ( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }
    // Make sure user is owner of goal
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure user is owner of goal
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()
    res.status(200).json({
        id: req.params.id
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}