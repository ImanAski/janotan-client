import axios from "axios";

export async function getCourses() {
  const { data } = await axios.get("example");
  return data;
}
