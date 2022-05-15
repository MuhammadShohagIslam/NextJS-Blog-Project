import PostItem from "./post-item";
import classes from "./post-item.module.css";

function PostList({ posts }) {
    return (
        <ul className={classes.grid}>
            {posts &&
                posts.map((post) => <PostItem key={post.slug} post={post} />)}
        </ul>
    );
}

export default PostList;
