export const apiEndpoint = "https://accounts.spotify.com/authorize";
export const redirectEndpoint = "http://localhost:3000/";
const client_id = "12f84dd0b53c490bb7fe3721a6765ac1";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

/* Get token for url */
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial: any, item: any) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${apiEndpoint}?client_id=${client_id}&redirect_uri=${redirectEndpoint}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
