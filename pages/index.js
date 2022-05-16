import Head from "next/head";
import { getFeaturedPosts } from "../lib/posts_util";
import { Fragment } from "react";
import FeaturePosts from "../components/feature-posts/feature-posts";
import Hero from "../components/hero/hero";

function HomePage({ featuredPosts }) {
    return (
        <Fragment>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="blog about web development and teaching" />
            </Head>
            <Hero />
            <FeaturePosts posts={featuredPosts}/>
        </Fragment>
    );
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            featuredPosts,
        },
    };
}

export default HomePage;
