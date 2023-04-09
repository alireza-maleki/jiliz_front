import { Fragment } from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = ({ allPost }) => {
    return (
        <ul className="mt-5">

            {
                allPost.map(post => <PostItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />)
            }

        </ul>
    )
}

export default PostList