import { VolumeContainer } from "@/styles/Component.styled";
import axios from "axios";
import { useStateProvider } from "@/redux/state";

const Volume: React.FC = () => {
  const [{ token }] = useStateProvider();
  const setVolume = async (e: any) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      }
    );
  };
  
  return (
    <>
      <VolumeContainer>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
      </VolumeContainer>
    </>
  );
};

export default Volume;
