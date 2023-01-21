import Layout from "@/components/shared/Layout";
import reducer, { initialState } from "@/redux/reducer";
import { StateProvider } from "@/redux/state";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
        </StateProvider>
      </Layout>
  );
}