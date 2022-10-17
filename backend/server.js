const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello'})
})

// Base Routes
app.use('/admin', require('./routes/adminRoutes'))
app.use('/client', require('./routes/clientRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))