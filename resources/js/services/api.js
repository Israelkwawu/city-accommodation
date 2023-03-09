import axios from "axios";
// import Cookies from "js-cookie";
import store from "../store/index";

export default () => {
    const authToken = store.getters['authentication/getAuthToken'];
    return axios.create({
      baseURL: process.env.MIX_VUE_APP_URL +  "/api",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken ? `Bearer ${authToken}` : null,
      },
    });
}