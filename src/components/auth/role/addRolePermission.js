'use client'
import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Col,
    Form,
    Modal,
    Row,
    Select,
    Space,
} from "antd";
import "react-quill/dist/quill.snow.css";
import BrannIcon from "components/ui/typo/Icon";
import BrannTitle from "components/ui/typo/Title";
import InvididualPermission from "./invidualPermissions";

export default function AddRolePermissionModal({ isModalOpen, handleOk, handleCancel, roles, permissions }) {

    const onFinish = (value) => {

        let addPermission = [];

        permissions.map((item) => (
            addPermission = (value[`permission_${item.id}`] === true) ?
                [
                    ...addPermission,
                    {
                        permission_id: item.id,
                        permission_alias: item.alias,
                        can_get: value[`get_${item.id}`] ? 1 : 0,
                        can_create: value[`create_${item.id}`] ? 1 : 0,
                        can_update: value[`update_${item.id}`] ? 1 : 0,
                        can_delete: value[`delete_${item.id}`] ? 1 : 0,
                    }
                ]
                :
                [...addPermission]
        ));

        let roleId;
        if (value.role === undefined) roleId = roles[0].id;
        else roleId = value.role;
        const addRolePermission = {
            role_id: roleId,
            permissions: addPermission,

        };

        handleOk(addRolePermission)
    }


    let roleData = [];
    roles.map((item) => (
        roleData = [
            ...roleData,
            {
                label: item.name,
                value: item.id
            }
        ]
    ))

    let permissionData = [];
    permissions.map((item) => (
        permissionData = [
            ...permissionData,
            {
                label: item.name,
                value: item.id
            }
        ]
    ))


    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            title={null}
            closable={false}
            footer={null}
            width={1000}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Row gutter={{ xs: 0, sm: 8, md: 16, lg: 16 }}>
                    <Col
                        md={24}
                        sm={24}
                        xs={24}
                        style={{ background: "#f1f1f1", padding: 24 }}
                    >
                        <Form.Item>
                            <BrannTitle text="Roles & Permissions" />
                        </Form.Item>

                        <Row align="middle">

                            <Col span={3} offset={5}>
                                <label>Roles:</label>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="role">
                                    <Select
                                        style={{ width: 250 }}
                                        size="large"
                                        options={roleData}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row align="middle">
                            <Col span={24}>
                                {permissions.map((item) => (
                                    <InvididualPermission
                                        permission={item}
                                    />
                                ))}
                            </Col>
                        </Row>

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
                                    htmlType="submit"
                                // onClick={handleSave}
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
