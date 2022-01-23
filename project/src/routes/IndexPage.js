import React, { useEffect } from "react";
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
  return (
    <div className={styles.base}>
      <HeadTag />
      <div>{Banner}</div>
      <div className={styles.main}>
        <section className={styles.forHelp}>
          <h1>请求救助</h1>
          <div>
            <div className={styles.halftBox}>
              <div>
                {username ? (
                  <Link to="/For_help">
                    <Button type="primary">请求救助</Button>
                  </Link>
                ) : (
                  <Button
                    type="primary"
                    onClick={() => {
                      message.info("您还没有登录，请先登录！");
                      props.dispatch({
                        type: "index/changeSetShowLogin",
                        payload: { showLogin: true },
                      });
                    }}
                  >
                    请求救助
                  </Button>
                )}
              </div>
            </div>
            <div className={styles.halftBox}>
              <div>
                <img src={Forhelp} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.adCat}>
          <div></div>
          <img src={AdCat} alt="" />
        </div>
        <section className={styles.toHelp}>
          <h1>我要救助</h1>
          <div>
            <div className={styles.halftBox}>
              <div>
                <Link to="/To_help">
                  <Button type="primary">我要救助</Button>
                </Link>
              </div>
            </div>
            <div className={styles.halftBox}>
              <div>
                <img src={ToHelp} alt="" />
              </div>
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
