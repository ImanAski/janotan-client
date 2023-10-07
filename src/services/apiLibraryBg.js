import axios from "axios";

export async function getLibraryBg() {
  const { data } = await axios.get("http://62.60.131.191/api/librarybg/1");
  return data;
}
