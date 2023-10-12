import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getLibraryBg() {
  const { data } = await axios.get(`${BASE_URL}api/librarybg/1`);
  return data;
}
