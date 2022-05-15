import classes from "./post-content.module.css";
import PostHeader from "./post-header";

function PostContent() {
    return (
        <article className={classes.content}>
            <PostHeader />
        </article>
    );
}
export default PostContent;
