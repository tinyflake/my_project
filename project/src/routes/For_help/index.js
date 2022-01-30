import React, { useEffect } from "react";
import { connect } from "dva";
import styles from "./index.less";
import axios from "axios";
import {
  Form,
  Input,
  message,
  Button,
  Select,
  DatePicker,
  ConfigProvider,
} from "antd";
import Loginandreg from "./../../components/loginandreg";
import Footer from "./../../components/footer/index";
import UploadPic from "./compoments/index";
import moment from "moment";
import zhCN from "antd/lib/locale/zh_CN";
import { getCookie } from "./../../utils/cookie";
import HeadTag from "./../../components/head-tag/index";
const baseUrl = "http://127.0.0.1:8888";
const token = getCookie("token");
const formRef = React.createRef();
function For_help(props) {
  useEffect(() => {
    if (!getCookie("username")) {
      props.history.push("/");
    }
  }, []);
  const onFinish = (values) => {
    values.datePicker = moment(values.datePicker).format("YYYY-MM-DD HH:mm:ss");
    values.nickname = props.nickname;
    const form = new FormData();
    Object.keys(values).forEach((item) => {
      form.append(item, values[item]);
    });
    props.fileList.forEach((item) => {
      form.append("photo", item.originFileObj);
    });
    axios.post(baseUrl + "/api/requestAssistance", form, {
      headers: {
        Authorization: token ? "Bearer " + token : "",
        // "Content-Type": "multipart/form-data",
      },
      timeout: 100000,
    });
  };
  const onFinishFailed = (errorInfo) => {
    return message.warn("请求失败!", errorInfo);
  };
  return (
    <>
      <div className={styles.base}>
        <HeadTag />
        <div className={styles.main}>
          <Form
            ref={formRef}
            className={styles.form}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className={styles.formItem}
              label="联系电话"
              name="telphone"
              rules={[{ required: true, message: "请提供联系电话!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="待救助地址"
              className={styles.formItem}
              name="addr"
              rules={[{ required: true, message: "请提供地址!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="待救助动物"
              className={styles.formItem}
              name="animalType"
              rules={[{ required: true, message: "请选择流浪动物!" }]}
            >
              <Select>
                <Select.Option value="dog">狗</Select.Option>
                <Select.Option value="cat">猫</Select.Option>
                <Select.Option value="other">其他</Select.Option>
              </Select>
            </Form.Item>
            <ConfigProvider locale={zhCN}>
              <Form.Item
                name="datePicker"
                label="何时遇见？"
                className={styles.formItem}
                rules={[{ required: true, message: "请选择遇到它的时间!" }]}
              >
                <DatePicker showTime />
              </Form.Item>
            </ConfigProvider>
            <Form.Item
              label="情况及备注"
              className={styles.formItem}
              name="remark"
              rules={[{ required: true, message: "请描述它目前的状况!" }]}
            >
              <div style={{ height: 100 }}>
                <Input.TextArea
                  style={{
                    maxHeight: 100,
                    minHeight: 100,
                    overflowY: "auto",
                  }}
                />
              </div>
            </Form.Item>
            <Form.Item
              label="上传图片"
              rules={[
                {
                  required: true,
                  message: "请务必上传图片!",
                },
              ]}
              className={styles.formItem}
            >
              <UploadPic />
            </Form.Item>
            <Form.Item className={styles.formItem}>
              <div style={{ width: "100%", textAlign: "center" }}>
                <Button type="primary" htmlType="submit" style={{ width: 150 }}>
                  发起救助
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        <Loginandreg />
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "For_help");
  return {
    fileList: state.index.fileList,
    nickname: state.index.nickname,
  };
};
export default connect(mapStateToProps)(For_help);
