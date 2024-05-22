import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Col,
    Form,
    Modal,
    Row,
    Space,
} from "antd";
import "react-quill/dist/quill.snow.css";

import BrannInput from "components/ui/input/Input";
import BrannIcon from "components/ui/typo/Icon";
import BrannTitle from "components/ui/typo/Title";

export default function AddPermissionModal({ isModalOpen, handleOk, handleCancel }) {
    const [value, setValue] = React.useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSave = () => {
        handleOk(value);
    }

    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            title={null}
            closable={false}
            footer={null}
            width={1000}
        >
            <Form layout="vertical">
                <Row gutter={{ xs: 0, sm: 8, md: 16, lg: 16 }}>
                    <Col
                        md={24}
                        sm={24}
                        xs={24}
                        style={{ background: "#f1f1f1", padding: 24 }}
                    >
                        <Form.Item>
                            <BrannTitle text="Add Permission" />
                        </Form.Item>
                        <Form.Item name="name" label="New Permission">
                            <BrannInput placeholder="New Permission" value={value} onChange={handleChange}/>
                        </Form.Item>


                        <Form.Item>
                            <Space
                                wrap
                                style={{ display: "flex", justifyContent: "flex-end" }}
                            >
                                <Button size="large" onClick={handleCancel}>
                                    Avbryt
                                </Button>
                                <Button
                                    icon={<BrannIcon icon={faPlus} />}
                                    type="primary"
                                    size="large"
                                    onClick={handleSave}
                                >
                                    Opprett
                                </Button>
                            </Space>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}
