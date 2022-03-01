import React from "react";
import styles from "./index.less";
import { Ewm, F1, F2, F3 } from "../../utils/image";
export default function Footer(props) {
  return (
    <>
      <div className={styles.foot}>
        <div className={styles.box}>
          <div
            style={{
              margin: "-18px 20px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p className={styles.foot_p1}>
                  <a> 流浪动物平台资讯 </a>
                  <a> 联系我们 </a>
                  <a> 寻求帮助 </a>
                  <a> 我要捐助 </a>
                </p>
                <p className={styles.foot_p2}>
                  <a rel="nofollow">会员服务</a>
                  <span> | </span>
                  <a rel="nofollow">服务条款</a>
                  <span> | </span>
                  <a rel="nofollow">合作事宜</a>
                  <span> | </span>
                  <a rel="nofollow">联系我们</a>
                  <span> | </span>
                  <a> 项目列表 </a>
                  <span> | </span>
                  <a rel="nofollow">本网招聘</a>
                  <span> | </span>
                  <a rel="nofollow">投诉删帖</a>
                  <span> | </span>
                  <a rel="nofollow">法律声明</a>
                </p>
                <p className={styles.foot_p2}>
                  Copyright© 2021 - 2022 xxxlldwjz.com save
                  Animals.流浪地球救助平台© 版权所有
                </p>
                <p className={styles.foot_p2}>
                  <a target="_black" rel="nofollow">
                    沪ICP备00000000号 - 1
                  </a>
                  <span> | </span>沪公网安备 0000000000000000号
                </p>
                <p className={styles.foot_p2}>凝聚力量， 一起救助流浪动物！ </p>
              </div>
              <div className={styles.foot_p2}>
                <div>
                  <p>
                    <a>
                      <img src={F1} alt="" />
                      移动版
                    </a>
                    <span> | </span>
                    <a>
                      <img src={F2} alt="" />
                      微信
                    </a>
                    <span> | </span>
                    <a>
                      <img src={F3} alt="" />
                      链接分享
                    </a>
                  </p>
                </div>
              </div>
              <div>
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
        </div>
      </div>
    </>
  );
}
