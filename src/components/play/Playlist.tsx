import axios from "axios";
import { useEffect } from "react";
import { spotifyConstants } from "@/redux/constants";
import { useStateProvider } from "@/redux/state";
import { PlaylistContainer } from "@/styles/Component.styled";

const PlayList: React.FC = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }: any) => {
        return { name, id };
      });
      dispatch({ type: spotifyConstants.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId: number) => {
    dispatch({ type: spotifyConstants.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <PlaylistContainer>
      <ul>
        {playlists.map(({ name, id }: any) => {
          return (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </PlaylistContainer>
  );
};

export default PlayList;
