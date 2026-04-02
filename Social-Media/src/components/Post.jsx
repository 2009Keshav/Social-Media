const Post = (props) => {
  return (
    // always give style as prop, as an object in JSX code
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text">{props.post.body}</p>
        <button type="button" class="btn btn-primary btn-lg">
          Likes
        </button>
      </div>
    </div>
  );
};

export default Post;
