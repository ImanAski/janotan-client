import axios from "axios";

export async function getLibraryBg() {
  const { data } = await axios.get("example");
  return data;
}
