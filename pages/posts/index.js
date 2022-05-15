import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from './../../lib/posts_util';

function AllPostsPage({posts}) {
    return <AllPosts posts={posts} />;
}

export async function getStaticProps(){
    const posts = getAllPosts();
    return{
        props:{
            posts
        }
    }
}
export default AllPostsPage;
