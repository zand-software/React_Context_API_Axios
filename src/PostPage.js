import { React, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // useParams is a custom hook that comes with react router dom - we use the useParams to get the parameter
import api from "./api/axios";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`); // added for axios - //we use "api.delete" to delete the data from API via axios.
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/posts");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && ( //&& means ok (two ampersands) - we have a post (post is true - if it exists) then we're going to display this
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/editpost/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && ( // if post is not true essentially with the exclamation mark here it does not exist but we've somehow got to this page;
          // we're using Link to provide a link back to the homepage if it doesn't exist
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
      {/* <h1>PostPage</h1> */}
    </main>
  );
};

export default PostPage;
