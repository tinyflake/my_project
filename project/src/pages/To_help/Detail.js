import React from "react";
import { PageHeader, Card, Carousel, Avatar } from "antd";
import styles from "./index.less";
import IconText from "./IconText";
import { MessageOutlined, StarTwoTone, LikeTwoTone } from "@ant-design/icons";
import { connect } from "dva";
import { Help } from "../../utils/image";
import AddComment from "./AddComment";
const Detail = (props) => {
  const { detailItem, setshowDetail, setshowComments, iconBase64, username } =
    props;
  const isLogin = username;
  return (
    <>
      <div className={styles.detail}>
        <PageHeader
          className={styles.site_page_header}
          onBack={() => {
            setshowDetail(false);
            setshowComments(false);
            props.dispatch({
              type: "index/changeCommentslist",
              payload: { commentslist: [] },
            });
          }}
          title={detailItem.titleForHelp}
        >
          <div className={styles.detailItem}>
            <div>
              <Card bordered={false}>
                <div className={styles.itemCard}>
                  <div>
                    <div style={{ width: "25vw" }}>
                      <Carousel dots={false} autoplay className={styles.lunbo}>
                        <div>
                          <img src={detailItem.pic0} alt="" />
                        </div>
                        {detailItem.pic1 ? (
                          <div>
                            <img src={detailItem.pic1} alt="" />
                          </div>
                        ) : null}
                        {detailItem.pic2 ? (
                          <div>
                            <img src={detailItem.pic2} alt="" />
                          </div>
                        ) : null}
                      </Carousel>
                    </div>
                    <div
                      style={{
                        marginLeft: "15px",
                        marginBottom: 30,
                        width: "100%",
                      }}
                    >
                      <div>
                        <Avatar
                          src={
                            "http://127.0.0.1:8888/uploads/" + detailItem.icon
                          }
                        />
                        <span style={{ padding: 8 }}>
                          {detailItem.nickname !== "null"
                            ? detailItem.nickname
                            : detailItem.username}
                        </span>
                        <span className={styles.telphone}>
                          联系电话:{detailItem.telphone}
                        </span>
                      </div>
                      <p
                        style={{
                          textIndent: "2em",
                          wordBreak: "break-all",
                          overflow: "hidden",
                          padding: 8,
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
                        detailForHelp={() => props.detailForHelp(detailItem)}
                      />
                      <IconText
                        className={styles.btnIcon}
                        index={detailItem.id}
                        iconId="listLike"
                        detailForHelp={() => props.detailForHelp(detailItem)}
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
                        iconId="detailMessage"
                        icon={<MessageOutlined />}
                        setshowComments={props.setshowComments}
                        text={detailItem.message}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div style={{ maxWidth: "350px" }}>
              <Card
                title={
                  <div style={{ textAlign: "center" }}>
                    <Avatar
                      size="large"
                      src={isLogin ? iconBase64 : Help}
                      alt="请先登录,参与动物救助！"
                    />
                    <p className={styles.item_p}>欢迎来到XX流浪动物救助平台</p>
                  </div>
                }
              >
                {!isLogin ? (
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
                ) : null}
              </Card>
              <div className={styles.mytelphone}>
                <h3>
                  帮助热线: <span>40032403240</span>
                </h3>
              </div>
            </div>
          </div>
        </PageHeader>
        {props.showComments ? (
          <div className={styles.comments}>
            <AddComment id={detailItem.id} />
          </div>
        ) : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "Detail");
  return {
    iconBase64: state.index.iconBase64,
    username: state.index.username,
  };
};
export default connect(mapStateToProps)(Detail);
