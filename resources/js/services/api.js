import axios from "axios";
import Cookies from "js-cookie";

export default () => {
    const authToken = Cookies.get("authToken");
    return axios.create({
      baseURL: process.env.MIX_VUE_APP_URL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken ? `Bearer ${authToken}` : null,
      },
    });
}