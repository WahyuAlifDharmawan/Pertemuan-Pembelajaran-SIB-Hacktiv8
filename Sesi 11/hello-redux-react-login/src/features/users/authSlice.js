import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    errorMessege: "",
    user: {},
};

function callLoginApi(email, password) {
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            if (email === "admin@login.com" && password === "admin"){
                resolve({email});
            } else {
                reject("invalid email and password");
            }
        }, 1000);
    });
}

export const authLoginApi = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        try {
            const response = await callLoginApi(email, password);
            return response.email;
        } catch (err) {
            throw err;
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(authLoginApi.pending, (state) => {
                state.isLoginPending = true;
            })
            .addCase(authLoginApi.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action);
                const {email} = action.payload;
                state.isLoginPending = false;
                state.isLoginSuccess = true;
                state.user = {email};
            })
            .addCase(authLoginApi.rejected, (state, action) => {
                console.log(action, "rejected");
                state.isLoginPending = false;
                state.isLoginSuccess = false;
                state.errorMessege = action.error.message;
            });
    },
});

export default authSlice.reducer;