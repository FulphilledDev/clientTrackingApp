import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import adminAuthService from './adminAuthService'

// Get admin from local storage
const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
    admin: admin ? admin : null,
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
            return await adminAuthService.registerAdmin(admin)
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

// Login Admin
export const loginAdmin = createAsyncThunk('auth/loginAdmin', async (admin, thunkAPI) => {
        console.log(admin)
})

// Logout Admin
export const logoutAdmin = createAsyncThunk('auth/logoutAdmin', async () => {
    await adminAuthService.logoutAdmin()
})


export const adminAuthSlice = createSlice ({
    name: 'admin',
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
            .addCase(logoutAdmin.fulfilled, (state) => {
                state.admin = null
            })
    }
})

export const { reset } = adminAuthSlice.actions

export default adminAuthSlice.reducer