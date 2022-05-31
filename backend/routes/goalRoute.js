const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Create goals'
    })
})

router.put('/:id', (req, res) => {
    res.status(200).json({
        message: 'Update goals'
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: 'Delete goals'
    })
})

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    })
})

module.exports = router