const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    })
}

const setGoal = (req, res) => {
    res.status(200).json({
        message: 'Create goals'
    })
}

const updateGoal = (req, res) => {
    res.status(200).json({
        message: 'Update goals'
    })
}

const deleteGoal = (req, res) => {
    res.status(200).json({
        message: 'Delete goals'
    })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}