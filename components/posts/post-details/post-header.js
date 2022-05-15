import Image from "next/image";
import classes from "./post-header.module.css";

function PostHeader({ image, title }) {
    return (
        <header className={classes.header}>
            <Image
                src={image}
                alt={title}
                width={200}
                height={150}
            />
            <h1>{title}</h1>
        </header>
    );
}
export default PostHeader;
