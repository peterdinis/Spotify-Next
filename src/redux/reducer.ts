import { BasicAction, IState } from "@/types/reduxTypes";
import { spotifyConstants } from "./constants";


export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
} as IState;

const reducer = (state: IState, action:BasicAction): IState => {
  switch (action.type) {
    case spotifyConstants.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case spotifyConstants.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case spotifyConstants.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case spotifyConstants.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case spotifyConstants.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    case spotifyConstants.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case spotifyConstants.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    default:
      return state;
  }
};

export default reducer;