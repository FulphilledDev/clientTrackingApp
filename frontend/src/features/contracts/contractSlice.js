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
    }
})

export const {reset} = contractSlice.actions
export default contractSlice.reducer