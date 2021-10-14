import axios from "axios";
import { alert } from "./alerts";

const request = async (path: string) => {
  try {
    const url = `${process.env.REACT_APP_API}${path}`
    let res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    alert("Error", error?.message || 'Something went wrong!', "error");
  }
};

export default request;
