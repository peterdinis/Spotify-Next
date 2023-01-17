import {createSlice} from '@reduxjs/toolkit'

interface IPlayerState {
    current: any; // later change
    controls: boolean;
    playing: boolean;
    sidebar: boolean;
}

const initialState = {
    current: {
        src: ""
    },
    controls: false,
    playing: false,
    sidebar: false
} as IPlayerState;

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setControls: (state, action) => {
            state.controls = action.payload
        },
        setPlaying: (state, action) => {
            state.playing = action.payload
        },
        setSidebar: (state, action) => {
            state.sidebar = action.payload
        },
    },
})

export const {
    setControls,
    setCurrent,
    setPlaying,
    setSidebar
} = playerSlice.actions

export default playerSlice.reducer