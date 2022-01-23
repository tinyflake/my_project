import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import Head from "../../components/head-tag/index";
import Footer from "./../../components/footer/index";
import Loginandreg from "../../components/loginandreg";
function HowCare(props) {
  // useEffect(() => {
  //   if (!getCookie("username")) {
  //     props.history.push("/");
  //   }
  // }, []);
  return (
    <>
      <div className={styles.base}>
        <Head />
        <div className={styles.main}>HowCare</div> <Loginandreg />
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "HowCare");
  return {};
};
export default connect(mapStateToProps)(HowCare);
