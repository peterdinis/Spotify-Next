export interface InitialStateI {
    user: null,
    playlists: Array<[]>,
    playing: boolean,
    item: null
}

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
} as InitialStateI;

// TODO: Update this later

type UserAction = {
    type: string,
    payload: any
}


export type ReduxAction = UserAction | any;