import updatePost from "../axiosActions/AxiosUpdatePost";

import React from 'react'

export default function AxiosUpdatePostFunction ({ onPostUpdate }) {
  const handleUpdatePost = () => {
    updatePost()
      .then((newPost) => {
        onPostUpdate(newPost);
      })
      .catch((error) => {
        console.error("Failed to update post:", error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
}
