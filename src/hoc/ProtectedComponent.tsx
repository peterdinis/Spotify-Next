import { useEffect, useState } from 'react';
import Router from 'next/router';
import { getTokenFromUrl } from '@/utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useSpotify } from '@/hooks/useSpotifyContext';

const spotify = new SpotifyWebApi();

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {
        const [loading, setLoading] = useState(true);

        const [{user, token}, dispatch] = useSpotify() as any;
    
        useEffect(() => {
            const hash = getTokenFromUrl();
            window.location.hash = "";
            const _token = hash.accessToken;

            if(_token) {
                dispatch({
                    type: "SET_TOKEN",
                    token: _token
                })
                
                spotify.setAccessToken(_token);

                spotify.getMe().then((user: any) => {
                    console.log("Ping work", user);

                    dispatch({
                        type: "SET_USER",
                        user,
                    })
                })
            }

            setLoading(false);
        }, []);

        console.log("User from context api", user);
    
        if (loading) {
            return <div>Loading...</div>;
        }
    
        if (!token) {
            Router.push('/login');
            return null;
        }
    
        return <WrappedComponent {...props} />;
    };
    
    WithAuth.getInitialProps = async (ctx: any) => {
        const wrappedComponentInitialProps = WrappedComponent.getInitialProps
            ? await WrappedComponent.getInitialProps(ctx)
            : {};
    
           return { ...wrappedComponentInitialProps };
        };
    
       return WithAuth;
    };
    
    export default withAuth;