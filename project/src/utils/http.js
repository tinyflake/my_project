import { getCookie } from "./../utils/cookie";
import axios from "axios";
const token = getCookie("token");
const baseUrl = "http://127.0.0.1:8888";
export async function post(url, data) {
  return axios
    .post(baseUrl + url, data, {
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export async function get(url, data) {
  return axios
    .get(baseUrl + url, {
      params: data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export async function axiosGetImage(url, data) {
  return axios
    .get(baseUrl + url + data.iconUrl, {
      params: {},
      responseType: "arraybuffer",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    })
    .then((response) => {
      return (
        "data:image/png;base64," +
        btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}
