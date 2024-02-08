import deletePost from "../axiosActions/AxiosDeletePost";

import React from "react";

export default function AxiosDeletePostFunction({ onPostDelete }) {
  const handleDeletePost = () => {
    deletePost()
      .then((newPost) => {
        onPostDelete(newPost);
      })
      .catch((error) => {
        console.error("Failed to create post:", error);
      });
  };

  return (
    <div>
      <button onClick={handleDeletePost}>Delete Post</button>
    </div>
  );
}
