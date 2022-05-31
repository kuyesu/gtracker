const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const router = require('./routes/goalRoute')

dotenv.config()
const port = process.env.PORT || 5000

app.get('/api/v1/goals', router)
app.listen(port, () => {
    console.log(`Listening on port ${port}`.red.underline)
})