import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/posts-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        // post is a object inside array
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
