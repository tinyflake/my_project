import React, { useState } from "react";
import { Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import { getCookie } from "../../utils/cookie";

const IconUpload = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handlePreview = async (file) => {
    console.log("11");
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const token = getCookie("token");
  return (
    <div>
      <ImgCrop rotate>
        <Upload
          action="http://127.0.0.1:8888/api/upload"
          name="pic"
          listType="picture-card"
          accept=".png, .jpg, .jpeg, .gif, .webp, .jfif "
          fileList={fileList}
          onPreview={handlePreview}
          onChange={onChange}
          headers={{ Authorization: "Bearer " + token }}
          maxCount={1}
        >
          {fileList.length < 2 && "+上传图片"}
        </Upload>
      </ImgCrop>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
        zIndex={1001}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};
export default IconUpload;
