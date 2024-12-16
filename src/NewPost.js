import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/axios";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postId = posts[posts.length - 1].id;
    const id = posts.length ? String(Number(postId) + 1) : "1";
    const datetime = format(new Date(), "MMMM, dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody }; // a new post object - we are in the mode of creating objects and our posts need to be inside of an array
    try {
      const response = await api.post("/posts", newPost); //we use "api.post" to get data here from API via axios.
      const allPosts = [...posts, response.data]; // must be inside of an array
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/posts");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <>
        <h3>New Post</h3>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <lable htmlFor="postTitle">Title:</lable>
          <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <lable htmlFor="postBody">Post:</lable>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            style={{ height: "180px", width: "100%" }}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    </main>
  );
};

export default NewPost;
