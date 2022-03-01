// import React, { useState, useEffect } from "react";
// import styles from "./index.less";
// import { Link } from "dva/router";
// import { connect } from "dva";
// import { Modal, Dropdown, Menu, Form, Input, Button, message } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import Main from "./componments/main";
// function Home(props) {
//   const [username, setUsername] = useState("noUser");
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   useEffect(() => {
//     setUsername(props.nickname ? props.nickname : props.username);
//     if (getCookie() !== "") {
//       message.success(
//         `登陆成功，欢迎${props.nickname ? props.nickname : props.username}!`
//       );
//     } else {
//       message.warn("登录已过期,请重新登录!");
//       props.history.push("/login");
//     }
//   }, []);
//   const getCookie = () => {
//     var name = "username=";
//     var ca = document.cookie.split(";");
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i].trim();
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   };
//   const showUsersetting = () => {
//     setIsModalVisible(true);
//   };
//   const logOff = () => {};

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   const menu = (
//     <Menu>
//       <Menu.Item key="0">
//         <div onClick={showUsersetting}>账户设置</div>
//       </Menu.Item>
//       <Menu.Divider />
//       <Menu.Item key="1">
//         <div onClick={logOff}>退出登录</div>
//       </Menu.Item>
//     </Menu>
//   );
//   const onFinish = (values) => {
//     //请求修改用户信息
//     // this.props.dispatch({
//     //   type: "/",
//     //   payload: {
//     //     ...values,
//     //     username: username,
//     //   },
//     // });
//     console.log(values, { username: username });
//   };
//   // onClick={goToHome}
//   const onFinishFailed = () => {};
//   return (
//     <div className={styles.body}>
//       <div className={styles.home}>
//         <div className={styles.top}>
//           <div className={styles.left}>
//             <div className={styles.logo}>
//               <Link to="/home">
//                 <img src={Logo} alt="" />
//               </Link>
//             </div>
//             <div className={styles.logoname}>
//               <Link to="/home">
//                 <h2>救助站</h2>
//               </Link>
//             </div>
//             <div></div>
//             <div>
//               <a href="">请求救助</a>
//             </div>
//             <div>
//               <a href="">我要救助</a>
//             </div>
//             <div>
//               <a href="">如何照料</a>
//             </div>
//             <div>
//               <a href="">我要捐助</a>
//             </div>
//             <div>
//               <a href="">加入我们</a>
//             </div>
//           </div>
//           <div className={styles.right}>
//             <Dropdown overlay={menu} trigger={["click"]}>
//               <a
//                 className="ant-dropdown-link"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 {username} <DownOutlined />
//               </a>
//             </Dropdown>
//           </div>
//         </div>
//         <Main></Main>
//         <Modal
//           title="用户设置"
//           visible={isModalVisible}
//           onCancel={handleCancel}
//           footer={null}
//         >
//           <Form
//             className={styles.form}
//             name="basic"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 16 }}
//             initialValues={{ remember: true }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item
//               label="昵称"
//               name="nickname"
//               rules={[{ required: true, message: "请输入昵称!" }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="原密码"
//               name="password"
//               rules={[{ required: true, message: "请输入原密码!" }]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <Form.Item
//               name="newPassword"
//               label="新密码"
//               rules={[
//                 {
//                   required: true,
//                   message: "输入新密码，切长度应不少于6个字符切不超过32个字符!",
//                   min: 6,
//                   max: 32,
//                 },
//               ]}
//               hasFeedback
//             >
//               <Input.Password />
//             </Form.Item>

//             <Form.Item
//               name="confirm"
//               label="重复新密码"
//               dependencies={["newPassword"]}
//               hasFeedback
//               rules={[
//                 {
//                   required: true,
//                   min: 6,
//                   max: 32,
//                   message: "",
//                 },
//                 ({ getFieldValue }) => ({
//                   validator(_, value) {
//                     if (!value || getFieldValue("newPassword") === value) {
//                       return Promise.resolve();
//                     }
//                     return Promise.reject(new Error("两次密码输入不一致！"));
//                   },
//                 }),
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//               <div style={{ width: "100%", textAlign: "center" }}>
//                 <Button
//                   type="primary"
//                   size="small"
//                   htmlType="submit"
//                   style={{ width: 100 }}
//                 >
//                   保存修改
//                 </Button>
//               </div>
//             </Form.Item>
//           </Form>
//         </Modal>
//         {/* <div className={styles.nav}>
//         <div>
//           <NavLink to="/home/sectionA" activeStyle={{ color: "pink" }}>
//             页面A
//           </NavLink>
//         </div>
//         <div>
//           <NavLink to="/home/sectionB" activeStyle={{ color: "pink" }}>
//             页面B
//           </NavLink>
//         </div>
//       </div>
//       <div className={styles.main}>
//         <Switch>
//           <Redirect from="/home" to="/home/sectionA" exact />
//           <Route
//             path="/home/sectionA"
//             component={React.lazy(() => import("../sectionA"))}
//           />
//           <Route
//             path="/home/sectionB"
//             component={React.lazy(() => import("../sectionB"))}
//           />
//         </Switch>
//       </div> */}
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//   //   console.log(state, "state");
//   return {
//     username: state.login.onlineUser,
//     nickname: state.login.nickname,
//   };
// };
// export default connect(mapStateToProps)(Home);
