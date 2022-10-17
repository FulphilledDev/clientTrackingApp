const registerClient = (req, res) => {
    res.send('Register Client Route')
}

const loginClient = (req, res) => {
    res.send('Login Client Route')
}

module.exports = {
    registerClient,
    loginClient
}