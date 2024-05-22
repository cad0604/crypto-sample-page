import { Upload } from "antd";
import React from "react";
import BrannPrimaryButton from "../button/PrimaryButton";

export default function BrannButtonUploader(
  {
    label,
    beforeUpload,
    ...rest
  }) {

  return (
    <Upload {...rest} maxCount={1} showUploadList={false} beforeUpload={beforeUpload}>
      <BrannPrimaryButton size="middle" label={label} />
    </Upload>
  );
}
