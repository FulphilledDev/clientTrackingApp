const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to DB
// connectDB()

const app = express()

// Use express json to send data as objects
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello Hello'})
})

// Routes
app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))