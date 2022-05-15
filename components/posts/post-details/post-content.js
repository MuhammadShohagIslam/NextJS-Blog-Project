import classes from "./post-content.module.css";
import PostHeader from "./post-header";

function PostContent({ post }) {
    const { image, title, slug } = post;
    const imageSrc = `/images/posts/${slug}/${image}`;

    return (
        <article className={classes.content}>
            <PostHeader image={imageSrc} title={title} />
        </article>
    );
}
export default PostContent;
