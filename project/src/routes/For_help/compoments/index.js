import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { connect } from "dva";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class UploadPic extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }) => {
    this.props.dispatch({
      type: "index/saveFileList",
      payload: {
        fileList: fileList,
      },
    });
  };
  onRemove = (file) => {
    console.log(file);
  };
  beforeUpload = (file) => {
    return false;
  };
  //取图片base64
  // getBase64 = (img, callback) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // };
  render() {
    const { previewVisible, previewImage, previewTitle } = this.state;
    const { fileList } = this.props;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>上传</div>
      </div>
    );
    return (
      <>
        <Upload
          name="photo"
          accept=".png, .jpg, .jpeg, .gif, .webp ,.jfif"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          maxCount={3}
          // headers={{ Authorization: "Bearer " + getCookie("token") }}
          onRemove={this.onRemove}
          beforeUpload={this.beforeUpload}
          customRequest={this.customRequest}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, "UploadPic");
  return {
    fileList: state.index.fileList,
  };
};
export default connect(mapStateToProps)(UploadPic);
