var db = require("../config/db"); //引入数据库封装模块

const jwt = require("jsonwebtoken");
const secretkey = "tinyflake"; //私钥

const iconUrl = "/image/moren.png";
//登录验证
var userLogin = (req, res) => {
  //接收数据 req.body----post   req.query----get
  console.log("登录判断");
  const data = req.body;
  try {
    db.query(
      "SELECT DISTINCT username,password,nickname,icon FROM tb_user",
      [],
      function (results, fields) {
        const target = results.find((item) => {
          return (
            data.username === item.username && data.password === item.password
          );
        });
        if (target) {
          const token = jwt.sign({ username: target.username }, secretkey, {
            expiresIn: "2 days",
          });
          // console.log(token);
          console.log(iconUrl);
          res.send({
            message: "登录成功",
            data: { ...target },
            code: 200,
            token,
          });
        } else {
          res.send({ message: "登录失败", data: {}, code: 0 }); //响应结果
        }
      }
    );
  } catch (error) {
    res.send({
      message: "服务器内部错误！",
      code: -200,
    });
  }
};
var userReg = (req, res, next) => {
  const addNewData = () => {
    db.query(
      `INSERT INTO tb_user (username, password, telphone,icon) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.telphone}','/moren.png')`,
      [],
      function (results, fields) {
        res.send({
          code: 200,
          message: "注册成功！",
        });
      }
    );
  };
  try {
    db.query(
      `select * From tb_user where username='${req.body.username}'`,
      [],
      function (results, fields) {
        if (results.length !== 0) {
          res.send({
            code: 200,
            message: "注册失败，该用户名已存在！",
          });
        } else {
          addNewData();
        }
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: "服务器内部错误！",
    });
  }
};

module.exports = { userLogin, userReg };
