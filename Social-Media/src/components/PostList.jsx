import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/posts-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="posts-container">
      {postList.map((post) => (
        // post is a object inside array
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};
export default PostList;
