import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListreducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListreducer,
    DEFAULT_POST_LIST,
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostListData.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friend i am going to mumbai. Enjoying vacation.Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "",
    tags: ["Mumbai", "Vacation", "Enjoing"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal ki masti ke baad bhi ho gye pass.",
    reactions: 15,
    userId: "",
    tags: ["Graduating", "Unbeliveable", "Enjoing"],
  },
];

export default PostListProvider;
