import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getCourses() {
  const { data } = await axios.get(`${BASE_URL}api/courses`);
  return data;
}

export async function getCourse(id) {
  const { data } = await axios
    .get(`${BASE_URL}api/courses/${id}`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return data;
}
