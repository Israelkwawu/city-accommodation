import axios from "axios";

export default () => {
    return axios.create({
      baseURL: process.env.MIX_VUE_APP_URL + "/api",
      // withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
}