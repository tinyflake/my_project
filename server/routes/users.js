var express = require("express");
var router = express.Router();

var user = require("../solving/user");
var db = require("../config/db"); //引入数据库封装模块

// 注册
router.post("/register", user.userReg);
//登录
router.post("/login", user.userLogin);

// test
router.post("/test", function (req, res, next) {
  console.log(req.query, req.body);
  if (JSON.stringify(req.query) == "{}") console.log("query参数是空对象");
  res.send({ message: "成功", data: {}, code: 200 }); //响应结果
});

module.exports = router;
