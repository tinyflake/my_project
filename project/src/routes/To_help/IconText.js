import { connect } from "dva";
import React from "react";
import { Space, message } from "antd";
import { getCookie } from "../../utils/cookie";
function IconText(props) {
  const { icon, text, iconId, index, animalList } = props;
  const iconClick = (iconId) => {
    const list = [...animalList];
    const updata = () => {
      props.dispatch({
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
            item.chooseStar = true;
          }
        });
        updata();
        break;
      case "listLike":
        list.forEach((item) => {
          if (item.id === index) {
            item.chooseLike = true;
          }
        });
        updata();
        break;
      case "listMessage":
        console.log("listMessage");
        break;
      case "detailStar":
        list.forEach((item) => {
          if (item.id === index) {
            item.chooseStar = true;
          }
        });
        updata();
        break;
      case "detailLike":
        list.forEach((item) => {
          if (item.id === index) {
            item.chooseLike = true;
          }
        });
        updata();
        break;
      case "detailMessage":
        console.log("detailMessage");
        break;
      default:
        break;
    }
  };
  return (
    <Space>
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
        {React.createElement(icon)}
      </div>
      {text}
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
