import CurrentTrack from "../tracks/CurrentTrack";
import PlayerControls from "../play/PlayerControls";
import Volume from "../tracks/Volume";
import { FooterContainer } from "@/styles/Component.styled";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
         <CurrentTrack />
         <PlayerControls />
         <Volume />
        </FooterContainer>
    )
}

export default Footer;