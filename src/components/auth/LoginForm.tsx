import { LoginContainer } from "@/styles/Component.styled";

const LoginForm: React.FC = () => {
 
  const handleClick = () => {
    const client_id = "12f84dd0b53c490bb7fe3721a6765ac1";
    const redirect_uri = "http://localhost:3000/";
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
