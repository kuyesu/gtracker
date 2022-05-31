const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT || 5000

app.get('/api/v1/goals', (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`.red.underline)
})