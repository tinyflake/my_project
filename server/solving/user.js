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
          console.log("登录成功");
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
          console.log("登录失败");
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
  console.log("进入注册");
  const nickname = req.body.nickname ? req.body.nickname : "";
  const addNewData = () => {
    console.log("注册");
    db.query(
      `INSERT INTO tb_user (username, nickname,password, telphone,icon) VALUES ('${req.body.username}','${nickname}', '${req.body.password}', '${req.body.telphone}','/moren.png')`,
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
        console.log("查询用户是否存在", results);
        if (results.length !== 0) {
          res.send({
            code: 400,
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
  const pageNo = req.body.pageNo;

  try {
    db.query(
      `SELECT *
  FROM tb_user join tb_forhelp 
  ON tb_user.username=tb_forhelp.username `,
      [],
      async function (result, err) {
        if (req.query.type !== "all")
          switch (req.query.type) {
            case "cat":
              if (result && result.length > 0)
                result = result.filter((item) => {
                  return item.waiting_type_animal === "cat";
                });
              else {
                result = [];
              }
              break;
            case "dog":
              if (result && result.length > 0)
                result = result.filter((item) => {
                  return item.waiting_type_animal === "dog";
                });
              else {
                result = [];
              }
              break;
            case "other":
              if (result && result.length > 0)
                result = result.filter((item) => {
                  return item.waiting_type_animal === "other";
                });
              else {
                result = [];
              }
              break;
            default:
              break;
          }
        const len = result.length;
        if (len !== 0) {
          result = result.filter((item, index) => {
            if (
              index >= 5 * Number(req.query.pageNo) - 5 &&
              index < 5 * Number(req.query.pageNo)
            ) {
              return item;
            }
          });
          //方法一：
          // let finshedCount = 0;
          // result.forEach((item) => {
          //   db.query(
          //     `SELECT * FROM tb_comments where id='${item.id}'`,
          //     [],
          //     function (id_res, err) {
          //       item.message = id_res.length;
          //       finshedCount++;
          //       if (finshedCount === result.length)
          //         res.send({
          //           code: 200,
          //           message: "查询成功",
          //           list: result,
          //           total: len,
          //           pageNo,
          //         });
          //     }
          //   );
          // });
          //方法二：
          const ids = [];
          const objs = {};
          result.forEach((item) => {
            ids.push(item.id);
            objs[item.id] = item;
          });
          const resultForids = result;
          db.query(
            `select t.* from tb_comments t where t.id in (${ids.join(",")})`,
            [],
            function (result, err) {
              result.forEach((item) => {
                objs[item.id].message++;
              });
              res.send({
                code: 200,
                message: "查询成功",
                list: resultForids,
                total: len,
                pageNo,
              });
            }
          );
        } else {
          res.send({
            code: 200,
            result: [],
          });
        }
      }
    );
  } catch (error) {
    res.send({
      code: -200,
      message: error,
    });
  }
};
module.exports = { userLogin, userReg, getAnimalList };
