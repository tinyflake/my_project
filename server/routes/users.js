var express = require("express");
var router = express.Router();

var user = require("../solving/user");
var db = require("../config/db"); //引入数据库封装模块

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
module.exports = router;
