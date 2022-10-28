import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contractService from './contractService'

const initialState = {
    contracts: [],
    contract: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create New Contract
export const createContract = createAsyncThunk('contracts/create', async (contractData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await contractService.createContract(contractData, token)
    } catch (error) {
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message
            || error.toString()

            return thunkAPI.rejectWithValue(message)
    }
})

// Get Contracts
export const getContracts = createAsyncThunk('contracts/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await contractService.getContracts(token)
    } catch (error) {
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message
            || error.toString()

            return thunkAPI.rejectWithValue(message)
    }
})

// Get Contract
export const getContract = createAsyncThunk('contracts/get', async (contractId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await contractService.getContract(contractId, token)
    } catch (error) {
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message
            || error.toString()

            return thunkAPI.rejectWithValue(message)
    }
})

export const contractSlice = createSlice ({
    name: 'contract',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContract.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createContract.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.contracts.unshift(action.payload)
            })
            .addCase(createContract.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getContracts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getContracts.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.contracts = action.payload
            })
            .addCase(getContracts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getContract.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getContract.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.contracts = action.payload
            })
            .addCase(getContract.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = contractSlice.actions
export default contractSlice.reducer