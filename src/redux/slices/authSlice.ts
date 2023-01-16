import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from "firebase/auth";

export interface AuthState {
    currentUser: User | undefined,
    loading: boolean,
}

export const initialState = {
    currentUser: undefined,
    loading: false,
} as AuthState;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.currentUser = action.payload
        }
    },

    extraReducers: {

    }
});

export const {addUser} = authSlice.actions