import request from "../utils/request";
import { get, post, axiosGetImage } from "../utils/http";
export function requestLogin(data) {
  return request("/users/login", {
    method: "post",
    body: data,
  });
}
export function requestReg(data) {
  return request("/users/register", {
    method: "post",
    body: data,
  });
}
export function userUpdata(data) {
  return post("/api/updata", data);
}

export function requestAssistance(data) {
  return post("/api/requestAssistance", data);
}
export function getImage(data) {
  return axiosGetImage("/images", data);
}
