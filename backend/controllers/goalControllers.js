const asyncHandler = require('express-async-handler')
const Goal = require('../models/goals')
// @desc get goals
// @route GET /api/v1/goals
// @access Private
const getGoals = asyncHandler ( async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc set goals
// @route POST /api/v1/goals
// @access Private
const setGoal = asyncHandler ( async (req, res) => {
    const goal = await Goal.create(req.body)
    if (!req.body.text){
        res.status(400)
        throw new Error('text is required')
    }
    console.log(req.body.text)

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