const asyncHandler = ('express-async-handler');
// @desc get goals
// @route GET /api/v1/goals
// @access Private
const getGoals = asyncHandler ( async (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    })
})

// @desc set goals
// @route POST /api/v1/goals
// @access Private
const setGoal = asyncHandler ( async (req, res) => {
    req.body.text
    console.log(req.body.text)

    res.status(200).json({
        message: 'Create goals'
    })
})

// @desc update goals
// @route PUT /api/v1/goals/:id
// @access Private
const updateGoal = asyncHandler ( async (req, res) => {
    res.status(200).json({
        message: 'Update goals'
    })
})

// @desc delete goals
// @route DELETE /api/v1/goals/:id
// @access Private
const deleteGoal = asyncHandler ( async (req, res) => {
    res.status(200).json({
        message: 'Delete goals'
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}