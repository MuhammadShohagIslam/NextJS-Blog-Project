import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

function PostItem({ post }) {
    const { image, title, excerpt, slug, date } = post;
    const formattedTime = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const linkPath = `/posts/${slug}`;
    const imageSrc = `/images/posts/${slug}/${image}`;

    return (
        <li>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedTime}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default PostItem;
