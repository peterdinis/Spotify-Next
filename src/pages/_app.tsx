import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/shared/Layout";
import { SpotifyLayer } from "@/context/SpotifyContext";
import reducer from "@/context/reducer";
import { initialState } from "@/typing/contextTypes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SpotifyLayer initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />;
      </SpotifyLayer>
    </Layout>
  )
}
