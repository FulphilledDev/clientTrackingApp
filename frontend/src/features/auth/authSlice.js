import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    admin: null,
    client: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Admin
export const registerAdmin = createAsyncThunk('auth/registerAdmin', async (admin, thunkAPI) => {
        console.log(admin)
})
export const loginAdmin = createAsyncThunk('auth/loginAdmin', async (admin, thunkAPI) => {
        console.log(admin)
})

// Client
export const registerClient = createAsyncThunk('auth/registerClient', async (client, thunkAPI) => {
        console.log(client)
})
export const loginClient = createAsyncThunk('auth/loginClient', async (client, thunkAPI) => {
        console.log(client)
})



export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer