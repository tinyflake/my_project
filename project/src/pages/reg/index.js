import { Form, Input, Button, Checkbox, message } from "antd";
import styles from "./index.less";
import React from "react";
import { connect } from "dva";
class Reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, timer: null };
  }
  componentDidMount() {
    clearTimeout(this.state.timer);
  }
  render() {
    const turnToLogin = () => {
      console.log("进入登录");
      this.props.dispatch({
        type: "index/changeSetShowReg",
        payload: { showReg: false },
      });
      this.props.dispatch({
        type: "index/changeSetShowLogin",
        payload: { showLogin: true },
      });
    };
    const onFinish = (values) => {
      if (this.state.checked) {
        this.props.dispatch({
          type: "index/requestReg",
          payload: {
            username: values.username,
            password: values.password,
            telphone: values.telphone,
            nickname: values.nickname,
          },
          callback: () => {
            this.props.handleCancel(values.username, values.nickname);
            message.success("注册成功！,5秒后重新进入页面！");
            this.setState({
              timer: setTimeout(() => {
                window.location.reload();
              }, 5000),
            });
          },
        });
      } else {
        message.warn("请先阅读用户协议");
      }
    };
    const checkboxOnchange = (e) => {
      this.setState({
        checked: e.target.checked,
      });
    };
    const { checked } = this.state;
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "请输入用户名!" },
            {
              pattern: /^.{2,32}$/,
              message: "用户名要求长度在2-32字节",
            },
          ]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input placeholder="请输入昵称" />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="telphone"
          rules={[
            { required: true, message: "请输入手机号!" },
            {
              pattern: /^.{11,11}$/,
              message: "请检查手机号码长度是否正确",
            },
          ]}
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "密码必填，且长度应在6到32个字符之间!",
              min: 6,
              max: 32,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="重复密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              min: 6,
              max: 32,
              message: "请重复输入密码！",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次密码输入不一致！"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className={styles.centerItem}>
          已有帐号，
          <a onClick={turnToLogin}>点击登录</a>
        </Form.Item>
        <Form.Item className={styles.centerItem}>
          <Button style={{ width: 250 }} type="primary" htmlType="submit" block>
            立即注册
          </Button>
        </Form.Item>
        <Form.Item
          name="checked"
          valuePropName="checked"
          className={styles.centerItem}
        >
          <Checkbox
            style={{ color: "#CCCCCC" }}
            checked={checked}
            onChange={checkboxOnchange}
          >
            我已阅读并同意
          </Checkbox>
          《<a>用户服务协议</a>》
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(Reg);
