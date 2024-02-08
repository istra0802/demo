import baseURL from "../axiosApi/AxiosApi";
import axios from "axios";

function deletePost() {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/2`)
      .then((response) => {
        resolve(response.data);
        alert("Post deleted successfully");
      })
      .catch((error) => {
        console.log(error, "i m error");
      });
  });
}
export default deletePost;
