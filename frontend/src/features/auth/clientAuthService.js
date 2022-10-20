import axios from'axios'

const CLIENT_URL = '/client/'

// Register Client
const registerClient = async (clientData) => {
    const response = await axios.post(CLIENT_URL + 'register', clientData)

    if(response.data) {
        localStorage.setItem('client', JSON.stringify(response.data))
    }
    return response.data
}

const clientAuthService = {
    registerClient
}

export default clientAuthService