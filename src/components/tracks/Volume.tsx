import { VolumeContainer } from "@/styles/Component.styled";
import axios from "axios";

const Volume: React.FC = () => {
  return (
    <>
      <VolumeContainer>
        <input type="range" />
      </VolumeContainer>
    </>
  );
};

export default Volume;
