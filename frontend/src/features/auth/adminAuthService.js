import axios from'axios'

const ADMIN_URL = '/admin'

// Register Admin
const registerAdmin = async (adminData) => {
    let b
    const response = await axios.post(ADMIN_URL, 
        {
            a:b
        },
        {headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }}, 
        adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

const adminAuthService = {
    registerAdmin
}

export default adminAuthService