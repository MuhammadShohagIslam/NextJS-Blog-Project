import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    );
}

export default MyApp;
