import { getCookie } from "./../utils/cookie";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8888";

export async function post(url, data) {
  const token = getCookie("token");
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
  const token = getCookie("token");
  try {
    const response = await axios.get(baseUrl + url, {
      params: data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function axiosGetImage(data) {
  const token = getCookie("token");
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
  const token = getCookie("token");
  console.log("url", baseUrl + url + data, token);
  try {
    const response = await axios.get(baseUrl + url + data, {
      params: {},
      responseType: "arraybuffer",
    });
    function arrayBufferToBase64(buffer) {
      let binary = "";
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return `data:image/png;base64,${window.btoa(binary)}`;
    }
    return arrayBufferToBase64(response.data);
  } catch (error) {
    console.log(error);
  }
}
