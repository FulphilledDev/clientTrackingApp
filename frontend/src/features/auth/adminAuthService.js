import axios from'axios'

const ADMIN_URL = '/admin'

// Register Admin
const registerAdmin = async (adminData) => {
    const response = await axios.post(ADMIN_URL, adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

// Logout Admin
const logoutAdmin = () => localStorage.removeItem('admin')

const adminAuthService = {
    registerAdmin,
    logoutAdmin
}

export default adminAuthService