import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "./../../lib/posts_util";

function AllPostsPage({ posts }) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta
                    name="description"
                    content="blog post about web and teaching"
                />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    };
}
export default AllPostsPage;
