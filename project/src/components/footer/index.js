import React from "react";
import styles from "./index.less";
import { Ewm, F1, F2, F3 } from "../../utils/image";
import { Link } from "dva/router";
export default function Footer(props) {
  return (
    <>
      <div className={styles.foot}>
        <div className={styles.box}>
          <div className={styles.foot_list}>
            <ul>
              <li>
                <Link to="/To_help">我要救助</Link>
              </li>
              <li>
                <Link to="/To_help">我要救助</Link>
              </li>
              <li>
                <Link to="/how-care">如何照料</Link>
              </li>
              <li>
                <Link to="/donate">我要捐助</Link>
              </li>
              <li>
                <Link to="/story-wall">流浪动物故事墙</Link>
              </li>
              <li>
                <Link to="/join-us">关于我们</Link>
              </li>
            </ul>
            <p>
              <a href="">
                <img src={F1} alt="" />
                移动版
              </a>
              <span> | </span>
              <a href="">
                <img src={F2} alt="" />
                微信
              </a>
              <span> | </span>
              <a href="">
                <img src={F3} alt="" />
                链接分享
              </a>
            </p>
          </div>
          <div
            style={{
              margin: "20px 20px 0",
            }}
          >
            <div
              style={{
                width: 700,
                float: "left",
              }}
            >
              <p className={styles.foot_p1}>
                <a href=""> 加盟项目资讯 </a>
                <a href=""> 热门加盟项目 </a>
                <a> 最新加盟问答 </a>
                <a href=""> 项目资讯 </a>
              </p>
              <p className={styles.foot_p2}>
                <a href="" rel="nofollow">
                  会员服务
                </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  服务条款
                </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  合作事宜
                </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  联系我们
                </a>
                <span> | </span>
                <a href=""> 项目列表 </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  本网招聘
                </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  投诉删帖
                </a>
                <span> | </span>
                <a href="" rel="nofollow">
                  法律声明
                </a>
              </p>
              <p className={styles.foot_p2}>
                Copyright© 2002 - 2018 xiangmu.com Inc.All rights
                reserved.项目网© 版权所有
              </p>
              <p className={styles.foot_p2}>
                <a target="_black" rel="nofollow" href="">
                  沪ICP备14011218号 - 6
                </a>
                <span> | </span>沪公网安备 31011202005355号
              </p>
              <p className={styles.foot_p2}> 凝聚力量， 一起救助流浪动物！ </p>
            </div>
            <img
              style={{
                float: "right",
                width: "142px",
              }}
              src={Ewm}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
