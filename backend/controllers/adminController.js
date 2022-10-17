const registerAdmin = (req, res) => {
    res.send('Register Admin Route')
}

const loginAdmin = (req, res) => {
    res.send('Login Admin Route')
}

module.exports = {
    registerAdmin,
    loginAdmin
}