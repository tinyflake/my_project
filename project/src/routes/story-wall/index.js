import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import { List, Card } from "antd";
import Lrh1 from "./video/1.mp4";
import Lrh2 from "./video/2.mp4";
import Lrh3 from "./video/3.mp4";
import Lrh4 from "./video/4.mp4";
import Lrh5 from "./video/5.mp4";
import Lrh6 from "./video/6.mp4";
import Lrh7 from "./video/7.mp4";
import V001 from "./video/001.mp4";
import V002 from "./video/002.mp4";
import V003 from "./video/003.mp4";
import V004 from "./video/004.mp4";
import VideoPlayer from "../../components/player";
import Loginandreg from "../../components/loginandreg";
import HeadTag from "./../../components/head-tag/index";
function StoryWall(props) {
  // useEffect(() => {
  //   if (!getCookie("username")) {
  //     props.history.push("/");
  //   }
  // }, []);
  const data = [
    {
      title: <span>你知道流浪动物是怎么过冬的吗？</span>,
      content: <VideoPlayer path={V001} />,
    },
    {
      title: <span>每个人多一分责任 世间悲剧就会减少一份</span>,
      content: <VideoPlayer path={V002} />,
    },
    {
      title: <span>希望看完这个视频的你 今后不会随便抛弃他们</span>,
      content: <VideoPlayer path={V003} />,
    },
    {
      title: <span>救助流浪动物 从身边做起</span>,
      content: <VideoPlayer path={V004} />,
    },
    {
      title: <span>愿每个生命 都能被这世界温柔以待!</span>,
      content: <VideoPlayer path={Lrh1} />,
    },
    {
      title: (
        <span>我是一名致力于"绑架"流浪猫的宠物医生 并在这条路上渐行渐远</span>
      ),
      content: <VideoPlayer path={Lrh2} />,
    },
    {
      title: (
        <span>
          "李荣浩"不太信任人类 我们打算等他情绪稳定些后给他进行全面检查
        </span>
      ),
      content: <VideoPlayer path={Lrh3} />,
    },
    {
      title: <span>钟爱猫砂盆的"李荣浩"</span>,
      content: <VideoPlayer path={Lrh4} />,
    },
    {
      title: <span>傲娇的"李荣浩" 吃就吃了嘛~</span>,
      content: <VideoPlayer path={Lrh7} />,
    },
    {
      title: (
        <span>
          趁着"李荣浩"睡着,偷摸被发现...还是很拒绝人类...希望过一段时间能对人类重拾信心
        </span>
      ),
      content: <VideoPlayer path={Lrh6} />,
    },
    {
      title: <span>"李荣浩"拉稀了赶紧测测猫瘟!</span>,
      content: <VideoPlayer path={Lrh5} />,
    },
    {
      title: <span></span>,
      content: <div className={styles.empty}>...</div>,
    },
  ];
  const { Meta } = Card;
  return (
    <>
      <div className={styles.base}>
        <HeadTag />
        <div className={styles.main}>
          <div className={styles.mainhaed}>
            <h1>留下我的故事</h1>
          </div>
          <div className={styles.list}>
            <List
              grid={{
                gutter: 16,
                xs: 2,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    {item.content}
                    <Meta title={item.title} />
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <Loginandreg />
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "StoryWall");
  return {};
};
export default connect(mapStateToProps)(StoryWall);
