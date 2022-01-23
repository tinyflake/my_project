var express = require("express");
var multer = require("multer"); //处理图片
var api = require("../solving/api");
var router = express.Router();
var upload = multer({ dest: "./uploads/" }); // 文件储存路径
//修改用户信息
router.post("/updata", api.userUpdata);

//上传
router.post("/upload", upload.single("pic"), api.uploudPic);

//救助请求
router.post(
  "/requestAssistance",
  upload.array("photo", 3),
  api.requestAssistance
);
//访问图片
router.get("/image", function (req, res, next) {
  //建议使用绝对路径查找图片
  console.log(req.body.iconUrl);
  res.send({
    iconUrl: req.body.iconUrl,
  });
});

module.exports = router;
