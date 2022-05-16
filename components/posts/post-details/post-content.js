import classes from "./post-content.module.css";
import Image from "next/image";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('css', css);

function PostContent({ post }) {
    const { image, title, slug } = post;
    const imageSrc = `/images/posts/${slug}/${image}`;

    const customeRenders = {
        // img(image) {
        //   return (
        //     <Image
        //       src={`/images/posts/${slug}/${image.src}`}
        //       alt={image.alt}
        //       width={600}
        //       height={300}
        //     />
        //   );
        // },
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code(code) {
            const { className, children } = code;
            const language = className.split("-")[1];
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        },
    };

    return (
        <article className={classes.content}>
            <PostHeader image={imageSrc} title={title} />
            <ReactMarkdown components={customeRenders}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}
export default PostContent;
