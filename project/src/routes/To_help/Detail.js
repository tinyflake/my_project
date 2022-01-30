import React from "react";
import { PageHeader, Card } from "antd";
import styles from "./index.less";
import IconText from "./IconText";
import {
  MessageOutlined,
  LikeOutlined,
  LikeFilled,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
export default function Detail(props) {
  const { detailItem, setshowDetail } = props;
  return (
    <>
      <div className={styles.detail}>
        <PageHeader
          className={styles.site_page_header}
          onBack={() => setshowDetail(false)}
          title="这里是标题"
          // subTitle="This is a subtitle"
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
                    </div>
                    <div className={styles.icons}>
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        icon={
                          !detailItem.chooseStar ? StarOutlined : StarFilled
                        }
                        iconId="detailStar"
                        text={detailItem.star}
                      />
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        iconId="detailLike"
                        icon={
                          !detailItem.chooseLike ? LikeOutlined : LikeFilled
                        }
                        text={detailItem.like}
                      />
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        iconId="detailMessage"
                        icon={MessageOutlined}
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
}
