import { Fragment } from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "./../../lib/posts_util";

function PostDetailsPage({ post }) {
    return (
        <Fragment>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} />
            <PostContent post={post} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const post = getPostData(slug);
    return {
        props: {
            post,
        },
        revalidate: 6000,
    };
}

export async function getStaticPaths() {
    const postFiles = getPostsFiles();
    const slugs = postFiles.map((postFile) => postFile.replace(/\.md$/, ""));

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default PostDetailsPage;
