import {
  userUpdata,
  requestReg,
  requestLogin,
  requestAssistance,
  getImage,
} from "../services/index";
import { message } from "antd";
export default {
  namespace: "index",

  state: {
    onlineUser: "",
    nickname: "",
    showReg: false, //注册
    showUserset: false, //用户设置
    showLogin: false, //登录
    username: "",
    fileList: [],
    iconUrl: "", //默认的头像
    iconBase64: "", //用户头像
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    //登录
    *requestLogin({ payload, callback }, { call, put }) {
      const res = yield call(requestLogin, payload);
      if (res && res.data.code !== 200) {
        return alert("登录失败");
      } else {
        console.log(res.data.data);
        document.cookie = `token=${res.data.token}`;
        document.cookie = `nickname=${res.data.data.nickname}`;
      }
      yield put({
        type: "saveState",
        payload: {
          username: res.data.data.username,
          nickname: res.data.data.nickname,
          iconUrl: res.data.data.icon,
        },
      });
      callback && callback();
    },
    //注册
    *requestReg({ payload, callback }, { call }) {
      const res = yield call(requestReg, payload);
      if (res && res.data.code !== 200) {
        return message.warn("注册失败");
      }
      callback && callback();
    },
    //修改用户信息
    *userUpdata({ payload, callback }, { call }) {
      const res = yield call(userUpdata, payload);
      if (res && res.data.code !== 200) {
        return message.warn("更新失败");
      }
      callback && callback();
    },
    //上传救助请求
    *requestAssistance({ payload, callback }, { call }) {
      const res = yield call(requestAssistance, payload);
      if (res && res.data.code !== 200) {
        return message.warn("请求失败");
      }
      callback && callback();
    },
    //获取图片
    *getImage({ payload, callback }, { call, put }) {
      const res = yield call(getImage, payload);
      if (res)
        yield put({
          type: "saveState",
          payload: {
            iconBase64: res,
          },
        });
      callback && callback();
    },
  },

  reducers: {
    saveState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeSetShowLogin(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeSetShowReg(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeSetShowUserset(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeUsername(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeNickname(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveFileList(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
