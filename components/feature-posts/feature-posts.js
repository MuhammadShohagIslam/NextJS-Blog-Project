import PostList from "../posts/post-list";
import classes from "./feature-posts.module.css";

function FeaturePosts({ posts }) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostList posts={posts} />
        </section>
    );
}

export default FeaturePosts;
