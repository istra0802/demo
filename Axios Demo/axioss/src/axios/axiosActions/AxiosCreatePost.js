import baseURL from "../axiosApi/AxiosApi";
import axios from "axios";

export default function createPost() {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL, {
        title: "Posted details",
        body: "i am isha",
        userId: 25,
      })
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        reject(error);
      });
  });
}
