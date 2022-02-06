import React, { Component } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Input, Checkbox, Form, Button, message } from "antd";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      checked: false,
    };
  }
  // componentDidMount() {
  //   console.log("11");
  //   console.log(getCookie("username"), getCookie("password"));
  //   if (getCookie("username") && getCookie("password")) {
  //     const values = {
  //       username: getCookie("username"),
  //       password: getCookie("password"),
  //     };
  //     this.login(values);
  //   }
  // }
  setValue = (e) => {
    const target = e.target;
    switch (target.name) {
      case "username":
        this.setState({ username: target.value });
        break;
      case "password":
        this.setState({ password: target.value });
        break;
      default:
        break;
    }
  };
  turnToReg = () => {
    this.props.dispatch({
      type: "index/changeSetShowReg",
      payload: { showReg: true },
    });
    this.props.dispatch({
      type: "index/changeSetShowLogin",
      payload: { showLogin: false },
    });
  };

  render() {
    const onFinish = async (values) => {
      if (this.state.checked) {
        await this.props.dispatch({
          type: "index/requestLogin",
          payload: {
            username: values.username,
            password: values.password,
          },
          callback: () => {
            document.cookie = `username=${values.username}`;
            document.cookie = `password=${values.password}`;
            this.props.handleCancelLogin(values.username);
          },
        });
        console.log("登录成功");
        //登录成功后请求用户头像并转base64
        await this.props.dispatch({
          type: "index/getImage",
          payload: {
            // url: "/images",
            iconUrl: "/uploads/" + this.props.iconUrl,
          },
        });
      } else {
        return message.warn("请先阅读用户协议！");
      }
    };
    const onFinishFailed = (errorInfo) => {
      return message.warn("登录失败!", errorInfo);
    };
    const checkboxOnchange = (e) => {
      this.setState({
        checked: e.target.checked,
      });
    };
    const { checked } = this.state;
    return (
      <div className={styles.base}>
        <Form
          className={styles.form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox
              style={{ float: "left" }}
              checked={checked}
              onChange={checkboxOnchange}
            >
              同意用户协议
            </Checkbox>
            <Button
              style={{ float: "right" }}
              type="ghost"
              size="small"
              onClick={this.turnToReg}
            >
              注册
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: 150 }}>
                登录
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { iconUrl: state.index.iconUrl };
};
export default connect(mapStateToProps)(Login);
