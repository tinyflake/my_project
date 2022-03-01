var db = require("../config/db"); //引入数据库封装模块

var userUpdata = (req, res, next) => {
  console.log("更新用户数据");
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
var fs = require("fs");
const moment = require("moment");
var uploudPic = (req, res, next) => {
  try {
    // 查询当前用户信息;
    db.query(
      `select * From tb_user where username='${req.user.username}'`,
      [],
      function (result, err) {
        // if (result[0].icon !== "moren.png")
        //   fs.unlink("./public/uploads/" + result[0].icon, function (error) {
        //     if (error) {
        //       console.log(error);
        //       return false;
        //     }
        //     console.log("删除文件成功");
        //   });
        db.query(
          `update tb_user set icon='${req.file.filename}' where id=${result[0].id}`,
          [],
          function (results, fields) {
            if (fields) {
              console.log("保存到数据库失败！");
            } else {
              res.send({
                code: 200,
                message: "图片上传成功",
                urls: req.file.filename,
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
    let pic0 = "";
    let pic1 = "";
    let pic2 = "";
    //遍历收到的文件记录路径
    console.log("图片列表：", req.files);
    req.files.forEach((item, index) => {
      item.path = item.path.replace("public\\uploads\\", "");
      const pic = "pic" + index;
      switch (pic) {
        case "pic0":
          pic0 = item.path;
          break;
        case "pic1":
          pic1 = item.path;
          break;
        case "pic2":
          pic2 = item.path;
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
          `INSERT INTO tb_forhelp (titleForHelp ,username, nickname,telphone, waiting_addr, waiting_type_animal, remark, waiting_time, pic0, pic1, pic2 ) VALUES ('${req.body.titleForHelp}', '${result[0].username}', '${req.body.nickname}', '${req.body.telphone}', '${req.body.addr}', '${req.body.animalType}', '${req.body.remark}', '${req.body.datePicker}','${pic0}','${pic1}','${pic2}')`,
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
var addAndLike = (req, res, next) => {
  try {
    db.query(
      `select * From tb_forhelp where id='${req.body.id}'`,
      [],
      function (result, err) {
        const stars = Number(req.body.stars) + Number(result[0].stars);
        const likes = Number(req.body.likes) + Number(result[0].likes);
        db.query(
          `update tb_forhelp set stars=${stars} ,likes=${likes}   where id=${req.body.id}`,
          [],
          function (result, err) {
            db.query(
              `select * From tb_forhelp where id='${req.body.id}'`,
              [],
              function (result, err) {
                res.send({
                  code: 200,
                  message: "收藏点赞成功",
                  result,
                });
              }
            );
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
var addComment = (req, res, next) => {
  console.log(req.user.username, "addComment");
  // 先去用户表查询到评论人的头像
  try {
    db.query(
      `select * from tb_user where username='${req.user.username}'`,
      [],
      function (results, fields) {
        debugger;
        db.query(
          `INSERT INTO tb_comments (id, comment, create_time,observer,avator) VALUES ('${req.body.id}', '${req.body.comment}', '${req.body.create_time}','${req.body.observer}','/${results[0].icon}')`,
          [],
          function (results, fields) {
            res.send({
              code: 200,
              message: "评论成功！",
            });
          }
        );
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: "评论失败！",
    });
  }
};
var getComment = (req, res, next) => {
  db.query(
    `select * from tb_comments where id='${req.query.id}'`,
    [],
    function (results, fields) {
      // console.log(moment(results[0].create_time).format("YYYY-MM-DD HH:mm:ss"));
      res.send({
        code: 200,
        list: results,
        message: "获取成功！",
      });
    }
  );
};
var delComment = (req, res, next) => {
  try {
    db.query(
      `DELETE FROM tb_comments WHERE indexofcomment="${req.query.indexofcomment}"`,
      [],
      function (results, fields) {
        res.send({
          code: 200,
          message: "删除成功！",
        });
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
};
module.exports = {
  userUpdata,
  uploudPic,
  requestAssistance,
  addAndLike,
  addComment,
  getComment,
  delComment,
};
