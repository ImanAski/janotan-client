import axios from "axios";

export async function getAcademyBooks() {
  const { data } = await axios.get("example");
  return data;
}
