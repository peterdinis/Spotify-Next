import { useEffect, useState } from 'react';
import Router from 'next/router';
import { getTokenFromUrl } from '@/utils/spotify';

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [user, setUser] = useState(null);
        const [token, setToken] = useState(null);
    
        useEffect(() => {
            const hash = getTokenFromUrl();
            window.location.hash = "";
            const _token = hash.accessToken;

            if(_token) {
                setToken(_token);
            }

            setLoading(false);
        }, []);
    
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