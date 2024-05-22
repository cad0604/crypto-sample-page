import React from "react";
import { Col, Form, Modal, Row, Input } from "antd";

import { email, required } from "config/Validation";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannInput from "components/ui/input/Input";

import BrannSubTitle from "components/ui/typo/SubTitle";

const { TextArea } = Input;
export default function SupportForm({ open, handleOk, handleClose }) {

  const onFinish = (values) => {
    handleOk(values);
  };

  return (
    <Modal
      onCancel={handleClose}
      title={null}
      closable={true}
      footer={null}
      width={1000}
      open={open}
    >
      <Form className="auth-form" name="support-form" onFinish={onFinish} layout="vertical">
        <Row gutter={{ xs: 0, sm: 8, md: 16, lg: 16 }}>
          <Col md={24}
            sm={24}
            xs={24}
            style={{ padding: 24 }}
          >
            <Form.Item >
              <BrannSubTitle text={"Support a Team"} />
            </Form.Item>
            <Form.Item name="email" rules={[required, email]} label="Email">
              <BrannInput placeholder="E-post *" />
            </Form.Item>
            <Form.Item name="name" rules={[required]} label="Name">
              <BrannInput placeholder="name *" />
            </Form.Item>
            <Form.Item name="message" rules={[required]} label="Message">
              <TextArea
                autoSize={{
                  minRows: 9,
                  maxRows: 15,
                }}
              />
            </Form.Item>
            <Form.Item>
              <BrannSubmitButton
                label="Submit"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
