const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const router = require('./routes/goalRoute')
const userRoute = require('./routes/userRoute')
const errorHandle = require('./middlewares/errorHandler')

dotenv.config()
const port = process.env.PORT || 5000

// CONNECT TO DB
connectDB()

app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/goals', router)
app.use('/api/v1/auth', userRoute)
app.use(errorHandle)


app.listen(port, () => {
    console.log(`Listening on port ${port}`.cyan.underline)
})