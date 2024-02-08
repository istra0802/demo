import baseURL from "../axiosApi/AxiosApi";
import axios from "axios";

export default function updatePost() {
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/3`, {
        title: "Isha updated",
        body: " i am Isha updated post again ",
        userId: 5,
      })
      .then((response) => {
        console.log(response, "came from response");
        resolve(response.data) // Update the post in the posts array
      })
      .catch((error) => {
        console.log(error, " not found ");
      });
  });
}
