import { getCookie } from "./../utils/cookie";
import axios from "axios";
const token = getCookie("token");
const baseUrl = "http://127.0.0.1:8888";
export async function post(url, data) {
  try {
    const response = await axios.post(baseUrl + url, data, {
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export async function get(url, data) {
  try {
    const response = await axios.get(baseUrl + url, {
      params: data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function axiosGetImage(data) {
  console.log("url", baseUrl + data, token);
  return axios
    .get(baseUrl + data, {
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
export async function axiosGetBinaryImage(url, data) {
  console.log("url", baseUrl + url + data, token);
  try {
    const response = await axios.get(baseUrl + url + data, {
      params: {},
      responseType: "arraybuffer",
    });
    const arrayBufferToBase64Img = (buffer) => {
      const str = String.fromCharCode(...new Uint8Array(buffer));
      return `data:image/png;base64,${window.btoa(str)}`;
    };
    return arrayBufferToBase64Img(response.data);
  } catch (error) {
    console.log(error);
  }
}
