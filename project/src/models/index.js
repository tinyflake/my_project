import {
  userUpdata,
  requestReg,
  requestLogin,
  requestAssistance,
  getImage,
  getAnimalList,
  addAndLike,
  getComment,
  addComment,
  delComment,
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
    iconBase64: "", //用户头像
    iconUrl: "",
    animalList: [],
    total: 0,
    commentslist: [], //评论数据
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
        return alert("账号或密码错误,登录失败");
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
          iconUrl: res.data.data.icon.replace(
            "publicuploads",
            "/public/uploads/"
          ),
        },
      });
      callback && callback();
    },
    //注册
    *requestReg({ payload, callback }, { call, put }) {
      const res = yield call(requestReg, payload);
      if (res && res.data.code !== 200) {
        return message.warn("注册失败");
      } else if (res && res.data.code === 400) {
        return message.warn("注册失败,用户名已存在！");
      } else {
        callback && callback();
      }
      yield put({
        type: "saveState",
        payload: {
          onlineUser: null,
          nickname: null,
          showReg: null,
          showUserset: null,
          showLogin: null,
          username: null,
          fileList: null,
          iconBase64: null,
          iconUrl: null,
          animalList: null,
          total: null,
          commentslist: null,
        },
      });
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
    //获取待救助流浪动物数据
    *getAnimalList({ payload, callback }, { call, put }) {
      const res = yield call(getAnimalList, payload);
      if (res && res.data.code !== 200) {
        return message.warn("请求失败");
      }
      yield put({
        type: "saveState",
        payload: {
          animalList: res.data.list,
          total: res.data.total,
        },
      });
      return res.data.list;
      // callback && callback();
    },
    //获取图片
    *getImage({ payload, callback }, { call, put }) {
      const base64 = yield call(getImage, payload);
      if (base64)
        yield put({
          type: "saveState",
          payload: {
            iconBase64: base64,
          },
        });
    },
    //收藏点赞
    *addAndLike({ payload, callback }, { call, put }) {
      const base64 = yield call(addAndLike, payload);
      if (base64)
        yield put({
          type: "saveState",
          payload: {
            // iconBase64: base64,
          },
        });
    },
    //
    *getComment({ payload, callback }, { call, put }) {
      const res = yield call(getComment, payload);
      if (res)
        yield put({
          type: "saveState",
          payload: {
            commentslist: res.data.list,
          },
        });
    },
    *delComment({ payload, callback }, { call, put }) {
      const res = yield call(delComment, payload);
      if (res)
        yield put({
          type: "saveState",
          payload: {},
        });
    },
    *addComment({ payload, callback }, { call, put }) {
      const res = yield call(addComment, payload);
      if (res)
        yield put({
          type: "saveState",
          payload: {},
        });
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
    updataAnimalList(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeCommentslist(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
