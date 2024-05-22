import { Col, Space, Upload, Row } from "antd";
import React from "react";
import BrannText from "../typo/Text";
import BrannPrimaryButton from "../button/PrimaryButton";
import BrannIcon from "../typo/Icon";
import { faCircleCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function BrannPrimaryUploader(
  {
    status=undefined,
    beforeUpload,
    onDownload,
    ...rest
  }) {

  return (
    <>
      <Row gutter={10}>
        <Col span={status===undefined || status===null? 24: 23}>
          <Upload.Dragger height={70} {...rest} maxCount={1} showUploadList={{showDownloadIcon: true, showRemoveIcon: true}} beforeUpload={beforeUpload} onDownload={onDownload}>
            <Space wrap>
              <BrannText text="Klikk eller dra filer her" />
              <BrannPrimaryButton size="middle" label="Utforsk" />
            </Space>
          </Upload.Dragger>
        </Col>
        {
          status === true &&
          <Col style={{marginTop:'1.3rem'}}>
            <BrannIcon icon={faCircleCheck} color="green" />
          </Col>
        }
        {
            status === false &&
            <Col style={{marginTop:'1.3rem'}}>
            <BrannIcon icon={faExclamationTriangle} color="red" />
          </Col>
        }
      </Row>



    </>
  );
}
