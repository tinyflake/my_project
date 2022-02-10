var db = require("../config/db"); //引入数据库封装模块

const jwt = require("jsonwebtoken");
const secretkey = "tinyflake"; //私钥

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
var getAnimalList = (req, res, next) => {
  console.log("查询动物列表", "页码", req.query.pageNo, "类型", req.query.type);
  try {
    db.query(
      `SELECT *
  FROM tb_user join tb_forhelp 
  ON tb_user.username=tb_forhelp.username `,
      [],
      function (result, err) {
        if (req.query.type !== "all")
          switch (req.query.type) {
            case "cat":
              result = result.filter((item) => {
                return item.waiting_type_animal === "cat";
              });
              break;
            case "dog":
              result = result.filter((item) => {
                return item.waiting_type_animal === "dog";
              });
              break;
            case "other":
              result = result.filter((item) => {
                return item.waiting_type_animal === "other";
              });
              break;
            default:
              break;
          }
        const len = result.length;
        result = result.filter((item, index) => {
          if (
            index >= 5 * Number(req.query.pageNo) - 5 &&
            index < 5 * Number(req.query.pageNo)
          ) {
            return item;
          }
        });
        res.send({
          code: 200,
          message: "查询成功",
          list: result,
          total: len,
          pageNo: req.body.pageNo,
        });
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
  // try {
  // 查询当前用户信息;
  //   db.query(`select * From tb_forhelp`, [], function (result, err) {
  //     if (req.query.type !== "all")
  //       switch (req.query.type) {
  //         case "cat":
  //           result = result.filter((item) => {
  //             return item.waiting_type_animal === "cat";
  //           });
  //           break;
  //         case "dog":
  //           result = result.filter((item) => {
  //             return item.waiting_type_animal === "dog";
  //           });
  //           break;
  //         case "other":
  //           result = result.filter((item) => {
  //             return item.waiting_type_animal === "other";
  //           });
  //           break;
  //         default:
  //           break;
  //       }
  //     const len = result.length;
  //     result = result.filter((item, index) => {
  //       if (
  //         index >= 5 * Number(req.query.pageNo) - 5 &&
  //         index < 5 * Number(req.query.pageNo)
  //       ) {
  //         return item;
  //       }
  //     });
  //     res.send({
  //       code: 200,
  //       message: "查询成功",
  //       list: result,
  //       total: len,
  //       pageNo: req.body.pageNo,
  //     });
  //   });
  // } catch (error) {
  //   res.send({
  //     code: -200,
  //     message: error,
  //   });
  // }
};
module.exports = { userLogin, userReg, getAnimalList };
