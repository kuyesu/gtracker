const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const router = require('./routes/goalRoute')
const userRoute = require('./routes/userRoute')
const errorHandle = require('./middleware/errorHandle')

dotenv.config()
const port = process.env.PORT || 5000

// CONNECT TO DB
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/goals', router)
app.use('/api/v1/user', userRoute)
app.use(errorHandle)


app.listen(port, () => {
    console.log(`Listening on port ${port}`.red.underline)
})