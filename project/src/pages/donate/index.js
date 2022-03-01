import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import HeadTag from "../../components/head-tag";
function Donate(props) {
  return (
    <div className={styles.base}>
      <HeadTag />
      <div className={styles.main}></div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "Donate");
  return {};
};
export default connect(mapStateToProps)(Donate);
