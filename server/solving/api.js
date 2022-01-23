var db = require("../config/db"); //引入数据库封装模块

var userUpdata = (req, res, next) => {
  try {
    // 查询当前用户信息;
    db.query(
      `select * From tb_user where username='${req.user.username}'`,
      [],
      function (result, err) {
        const nickname = req.body.nickname
          ? req.body.nickname
          : result[0].nickname;
        const password = req.body.newPassword
          ? req.body.newPassword
          : result[0].password;
        // 修改对应字段
        db.query(
          `update tb_user set nickname='${nickname}',password='${password}' where id=${result[0].id}`,
          [],
          function (result, err) {
            res.send({
              code: 200,
              message: "更新成功",
            });
          }
        );
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
};

var uploudPic = (req, res, next) => {
  try {
    // 查询当前用户信息;
    db.query(
      `select * From tb_user where username='${req.user.username}'`,
      [],
      function (result, err) {
        let file = req.file;
        var pic_url = __dirname + file.path;
        db.query(
          `INSERT INTO tb_user (username, password,waiting_picture ) VALUES ('${result[0].username}', '${result[0].password}', '${pic_url}')`,
          [],
          function (results, fields) {
            if (err) {
              console.log("保存到数据库失败！");
            } else {
              res.send({
                code: 200,
                message: "图片上传成功",
                urls: pic_url,
              });
            }
          }
        );
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
};
var requestAssistance = (req, res, next) => {
  try {
    //设置默认数据全0
    let pic0 = "0";
    let pic1 = "0";
    let pic2 = "0";
    //遍历收到的文件记录路径
    req.files.forEach((item, index) => {
      const pic = "pic" + index;
      switch (pic) {
        case "pic0":
          pic0 = __dirname + item.path;
          console.log(pic0, "0");
          break;
        case "pic1":
          pic1 = __dirname + item.path;
          console.log(pic1, "1");
          break;
        case "pic2":
          pic2 = __dirname + item.path;
          break;
        default:
          break;
      }
    });
    // 查询当前用户信息;
    db.query(
      `select * From tb_user where username='${req.user.username}'`,
      [],
      function (result, err) {
        //在求助表加入一条数据
        db.query(
          `INSERT INTO tb_forhelp (username, nickname,telphone, waiting_addr, waiting_type_animal, remark, waiting_time, pic0, pic1, pic2 ) VALUES ('${result[0].username}', '${req.body.nickname}', '${req.body.telphone}', '${req.body.addr}', '${req.body.animalType}', '${req.body.remark}', '${req.body.datePicker}','${pic0}','${pic1}','${pic2}')`,
          [],
          function (results, fields) {
            if (fields) {
              console.log("保存到数据库失败！");
            } else {
              res.send({
                code: 200,
                message: "成功",
              });
            }
          }
        );
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
};
module.exports = { userUpdata, uploudPic, requestAssistance };
