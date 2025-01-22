import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";


interface AuthState {
    phoneVerifyToken?: string  //optional
}

const initialState: AuthState = {
    phoneVerifyToken: undefined
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updatePhoneVerifyToken: (state, action: PayloadAction<string|undefined>) => {
            state.phoneVerifyToken = action.payload;

        }
    }
})

export const { updatePhoneVerifyToken } = authSlice.actions; //action name

export const selectPhoneVerifyToken = (state: RootState) => state.auth.phoneVerifyToken;

export default authSlice.reducer;
