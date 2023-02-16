import DefaultLayouts from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayouts>
            <Component {...pageProps} />
        </DefaultLayouts>
    );
}
