import axios from 'axios';

const API_URL = 'api/contracts'

// Create new ticket
const createContract = async (contractData) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const response = await axios.post(API_URL, contractData)

    return response.data
}

const contractService = {
    createContract
}

export default contractService