import React from "react";
import { PageHeader, Card } from "antd";
import styles from "./index.less";
import IconText from "./IconText";
import { MessageOutlined, StarTwoTone, LikeTwoTone } from "@ant-design/icons";
import { connect } from "dva";
const Detail = (props) => {
  const { detailItem, setshowDetail } = props;
  return (
    <>
      <div className={styles.detail}>
        <PageHeader
          className={styles.site_page_header}
          onBack={() => setshowDetail(false)}
          title={detailItem.titleForHelp}
        >
          <div className={styles.detailItem}>
            <div>
              <Card bordered={false}>
                <div className={styles.itemCard}>
                  <div>
                    <div>
                      <img src={detailItem.userSrc} alt="" />
                    </div>
                    <div style={{ marginLeft: "15px", marginBottom: 30 }}>
                      <p
                        style={{
                          textIndent: "2em",
                          wordBreak: "break-all",
                          overflow: "hidden",
                        }}
                      >
                        {detailItem.remark}
                      </p>
                      <span className={styles.time}>
                        时间：{detailItem.waiting_time}
                      </span>
                    </div>
                    <div className={styles.icons}>
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        icon={
                          !detailItem.chooseStar ? (
                            <StarTwoTone twoToneColor="#aaa" />
                          ) : (
                            <StarTwoTone twoToneColor="#ffa500" />
                          )
                        }
                        iconId="listStar"
                        text={detailItem.stars}
                      />
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        iconId="listLike"
                        icon={
                          !detailItem.chooseLike ? (
                            <LikeTwoTone twoToneColor="#aaa" />
                          ) : (
                            <LikeTwoTone twoToneColor="#67c6ea" />
                          )
                        }
                        text={detailItem.likes}
                      />
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        iconId="listMessage"
                        icon={<MessageOutlined />}
                        text={detailItem.message}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div style={{ maxWidth: "300px" }}>
              <Card
                title={
                  <div style={{ textAlign: "center" }}>
                    <img
                      src=""
                      className={styles.loginLogo}
                      alt="请先登录，参与动物救助！"
                    />
                    <p className={styles.item_p}>欢迎来到XX流浪动物救助平台</p>
                  </div>
                }
              >
                <div className={styles.itemLogin}>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "index/changeSetShowLogin",
                        payload: { showLogin: true },
                      });
                    }}
                  >
                    登录
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "index/changeSetShowReg",
                        payload: { showReg: true },
                      });
                    }}
                  >
                    注册
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </PageHeader>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "Detail");
  return {};
};
export default connect(mapStateToProps)(Detail);
