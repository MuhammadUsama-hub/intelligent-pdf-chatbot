import React from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { uploadPDF } from "../modules/file-upload/fileAPI";

const FileUploader: React.FC<{ onUploadSuccess: () => void }> = ({
  onUploadSuccess,
}) => {
  const props: UploadProps = {
    maxCount: 1,
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        await uploadPDF(file as File);
        message.success("PDF uploaded and processed!");
        onUploadSuccess();
        if (onSuccess) onSuccess("ok");
      } catch (err) {
        message.error("Upload failed.");
        if (onError) onError(err as any);
      }
    },
    showUploadList: false,
    accept: ".pdf",
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload PDF</Button>
    </Upload>
  );
};

export default FileUploader;
