'use client'
import React from "react";

import {
    Col,
    Form,
    Row,
} from "antd";
import "react-quill/dist/quill.snow.css";
import BrannCheckbox from "components/ui/checkbox/Selector";


export default function InvididualPermission({permission, handleGet, handleCreate, handleDelete, handleUpdate, handleThis}) {

    return (
        // <Form layout="vertical" style={{height:'110px'}}>
        <>
        
            <Row gutter={{ xs: 0, sm: 24, md: 24, lg: 24 }}>
                <Col
                    md={24}
                    sm={24}
                    xs={24}
                    style={{ background: "#f1f1f1", padding: 10 }}
                >
                    <Row align="middle">
                        <Col span={15} offset={1}>
                            <Form.Item name={`permission_${permission.id}`} valuePropName="checked" style={{fontSize:'1rem', fontWeight:'600'}}>
                                <BrannCheckbox label={permission.name} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row align="middle">
                    <Col span={5} offset={3} >
                            <Form.Item name={`get_${permission.id}`} valuePropName="checked">
                                <BrannCheckbox label={"can-get"}  />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item name={`delete_${permission.id}`} valuePropName="checked">
                                <BrannCheckbox label={"can-delete"} />
                            </Form.Item>
                        </Col>

                        <Col span={5}>
                            <Form.Item name={`create_${permission.id}`} valuePropName="checked">
                                <BrannCheckbox label={"can-create"} />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item name={`update_${permission.id}`} valuePropName="checked">
                                <BrannCheckbox label={"can-update"} />
                            </Form.Item>
                        </Col>

                    </Row>
                </Col>
            </Row>
            </>
        // </Form>
    );
}
