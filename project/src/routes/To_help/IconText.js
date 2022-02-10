import { connect } from "dva";
import React from "react";
import { Space, message } from "antd";
import { getCookie } from "../../utils/cookie";
function IconText(props) {
  const { icon, text, iconId, index, animalList } = props;
  const iconClick = (iconId) => {
    const list = [...animalList];
    const updata = async (like, star) => {
      await props.dispatch({
        type: "index/addAndLike",
        payload: {
          likes: like,
          stars: star,
          id: index,
        },
      });
      await props.dispatch({
        type: "index/updataAnimalList",
        payload: {
          animalList: list,
        },
      });
    };
    switch (iconId) {
      case "listStar":
        list.forEach((item) => {
          if (item.id === index) {
            if (item.chooseStar !== true) {
              item.chooseStar = true;
              item.stars += 1;
              updata(0, 1);
            } else {
              message.warning("已经收藏了噢！");
            }
          }
        });
        break;
      case "listLike":
        list.forEach((item) => {
          if (item.id === index) {
            if (item.chooseLike !== true) {
              item.chooseLike = true;
              item.likes += 1;
              updata(1, 0);
            } else {
              message.warning("已经赞了噢！");
            }
          }
        });
        break;
      case "listMessage":
        props.setshowComments(true);
        props.detailForHelp();
        break;
      default:
        break;
    }
  };
  return (
    <Space style={{ cursor: "pointer" }}>
      <div
        onClick={() => {
          if (getCookie("username")) {
            iconClick(iconId);
          } else {
            message.info("您还没有登录，请先登录！");
            props.dispatch({
              type: "index/changeSetShowLogin",
              payload: { showLogin: true },
            });
          }
        }}
      >
        {icon} <span>{text ? text : 0}</span>
      </div>
    </Space>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "IconText");
  return {
    animalList: state.index.animalList,
  };
};
export default connect(mapStateToProps)(IconText);
