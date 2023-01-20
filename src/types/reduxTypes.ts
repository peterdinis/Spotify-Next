import { spotifyConstants } from "@/redux/constants";

export interface IState {
    token: null,
    userInfo: null,
    playlists: Array<[]>,
    currentPlaying: null,
    playerState: boolean,
    selectedPlaylist: null,
    selectedPlaylistId: string
}

type ISetToken = {
    type: typeof spotifyConstants.SET_TOKEN,
    token: string,
}

type IUserInfo = {
    type: typeof spotifyConstants.SET_USER,
    userInfo: string | any
}

export type BasicAction = ISetToken | IUserInfo |any // TODO: Later finish typing