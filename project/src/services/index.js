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
export function getImage(payload) {
  return axiosGetImage(payload.iconUrl);
}

export function getAnimalList(data) {
  return get("/users/getAnimalList", data);
}
export function addAndLike(data) {
  return post("/api/addAndLike", data);
}
export function getComment(data) {
  return get("/api/getComment", data);
}
export function delComment(data) {
  return get("/api/delComment", data);
}

export function addComment(data) {
  return post("/api/addComment", data);
}
