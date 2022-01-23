import React from "react";
import { connect } from "dva";
import { Modal } from "antd";
import Login from "./../routes/login/index";
import Reg from "./../routes/reg/index";
import UserSetting from "./../routes/userSetting/index";
function Loginandreg(props) {
  const activeModal = () => {
    const { showReg, showUserset, showLogin } = props;
    const handleCancel = (user, nick) => {
      nick
        ? props.dispatch({
            type: "index/changeUsername",
            payload: { username: nick },
          })
        : nick
        ? props.dispatch({
            type: "index/changeUsername",
            payload: { username: user },
          })
        : props.dispatch({
            type: "index/changeUsername",
            payload: { username: "" },
          });
      props.dispatch({
        type: "index/changeSetShowLogin",
        payload: { showLogin: false },
      });
      props.dispatch({
        type: "index/changeSetShowReg",
        payload: { showReg: false },
      });
    };
    const handleCancelLogin = (user) => {
      props.dispatch({
        type: "index/changeUsername",
        payload: { username: user },
      });
      props.dispatch({
        type: "index/changeSetShowLogin",
        payload: { showLogin: false },
      });
    };
    return (
      <>
        <Modal
          title="用户注册"
          visible={showReg}
          onCancel={handleCancel}
          footer={null}
        >
          <Reg history={props.history} handleCancel={handleCancel} />
        </Modal>
        <Modal
          title="用户登录"
          visible={showLogin}
          onCancel={handleCancel}
          footer={null}
        >
          <Login
            history={props.history}
            handleCancelLogin={handleCancelLogin}
          />
        </Modal>
        <Modal
          title="用户设置"
          visible={showUserset}
          onCancel={() => {
            props.dispatch({
              type: "index/changeSetShowUserset",
              payload: { showUserset: !showUserset },
            });
          }}
          footer={null}
        >
          <UserSetting
            history={props.history}
            onCancel={() => {
              props.dispatch({
                type: "index/changeSetShowUserset",
                payload: { showUserset: !showUserset },
              });
            }}
          />
        </Modal>
      </>
    );
  };
  return <>{activeModal()}</>;
}
const mapStateToProps = (state) => {
  return {
    showReg: state.index.showReg,
    showUserset: state.index.showUserset,
    showLogin: state.index.showLogin,
    username: state.index.username,
  };
};
export default connect(mapStateToProps)(Loginandreg);
