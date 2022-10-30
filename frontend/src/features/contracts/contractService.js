import axios from 'axios';

const API_URL = 'api/contracts/'

// Create new contract
const createContract = async (contractData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, contractData, config)

    return response.data
}

// Get user contracts
const getContracts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Modify user contract
const modifyContract = async (contractData, token) => {
    const  modifiedContract = {
        receiver: contractData.receiver,
        service: contractData.service,
        startDate: contractData.startDate,
        completionDate: contractData.completionDate,
        paymentAmount: contractData.paymentAmount,
        paymentInterval:contractData.paymentInterval 
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + contractData.id, modifiedContract, config)

    return response.data
}

// Approve contract
const approveContract = async (contractData, token) => {
    const  approvedContract = {
        status: contractData.status
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + contractData.id + '/approve', approvedContract, config)

    return response.data
}

// Deny contract
const denyContract = async (contractData, token) => {
    const  deniedContract = {
        status: contractData.status
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + contractData.id + '/deny', deniedContract, config)

    return response.data
}


const contractService = {
    createContract,
    getContracts,
    modifyContract, 
    approveContract,
    denyContract

}

export default contractService