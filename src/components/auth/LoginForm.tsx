import styles from "../../styles/Auth.module.css";
import { loginUrl } from "@/utils/spotify";

const LoginForm: React.FC = () => {
 
  return (
    <div className={styles.loginContainer}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <a href={loginUrl}>Spotify Connect</a>
    </div>
  );
};

export default LoginForm;
