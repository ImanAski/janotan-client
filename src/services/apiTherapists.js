import axios from "axios";

export async function getTherapists() {
  const { data } = await axios.get("example");
  return data;
}
