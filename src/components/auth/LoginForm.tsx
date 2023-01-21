import { LoginContainer } from "@/styles/Component.styled";

const LoginForm: React.FC = () => {
 
  const handleClick = () => {

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
