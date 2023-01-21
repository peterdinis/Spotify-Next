import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "@/redux/state";
import { spotifyConstants } from "@/redux/constants";
import { TrackContainer } from "@/styles/Component.styled";

const CurrentTrack: React.FC = () => {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map(
            (artist: { name: string }) => artist.name
          ),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: spotifyConstants.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: spotifyConstants.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <TrackContainer>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </TrackContainer>
  );
};

export default CurrentTrack;
