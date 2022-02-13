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
    console.log("删除评论", item);
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
    const list = [...this.props.commentslist];
    list &&
      list.forEach((item) => {
        item.author = item.observer;
        item.observer = null;
        item.avatar = "http://127.0.0.1:8888/uploads/moren.png";
        item.actions = [
          <div className={styles.commentIcon}>
            <span key={item.id}>
              <MessageOutlined />
            </span>
            <span key={item.id + "1"}>
              <DeleteTwoTone onClick={() => this.delComment(item)} />
            </span>
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
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    console.log(this.state.value);
    this.setState(
      {
        submitting: true,
      },
      () => {
        this.getComments();
      }
    );
    // setTimeout(() => {
    //   this.setState({
    //     submitting: false,
    //     value: "",
    //   });
    // }, 1000);
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
        {commentslist.length > 0 ? (
          <div style={{ overflowY: "auto", height: "55vh" }}>
            <List
              dataSource={commentslist}
              header={`${commentslist.length} ${
                commentslist.length > 1 ? "条评论" : "评论"
              }`}
              itemLayout="vertical"
              renderItem={(props) => <Comment {...props} />}
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
