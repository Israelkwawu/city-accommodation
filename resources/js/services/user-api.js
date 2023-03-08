import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.MIX_VUE_APP_URL + "/api",
  // withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// customAxios.interceptors.response.use(response => {
//       console.log('intercet res', response);
//     }, error => {
//       console.log('intercept error', error.response);
//     }
// );

export default () => {
    return customAxios;
}