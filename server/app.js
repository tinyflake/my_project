//入口文件
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");

var expressJWT = require("express-jwt");
var cors = require("cors");
const { UnauthorizedError } = require("express-jwt/lib");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views")); //获取view文件夹的绝对路径
app.set("view engine", "jade"); //设置模板引擎格式
const secretkey = "tinyflake"; //私钥
app.use(express.static(path.join(__dirname, "public"))); //设置静态资源路径
app.use(
  expressJWT({ secret: secretkey, algorithms: ["HS256"] }).unless({
    path: [/^\/users\//], // /users需要验证
  })
); //私钥解密，排除不需要权限访问的接口
app.use(logger("dev")); //启用日志
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //设置cookie解析
//路由ajax的一级路径配置
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler  错误处理
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.send({
      message: "token已过期",
      code: 400,
    });
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = 8888;
// const port = 7888;
app.listen(port, () => {
  console.log("服务器启动在'" + port + "'端口上！");
});

// module.exports = app;
