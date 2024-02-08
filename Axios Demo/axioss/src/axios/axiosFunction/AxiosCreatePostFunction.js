import createPost from "../axiosActions/AxiosCreatePost";

export default function AxiosCreatePostFunction({ onPostCreated }) {
  const handleCreatePost = () => {
    createPost()
      .then((newPost) => {
        onPostCreated(newPost);
      })
      .catch((error) => {
        console.error("Failed to create post:", error);
      });
  };

  return (
    <div>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}
