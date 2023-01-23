import { SpotifyContext } from "@/context/SpotifyContext";
import {useContext} from "react";

export const useSpotify = () => useContext(SpotifyContext);