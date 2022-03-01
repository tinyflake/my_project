import React, { useEffect, useState } from "react";
import { connect } from "dva";
import { Form, Input, Button, Modal, Spin } from "antd";
import { delCookie, getCookie } from "../../utils/cookie";
import IconUpload from "./iconUpload";
function UserSetting(props) {
  const [timerID, setTimerID] = useState(null);
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const username = getCookie("username");
  useEffect(() => {
    if (counter > 0 && modal) {
      let timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      setTimerID(timer);
    }
    if (counter === 0 && modal) {
      delCookie("username");
      delCookie("token");
      setModal(false);
      clearTimeout(timerID);
      setTimerID(null);
      window.location.reload();
    }
  }, [counter]);
  const onFinish = (values) => {
    //请求修改用户信息
    props.dispatch({
      type: "index/userUpdata",
      payload: {
        ...values,
        username: username,
        nickname: values.nickname,
      },
      callback: () => {
        props.onCancel();
        setModal(true);
        setCounter(5);
      },
    });
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 19 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="昵称"
        name="nickname"
        rules={[{ required: true, message: "请输入昵称!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>形象设置：</div>
          <div>
            <IconUpload />
          </div>
        </div>
      </Form.Item>
      <Form.Item
        label="原密码"
        name="password"
        rules={[{ required: true, message: "请输入原密码!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="newPassword"
        label="新密码"
        rules={[
          {
            required: true,
            message: "输入新密码，切长度应不少于6个字符切不超过32个字符!",
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
        label="重复新密码"
        dependencies={["newPassword"]}
        hasFeedback
        rules={[
          {
            required: true,
            min: 6,
            max: 32,
            message: "",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次密码输入不一致！"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button style={{ width: 150 }} type="primary" htmlType="submit" block>
          保存修改
        </Button>
      </Form.Item>
      <Modal
        visible={modal}
        footer={null}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin tip={`修改成功，${counter}秒后自动退出登录!`}></Spin>
      </Modal>
    </Form>
  );
}
const mapStateToProps = (state) => {
  return {
    nickname: state.index.nickname,
  };
};
export default connect(mapStateToProps)(UserSetting);
