import { LoginContainer } from "@/styles/Component.styled";

const LoginForm: React.FC = () => {
 
  const handleClick = () => {
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID as string;
    const redirect_uri = process.env.NEXT_PUBLIC_CLIENT_SECRET as string;
    const api_uri = "https://accounts.spotify.com/authorize";
    
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }

  return (
    <LoginContainer>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Spotify Connect</button>
    </LoginContainer>
  );
};

export default LoginForm;
