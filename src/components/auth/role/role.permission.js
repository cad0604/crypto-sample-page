import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "states/role/actions";
import { Button, Table } from "antd";

import AddRoleModal from "./addRole";
import AddPermissionModal from "./addPermission";
import AddRolePermissionModal from "./addRolePermission";

export const RolesPermission = () => {
    const { user } = useSelector((state) => state.role);

    const dispatch = useDispatch();

    const [addRole, setAddRole] = useState(false);
    const [addPermission, setAddPermission] = useState(false);
    const [addRolePermission, setAddRolePermission] = useState(false);

    useEffect(() => {
        dispatch({
            type: actions.GETROLE,
        });
    }, [dispatch]);

    let tempRolePermission = [];
    if (user !== null && user.role_permissions !== undefined) {
        user.role_permissions.map((item) => (
            tempRolePermission = [
                ...tempRolePermission,
                {
                    role: user.roles.find(roles => roles.id === item.role_id).name,
                    permission_name: user.permissions.find(perm => perm.id === item.permission_id).name,
                    permission_alias: item.permission_alias,
                    can_get: item.can_get,
                    can_create: item.can_create,
                    can_update: item.can_update,
                    can_delete: item.can_delete,
                }
            ]
        ));
    }

    const handleAddRole = () => {
        setAddRole(!addRole)
    }

    const handleCancelRole = () => {
        setAddRole(false);
    }

    const handleOKRole = (value) => {
        dispatch({
            type: actions.ADDROLE,
            payload: {name: value},
        });
        dispatch({
            type: actions.GETROLE,
        });
        setAddRole(false);
    }

    const handleAddPermission = () => {
        setAddPermission(!addPermission)
    }

    const handleCancelPermission = () => {
        setAddPermission(false);
    }

    const handleOKPermission = (value) => {
        dispatch({
            type: actions.ADDPERMISSION,
            payload: {name: value},
        });
        dispatch({
            type: actions.GETROLE,
        });
        setAddPermission(false);
    }

    const handleAddRolePermission = () => {
        setAddRolePermission(true)
    }

    const handleCancelRolePermission = () => {
        setAddRolePermission(false);
    }

    const handleOKRolePermission = (value) => {
        dispatch({
            type: actions.ADDROLEPERMISSION,
            payload: value,
        });
        dispatch({
            type: actions.GETROLE,
        });
        setAddRolePermission(false);
    }


    const columns = [
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            responsive: ["md"],
            align: "center"
        },
        {
            title: "Permission",
            dataIndex: "permission_name",
            key: "permission_name",
            align: "center"
        },
        {
            title: "Permission_alias",
            dataIndex: "permission_alias",
            key: "permission_alias",
            responsive: ["md"],
            align: "center"
        },
        {
            title: "Get",
            dataIndex: "can_get",
            key: "can_get",
            responsive: ["md"],
            align: "center"
        },
        {
            title: "Create",
            dataIndex: "can_create",
            key: "can_create",
            responsive: ["md"],
            align: "center"
        },
        {
            title: "Update",
            dataIndex: "can_update",
            key: "can_update",
            responsive: ["md"],
            align: "center"
        },
        {
            title: "Delete",
            dataIndex: "can_delete",
            key: "can_delete",
            responsive: ["md"],
            align: "center"
        },
    ];

    return (
        <>
            <Table
                rowKey={"id"}
                columns={columns}
                dataSource={tempRolePermission}
            />
            <div style={{ width: "100%", alignItems: 'center', justifyContent: 'center', textAlign:'center', gap:'3rem', marginTop:'2rem' }}>
                <Button style={{width:'16rem', height:'3rem', fontSize:'1rem', margin:'0 2rem'}} onClick={handleAddRole}>Add Roles</Button>
                <Button style={{width:'16rem', height:'3rem', fontSize:'1rem', margin:'0 2rem'}} onClick={handleAddPermission}>Add Permissions</Button>
                <Button style={{width:'16rem', height:'3rem', fontSize:'1rem', margin:'0 2rem'}} onClick={handleAddRolePermission}>Add Role & Permission</Button>
            </div>
            {
                addRole && (
                    <AddRoleModal isModalOpen={addRole} handleCancel={handleCancelRole} handleOk={handleOKRole}/>
                )
            }
            {
                addPermission && (
                    <AddPermissionModal isModalOpen={addPermission} handleCancel={handleCancelPermission} handleOk={handleOKPermission}/>
                )
            }
            {
                addRolePermission && (
                    <AddRolePermissionModal isModalOpen={addRolePermission} handleCancel={handleCancelRolePermission} handleOk={handleOKRolePermission} roles={user.roles} permissions={user.permissions}/>
                )
            }
        </>
    );
};

