import React, { Component } from "react";
import {
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Tooltip,
  ConfigProvider,
} from "antd";
import { MessageOutlined, DeleteTwoTone } from "@ant-design/icons";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import { connect } from "dva";
import styles from "./index.less";
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        style={{ resize: "none" }}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        发表评论
      </Button>
    </Form.Item>
  </>
);

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      value: "",
    };
  }
  componentDidMount() {
    this.getComments();
  }
  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     if (prevState.comments !== nextProps.commentslist) {
  //       return {
  //         comments: nextProps.commentslist,
  //       };
  //     }
  //     return null;
  //   }

  delComment = async (item) => {
    // console.log(
    //   "删除评论",
    //   item,
    //   this.props.nickname ? this.props.nickname : this.props.username
    // );
    // if (item.author !== this.props.nickname ? this.props.nickname : this.props.username) {
    //   message.warn('只能删除自己的')
    // }
    await this.props.dispatch({
      type: "index/delComment",
      payload: { indexofcomment: item.indexofcomment },
    });
    this.getComments();
  };
  getComments = async () => {
    await this.props.dispatch({
      type: "index/getComment",
      payload: { id: this.props.id },
    });
    const list = this.props.commentslist ? [...this.props.commentslist] : [];

    list &&
      list.forEach((item) => {
        const user = this.props.nickname
          ? this.props.nickname
          : this.props.username;
        let flag = false;
        if (item.observer === user) {
          flag = true;
        }
        item.author = item.observer;
        item.observer = null;
        item.avatar = "http://127.0.0.1:8888/uploads" + item.avator;
        item.actions = [
          <div className={styles.commentIcon}>
            <span key={item.id}>
              <MessageOutlined />
            </span>
            {flag ? (
              <span key={item.id + "1"}>
                <DeleteTwoTone onClick={() => this.delComment(item)} />
              </span>
            ) : null}
          </div>,
        ];
        item.content = <p>{item.comment}</p>;
        item.datetime = (
          <ConfigProvider locale={zhCN}>
            <Tooltip
              title={moment()
                .subtract(item.datetime, "days")
                .format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment().subtract(item.datetime, "days").fromNow()}</span>
            </Tooltip>
          </ConfigProvider>
        );
      });
    await this.props.dispatch({
      type: "index/changecommentslist",
      payload: {
        commentslist: list,
      },
    });
    this.setState({
      value: "",
    });
  };
  handleSubmit = async () => {
    if (!this.state.value) {
      return;
    }
    await this.props.dispatch({
      type: "index/addComment",
      payload: {
        id: this.props.id,
        comment: this.state.value,
        create_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        observer: this.props.nickname
          ? this.props.nickname
          : this.props.username,
      },
    });
    this.setState(
      {
        submitting: true,
      },
      () => {
        this.getComments();
      }
    );
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { submitting, value } = this.state;
    const { commentslist } = this.props;
    return (
      <div>
        {commentslist && commentslist.length > 0 ? (
          <div style={{ overflowY: "auto", height: "40vh" }}>
            <List
              dataSource={commentslist}
              header={`${commentslist.length} ${
                commentslist.length > 1 ? "条评论" : "评论"
              }`}
              itemLayout="vertical"
              renderItem={(props) => (
                <ConfigProvider locale={zhCN}>
                  {console.log(props)}
                  <Comment {...props} />
                </ConfigProvider>
              )}
            />
          </div>
        ) : null}
        <Comment
          avatar={
            <Avatar
              src={this.props.iconBase64}
              alt={
                this.props.nickname ? this.props.nickname : this.props.username
              }
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, "AddComment");
  return {
    commentslist: state.index.commentslist,
    iconBase64: state.index.iconBase64,
    nickname: state.index.nickname,
    username: state.index.username,
  };
};
export default connect(mapStateToProps)(AddComment);
