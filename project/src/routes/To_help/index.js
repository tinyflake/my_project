import React, { useEffect, useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { getCookie } from "../../utils/cookie";
import Loginandreg from "./../../components/loginandreg";
import Footer from "./../../components/footer/index";
import HeadTag from "./../../components/head-tag/index";
import { List, Avatar, Space, Button, Radio } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Avator from "./avator.png";
function To_help(props) {
  const [type, setType] = useState("all");
  useEffect(() => {
    if (!getCookie("username")) {
      props.history.push("/");
    }
  }, []);
  const IconText = ({ icon, text }) => (
    <Space
      onClick={(e) => {
        console.log(e, "111");
      }}
    >
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const listData = [
    {
      href: "https://ant.design",
      title: `名称A`,
      avatar: Avator,
      description: "2021-10-22",
      content: "这里是一段描述",
      src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      star: 333,
      like: 0,
      message: 3,
    },
    {
      href: "https://ant.design",
      title: `名称A`,
      avatar: Avator,
      description: "2021-10-22",
      content: "这里是一段描述",
      src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      star: 222,
      like: 5,
      message: 3,
    },
    {
      href: "https://ant.design",
      title: `名称A`,
      avatar: Avator,
      description: "2021-10-22",
      content: "这里是一段描述",
      src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      star: 111,
      like: 1,
      message: 3,
    },
    {
      href: "https://ant.design",
      title: `名称A`,
      avatar: Avator,
      description: "2021-10-22",
      content: "这里是一段描述",
      src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      star: 444,
      like: 1,
      message: 3,
    },
  ];
  const options = [
    { label: "全部", value: "all" },
    { label: "猫猫", value: "cats" },
    { label: "狗狗", value: "dogs" },
  ];
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  return (
    <div className={styles.base}>
      <HeadTag />
      <div className={styles.main}>
        <div>
          <div className={styles.title}>
            <span>
              <h2>我来帮助它</h2>
            </span>
            <span>
              分类：
              <Radio.Group
                options={options}
                onChange={onChangeType}
                value={type}
                optionType="button"
              />
            </span>
          </div>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            // footer={
            //   <div>
            //     <b>ant design</b> footer part
            //   </div>
            // }
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text={item.star}
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text={item.like}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text={item.message}
                    key="list-vertical-message"
                  />,
                  <Button className={styles.help}>救助！</Button>,
                ]}
                extra={<img width={272} alt="logo" src={item.src} />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </div>
      <Loginandreg />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "To_help");
  return {};
};
export default connect(mapStateToProps)(To_help);
