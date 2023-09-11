import axios from "axios";

export async function getMainPageData() {
  const { data } = await axios.get("example");
  return data;
}
