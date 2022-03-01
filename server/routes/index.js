var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });render是渲染模板引擎
  res.send({ message: "", data: {}, code: 200 }); //响应结果
});

module.exports = router;
