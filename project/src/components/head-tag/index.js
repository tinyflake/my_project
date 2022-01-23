/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "dva/router";
import { Dropdown, Menu, message } from "antd";
import { connect } from "dva";
import { Logo } from "../../utils/image";
import styles from "./index.less";
import { delCookie, getCookie } from "../../utils/cookie";
function HeadTag(props) {
  useEffect(() => {
    if (getCookie("username")) {
      props.dispatch({
        type: "index/changeUsername",
        payload: { username: getCookie("username") },
      });
      props.dispatch({
        type: "index/changeNickname",
        payload: { nickname: getCookie("nickname") },
      });
    }
    // if (props.iconUrl) {
    //   props.dispatch({
    //     type: "index/getImage",
    //     payload: { iconUrl: props.iconUrl },
    //   });
    // }
  }, []);
  useEffect(() => {
    //请求图片
    if (props.iconUrl) {
      props.dispatch({
        type: "index/getImage",
        payload: { iconUrl: props.iconUrl },
      });
    }
  }, [props.iconUrl]);
  const { nickname, username, iconBase64 } = props;
  const logOff = () => {
    delCookie("username");
    delCookie("token");
    props.dispatch({
      type: "index/changeUsername",
      payload: { username: "" },
    });
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div
          onClick={() => {
            props.dispatch({
              type: "index/changeSetShowUserset",
              payload: { showUserset: true },
            });
            // setShowUserset(!showUserset);
          }}
        >
          账户设置
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div onClick={logOff}>退出登录</div>
      </Menu.Item>
    </Menu>
  );
  const turnToLogin = (name) => {
    return (
      <a
        href="javascript:void(0);"
        onClick={() => {
          message.info("您还没有登录，请先登录！");
          props.dispatch({
            type: "index/changeSetShowLogin",
            payload: { showLogin: true },
          });
        }}
      >
        {name}
      </a>
    );
  };
  return (
    <div className={styles.top}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={styles.logoname}>
          <Link to="/">
            <p>XX流浪</p>
            <p>动物救助站</p>
          </Link>
        </div>
        <div></div>
        <div>
          {username ? (
            <Link to="/For_help">请求救助</Link>
          ) : (
            turnToLogin("请求救助")
          )}
        </div>
        <div>
          {username ? (
            <Link to="/To_help">我要救助</Link>
          ) : (
            turnToLogin("我要救助")
          )}
        </div>
        <div>
          <Link to="/how-care">如何照料</Link>
        </div>
        <div>
          <Link to="/donate">我要捐助</Link>
        </div>
        <div>
          <Link to="/story-wall">流浪动物故事墙</Link>
        </div>
        <div>
          <Link to="/join-us">关于我们</Link>
        </div>
      </div>
      <div className={styles.right}>
        {username !== "" ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {nickname ? nickname : username}
              <img src={iconBase64} alt="" />
              <DownOutlined />
            </a>
          </Dropdown>
        ) : (
          <>
            <div>
              <a
                onClick={() => {
                  props.dispatch({
                    type: "index/changeSetShowLogin",
                    payload: { showLogin: true },
                  });
                }}
              >
                登录
              </a>
            </div>
            <div>
              <a
                onClick={() => {
                  props.dispatch({
                    type: "index/changeSetShowReg",
                    payload: { showReg: true },
                  });
                }}
              >
                注册
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "HeadTag");
  return {
    username: state.index.username,
    nickname: state.index.nickname,
    iconUrl: state.index.iconUrl,
    iconBase64: state.index.iconBase64,
  };
};
export default connect(mapStateToProps)(HeadTag);
