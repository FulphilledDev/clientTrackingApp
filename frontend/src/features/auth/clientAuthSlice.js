import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import clientAuthService from './clientAuthService'

const initialState = {
    client: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

////////////////
// Client
////////////////
// Register
export const registerClient = createAsyncThunk('auth/registerClient', async (client, thunkAPI) => {
        console.log(client)
})

// Login
export const loginClient = createAsyncThunk('auth/loginClient', async (client, thunkAPI) => {
        console.log(client)
})

export const clientAuthSlice = createSlice ({
    name: 'client',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerClient.pending, (state)=> {
                state.isLoading = true
            })
            .addCase(registerClient.fulfilled, (state, action)=> {
                state.isLoading = false
                state.isSuccess = true
                state.client = action.payload
            })
            .addCase(registerClient.rejected, (state, action)=> {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.client = null
            })
    }
})

export const { reset } = clientAuthSlice.actions

export default clientAuthSlice.reducer
