import axios from'axios'

const ADMIN_URL = '/admin'
const CLIENT_URL = '/client'

// Register Admin
const registerAdmin = async (adminData) => {
    const response = await axios.post(ADMIN_URL, adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

// Register Client
const registerClient = async (clientData) => {
    const response = await axios.post(CLIENT_URL, clientData)

    if(response.data) {
        localStorage.setItem('client', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    registerAdmin,
    registerClient
}

export default authService