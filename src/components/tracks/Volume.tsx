import { VolumeContainer } from "@/styles/Component.styled";

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
