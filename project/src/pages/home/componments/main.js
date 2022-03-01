import { Button } from "antd";
import React from "react";
import styles from "./main.less";
export default function Main(props) {
  return (
    <div className={styles.base}>
      <section className={styles.top}>
        <div className={styles.left}>
          <div className={styles.banner}>banner</div>
          <div className={styles.cardlist}>
            <li>11</li>
            <li>22</li>
            <li>33</li>
            <li>44</li>
          </div>
          <div className={styles.more}>
            <Button size="small" type="ghost">
              更多 &gt;
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li>111111</li>
            <li>111111</li>
            <li>111111</li>
            <li>111111</li>
            <li>111111</li>
          </ul>
        </div>
      </section>
      <section className={styles.center}></section>
      <section className={styles.buttom}></section>
    </div>
  );
}
