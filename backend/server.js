const path = require('path')
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
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/contracts', require('./routes/contractRoutes'))
app.use('/api/entries', require('./routes/entryRoutes'))

// Serve Frontend for deployment of app
if(process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    // Then load index.html in the build folder
    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {
    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Welcome to u2u Contracts API!'
        })
    })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))