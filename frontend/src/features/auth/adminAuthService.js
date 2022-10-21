import axios from'axios'

const ADMIN_URL = '/admin/'

// Register Admin
const registerAdmin = async (adminData) => {
    const response = await axios.post(ADMIN_URL, {
        headers: {
            Accept: 'application/json'
        }
    }, adminData)
        .then(function (response) {
            localStorage.setItem('admin', JSON.stringify(response))
        })
        .catch(function (error) {
            console.log(error)
        })
    
        return response

    // if(response.data) {
    //     localStorage.setItem('admin', JSON.stringify(response.data))
    // }
    // return response.data
}

// Login Admin
const loginAdmin = async (adminData) => {
    const response = await axios.post(ADMIN_URL, adminData)
        .then(function (response) {
            localStorage.setItem('admin', JSON.stringify(response))
        })
        .catch(function (error) {
            console.log(error)
        })
    
        return response

    // if(response.data) {
    //     localStorage.setItem('admin', JSON.stringify(response.data))
    // }
    // return response.data
}

// Logout Admin
const logoutAdmin = () => localStorage.removeItem('admin')

const adminAuthService = {
    registerAdmin,
    logoutAdmin,
    loginAdmin
}

export default adminAuthService