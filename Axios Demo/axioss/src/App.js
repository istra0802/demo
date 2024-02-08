import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import baseURL from "./axios/axiosApi/AxiosApi";
import AxiosDeletePostFunction from "./axios/axiosFunction/AxiosDeletePostFunction";
import AxiosCreatePostFunction from "./axios/axiosFunction/AxiosCreatePostFunction";
import AxiosUpdatePostFunction from "./axios/axiosFunction/AxiosUpdatePostFunction";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}?userId=1`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handlePostUpdate = (newPost) => {
    setPosts(posts.map((post) => (post.id === 3 ? newPost : post)));
  };

  const handleDeletePost = (newPost) => {
    setPosts(posts.filter((post) => post.id !== 2));
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((details) => (
        <div key={details.id}>
          <hr></hr>
          <h3>id={details.id}</h3>
          <h5>userid= {details.userId}</h5>
          <h5>Title = {details.title}</h5>
          <h5>{details.body}</h5>
          <hr></hr>
        </div>
      ))}
      <AxiosCreatePostFunction onPostCreated={handlePostCreated} />
      <AxiosUpdatePostFunction onPostUpdate={handlePostUpdate} />
      <AxiosDeletePostFunction onPostDelete={handleDeletePost} />
    </div>
  );
}

export default App;
