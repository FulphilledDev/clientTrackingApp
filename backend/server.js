const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to Database
connectDB()

const app = express()

// Use express json to send data as objects
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/users', require('./routes/userRoutes'))
app.use('/users/contracts', require('./routes/contractRoutes'))
app.use('/users/entries', require('./routes/entryRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))