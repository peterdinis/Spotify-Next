import { createSlice } from "@reduxjs/toolkit";
import {User} from "firebase/auth";

export interface AuthState {
    currentUser: User | undefined,
    loading: boolean,
    userName: string | null,
    userEmail: string | null
}

export const initialState = {
    currentUser: undefined,
    loading: false,
    userName: null,
    userEmail: null

} as AuthState;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },

        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },

        setUserLogout: (state) => {
            state.userEmail = null;
            state.userName = null;
        }
    },

    extraReducers: {

    }
});

export const {addUser, setActiveUser, setUserLogout} = authSlice.actions;