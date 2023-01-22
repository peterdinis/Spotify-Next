import styles from "../../styles/Auth.module.css";

const LoginForm: React.FC = () => {
    return (
        <div className={styles.loginContainer}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png'
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
    )
}

export default LoginForm;