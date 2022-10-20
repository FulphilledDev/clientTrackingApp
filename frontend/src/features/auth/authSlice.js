import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    admin: null,
    client: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

///////////////
// Admin
///////////////
// Register
export const registerAdmin = createAsyncThunk('auth/registerAdmin', async (admin, thunkAPI) => {
        try {
            return await authService.register(admin)
        } catch (error) {
            const message = 
                (error.response 
                    && error.response.data 
                    && error.response.data.message) || 
                    error.message || 
                    error.toString()
            
                    console.log(error)
            return thunkAPI.rejectWithValue(message)
        }
})

// Login
export const loginAdmin = createAsyncThunk('auth/loginAdmin', async (admin, thunkAPI) => {
        console.log(admin)
})

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



export const authSlice = createSlice ({
    name: 'auth',
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
            .addCase(registerAdmin.pending, (state)=> {
                state.isLoading = true
            })
            .addCase(registerAdmin.fulfilled, (state, action)=> {
                state.isLoading = false
                state.isSuccess = true
                state.admin = action.payload
            })
            .addCase(registerAdmin.rejected, (state, action)=> {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.admin = null
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer