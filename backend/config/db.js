const mongoose = require('mongoose')

const connectDB  = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.error(`MongoDB Connection Error: ${err}`.red.underline)
        process.exit(1)
    }
}

module.exports = connectDB