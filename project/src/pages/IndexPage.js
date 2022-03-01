import React, { useEffect, useState, useRef } from "react";
import { Link } from "dva/router";
import styles from "./IndexPage.less";
import { connect } from "dva";
import { Carousel, Button, message, BackTop } from "antd";
import { Cat, Cat1, Dog, Dog1, AdCat, Forhelp, ToHelp } from "../utils/image";
import { getCookie } from "./../utils/cookie";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Loginandreg from "../components/loginandreg";
import Footer from "./../components/footer/index";
import HeadTag from "./../components/head-tag/index";
function IndexPage(props) {
  useEffect(() => {
    const user = getCookie("username");
    if (user !== "")
      props.dispatch({
        type: "index/changeUsername",
        payload: { username: user },
      });
  }, []);

  const carouselProps = {
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    className: styles.swiper,
    pauseOnFocus: true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
  };
  const Banner = (
    <Carousel {...carouselProps}>
      <div>
        <img src={Cat1} alt="" />
      </div>
      <div>
        <img src={Cat} alt="" />
      </div>
      <div>
        <img src={Dog} alt="" />
      </div>
      <div>
        <img src={Dog1} alt="" />
      </div>
      <div>
        <img src={Cat} alt="" />
      </div>
    </Carousel>
  );
  const { username } = props;

  const pic_01 = useRef(null);
  const pic_02 = useRef(null);

  const [height, setHeight] = useState(0);
  const [movePic_01, setMovePic_01] = useState(false);
  const [movePic_02, setMovePic_02] = useState(false);

  useEffect(() => {
    if (height) {
      if (height >= 550 && pic_01.current) {
        setMovePic_01(true);
      }
      if (height >= 1550 && pic_02.current) {
        setMovePic_02(true);
        setHeight(null);
      }
    }
  }, [height]);
  const bindHandleScroll = (event) => {
    setHeight(event.path[1].pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", bindHandleScroll);
    return () => {
      window.removeEventListener("scroll", bindHandleScroll);
    };
  }, []);
  return (
    <div className={styles.base}>
      <HeadTag />
      <div>{Banner}</div>
      <div className={styles.main}>
        <section className={styles.forHelp}>
          <h1>请求救助</h1>
          <div>
            <div className={styles.halftBox}>
              <div className={movePic_01 ? styles.text_show : styles.text_hide}>
                <div className={styles.slogan}>
                  {username ? (
                    <Link to="/For_help">
                      <Button type="ghost">点我救助</Button>
                    </Link>
                  ) : (
                    <Button
                      type="ghost"
                      onClick={() => {
                        message.info("您还没有登录，请先登录！");
                        props.dispatch({
                          type: "index/changeSetShowLogin",
                          payload: { showLogin: true },
                        });
                      }}
                    >
                      点我救助
                    </Button>
                  )}
                  <div>
                    <h2>同一个蓝天下</h2>
                    <h2>和谐相处</h2>
                    <h2>保护动物</h2>
                    <h2>人人有责</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.halftBox}>
              <Link to="/For_help">
                <div>
                  <img
                    ref={pic_01}
                    style={{ width: "500px", height: "330px" }}
                    className={movePic_01 ? styles.pic_move : styles.pic_hidden}
                    src={Forhelp}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <div className={styles.adCat}>
          <div></div>
          <img src={AdCat} alt="" />
        </div>
        <section className={styles.toHelp}>
          <h1>我来领你回家</h1>
          <div className={movePic_02 ? styles.text_show : styles.text_hide}>
            <div className={styles.halftBox}>
              <div className={styles.slogan}>
                <Link to="/To_help">
                  <Button type="ghost">点我去查看</Button>
                </Link>
                <div>
                  <h2>当你在户外你看见一只流浪猫，殊不知</h2>
                  <h2>它看到的却是一个家...</h2>
                </div>
              </div>
            </div>
            <div className={styles.halftBox}>
              <Link to="/To_help">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={ToHelp}
                    alt=""
                    ref={pic_02}
                    className={movePic_02 ? styles.pic_move : styles.pic_hidden}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <BackTop>
        <div className={styles.backTop}>
          <VerticalAlignTopOutlined />
        </div>
      </BackTop>
      <Loginandreg />
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {};
const mapStateToProps = (state) => {
  return {
    showReg: state.index.showReg,
    showUserset: state.index.showUserset,
    showLogin: state.index.showLogin,
    username: state.index.username,
  };
};
export default connect(mapStateToProps)(IndexPage);
