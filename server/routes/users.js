var express = require("express");
var router = express.Router();
var user = require("../solving/user");

// 注册
router.post("/register", user.userReg);
//登录
router.post("/login", user.userLogin);

// test
router.get("/test", function (req, res, next) {
  res.send({ message: "成功", data: {}, code: 200 }); //响应结果
});
//查询流浪动物
router.get("/getAnimalList", user.getAnimalList);

router.post("/yeyeye", function (req, res, next) {
  // res.render("index", { title: "Express" });render是渲染模板引擎
  res.send({ message: "", data: {}, target: "ok", code: 200 }); //响应结果
});
module.exports = router;
