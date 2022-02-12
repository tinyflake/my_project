import React, { useEffect, useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import Loginandreg from "../../components/loginandreg";
import Footer from "../../components/footer/index";
import HeadTag from "../../components/head-tag/index";
import { List, Avatar, Button, Radio, BackTop, ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import IconText from "./IconText";
import Detail from "./Detail";
import {
  MessageOutlined,
  StarTwoTone,
  LikeTwoTone,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { axiosGetBinaryImage } from "../../utils/http";
function To_help(props) {
  const [showDetail, setshowDetail] = useState(false);
  const [dataList, setdataList] = useState([]);
  const [detailItem, setdetailItem] = useState({});
  const [pageNo, setpageNo] = useState(1);
  const [animalType, setanimalType] = useState("all");
  const [showComments, setshowComments] = useState(false);
  useEffect(() => {
    getData();
  }, [pageNo, animalType]);
  const getData = async () => {
    const res = await props.dispatch({
      type: "index/getAnimalList",
      payload: {
        pageNo,
        type: animalType,
      },
    });
    for (let i = 0; i < res.length; i++) {
      res[i].pic0 = await axiosGetBinaryImage("/uploads/", res[i].pic0);
      if (res[i].pic1) {
        res[i].pic1 = await axiosGetBinaryImage("/uploads/", res[i].pic1);
      }
      if (res[i].pi2) {
        res[i].pic2 = await axiosGetBinaryImage("/uploads/", res[i].pic2);
      }
      res[i].chooseStar = false;
      res[i].chooseLike = false;
    }
    setdataList(res);
  };
  const options = [
    { label: "全部", value: "all" },
    { label: "猫猫", value: "cat" },
    { label: "狗狗", value: "dog" },
    { label: "其他", value: "other" },
  ];
  const onChangeType = (e) => {
    setanimalType(e.target.value);
    setpageNo(1);
  };
  const detailForHelp = (item) => {
    setdetailItem(item);
    setshowDetail(true);
  };
  return (
    <div className={styles.base}>
      <HeadTag />
      {!showDetail ? (
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
                  value={animalType}
                  optionType="button"
                />
              </span>
            </div>
            <ConfigProvider locale={zhCN}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  total: props.total,
                  onChange: (page) => {
                    setpageNo(page);
                  },
                  current: pageNo,
                  pageSize: 5,
                  hideOnSinglePage: true,
                  showQuickJumper: true,
                  showTotal: () => `总共 ${props.total} 条`,
                }}
                dataSource={dataList}
                renderItem={(item, index) => (
                  <List.Item
                    style={{ position: "relative", padding: 12 }}
                    key={item.id}
                    // actions={[
                    //   ,
                    // ]}
                    extra={
                      <button
                        onClick={() => detailForHelp(item)}
                        style={{
                          display: "block",
                          overflow: "hidden",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          className={styles.blowUp}
                          width={272}
                          alt="logo"
                          src={item.pic0}
                          style={{ width: 200 }}
                        />
                      </button>
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <div>
                          <Avatar
                            src={"http://127.0.0.1:8888/uploads/" + item.icon}
                          />
                          <span
                            className={styles.titleForHelp}
                            onClick={() => detailForHelp(item)}
                          >
                            {item.titleForHelp}
                          </span>
                        </div>
                      }
                      title={<a href={item.href}>{item.title}</a>}
                      description={
                        <div>
                          <span className={styles.time}>
                            时间：{item.waiting_time}
                          </span>
                          <div>{item.description}</div>
                        </div>
                      }
                    />
                    <p
                      style={{
                        textIndent: "2em",
                        wordBreak: "break-all",
                        overflow: "hidden",
                        margin: "3px 0 50px",
                      }}
                    >
                      {item.remark}
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1em",
                        justifyContent: "space-around",
                        display: "flex",
                        width: 360,
                      }}
                    >
                      <IconText
                        item={item}
                        index={item.id}
                        icon={
                          !item.chooseStar ? (
                            <StarTwoTone twoToneColor="#aaa" />
                          ) : (
                            <StarTwoTone twoToneColor="#ffa500" />
                          )
                        }
                        text={item.stars}
                        iconId="listStar"
                        key="listStar"
                      />
                      <IconText
                        item={item}
                        index={item.id}
                        icon={
                          !item.chooseLike ? (
                            <LikeTwoTone twoToneColor="#aaa" />
                          ) : (
                            <LikeTwoTone twoToneColor="#67c6ea" />
                          )
                        }
                        text={item.likes}
                        iconId="listLike"
                        key="listLike"
                      />
                      <IconText
                        item={item}
                        index={item.id}
                        icon={<MessageOutlined />}
                        text={item.message}
                        setshowComments={setshowComments}
                        detailForHelp={() => detailForHelp(item)}
                        iconId="listMessage"
                        key="listMessage"
                      />
                      <Button
                        className={styles.help}
                        onClick={() => detailForHelp(item)}
                      >
                        救助！
                      </Button>
                    </div>
                  </List.Item>
                )}
              />
            </ConfigProvider>
          </div>
        </div>
      ) : (
        <Detail
          detailItem={detailItem}
          setshowDetail={setshowDetail}
          setshowComments={setshowComments}
          detailForHelp={detailForHelp}
          showComments={showComments}
        />
      )}
      <BackTop>
        <div className={styles.backTop}>
          <VerticalAlignTopOutlined />
        </div>
      </BackTop>
      <Loginandreg />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "To_help");
  return {
    animalList: state.index.animalList,
    total: state.index.total,
  };
};
export default connect(mapStateToProps)(To_help);
