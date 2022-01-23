import React from "react";
import styles from "./index.less";
export default function Footer(props) {
  return (
    <>
      <div className={styles.foot}>
        <div className={styles.box}>
          <div className={styles.foot_list}>
            <ul>
              <li>
                <a
                  href="https://www.xiangmu.com/help/about.html"
                  rel="nofollow"
                >
                  关于我们
                </a>
              </li>
              <li>
                <a
                  href="https://www.xiangmu.com/help/about.html"
                  rel="nofollow"
                >
                  帮助中心
                </a>
              </li>
              <li>
                <a
                  href="https://www.xiangmu.com/help/hzbrand.html"
                  rel="nofollow"
                >
                  友情链接
                </a>
              </li>
              <li>
                <a
                  href="https://www.xiangmu.com/help/hezuo.html"
                  rel="nofollow"
                >
                  广告合作
                </a>
              </li>
              <li>
                <a href=""> 技术支持 </a>
              </li>
              <li>
                <a href="https://www.xiangmu.com/help/del.html" rel="nofollow">
                  投诉删帖
                </a>
              </li>
              <li>
                <a href="https://www.xiangmu.com/help/law.html" rel="nofollow">
                  法律申明
                </a>
              </li>
            </ul>
            <p>
              <a href="https://m.xiangmu.com">
                <img
                  src="https://static.xiangmu.com/web/images/icon/f1.png"
                  alt=""
                />
                移动版
              </a>
              <span> | </span>
              <a href="">
                <img
                  src="https://static.xiangmu.com/web/images/icon/f2.png"
                  alt=""
                />
                微信
              </a>
              <span> | </span>
              <a href="">
                <img
                  src="https://static.xiangmu.com/web/images/icon/f3.png"
                  alt=""
                />
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
                <a href="https://www.xiangmu.com/news/"> 加盟项目资讯 </a>
                <a href="https://www.xiangmu.com/project/"> 热门加盟项目 </a>
                <a> 最新加盟问答 </a>
                <a href="https://www.xiangmu.com/news/"> 项目资讯 </a>
              </p>
              <p className={styles.foot_p2}>
                <a
                  href="https://www.xiangmu.com/help/member.html"
                  rel="nofollow"
                >
                  会员服务
                </a>
                <span> | </span>
                <a
                  href="https://www.xiangmu.com/help/terms.html"
                  rel="nofollow"
                >
                  服务条款
                </a>
                <span> | </span>
                <a
                  href="https://www.xiangmu.com/help/hezuo.html"
                  rel="nofollow"
                >
                  合作事宜
                </a>
                <span> | </span>
                <a
                  href="https://www.xiangmu.com/help/hezuo.html"
                  rel="nofollow"
                >
                  联系我们
                </a>
                <span> | </span>
                <a href="https://www.xiangmu.com/project/"> 项目列表 </a>
                <span> | </span>
                <a
                  href="https://www.xiangmu.com/help/zhaopin.html"
                  rel="nofollow"
                >
                  本网招聘
                </a>
                <span> | </span>
                <a href="https://www.xiangmu.com/help/del.html" rel="nofollow">
                  投诉删帖
                </a>
                <span> | </span>
                <a href="https://www.xiangmu.com/help/law.html" rel="nofollow">
                  法律声明
                </a>
              </p>
              <p className={styles.foot_p2}>
                Copyright© 2002 - 2018 xiangmu.com Inc.All rights
                reserved.项目网© 版权所有
              </p>
              <p className={styles.foot_p2}>
                <a
                  target="_black"
                  rel="nofollow"
                  href="https://beian.miit.gov.cn/"
                >
                  沪ICP备14011218号 - 6
                </a>
                <span> | </span>沪公网安备 31011202005355号
              </p>
              <p className={styles.foot_p2}> 凝聚力量， 一起救助流浪动物！ </p>
            </div>
            <img
              style={{
                float: "right",
              }}
              src="https://static.xiangmu.com/web/images/icon/code.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
