import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import { faCalendarDay, faJoint, faMessage, faNotesMedical, faTasks } from "@fortawesome/free-solid-svg-icons";
import BrannMobileLogo from "./MobileLogo";

const MobileRightSider = ({ handleClose, open }) => {
    const rightPrevMenu = localStorage.getItem('rightPrevMenu') ? localStorage.getItem('rightPrevMenu') : '/oversikt';
    const [currentMenuItem, setCurrentMenuItem] = useState(rightPrevMenu);
    const onClickMenuItem = (e) => {
        localStorage.setItem('rightPrevMenu', e.key);
        setCurrentMenuItem(e.key);
    };

    const items = [
        {
            key: "/micro-notifications",
            icon: <BrannIcon icon={faMessage} size={16} />,
            label: "Notifications",
        },
        {
            key: "/side-notes",
            icon: <BrannIcon icon={faNotesMedical} size={16} />,
            label: "Side Notes",
        },
        {
            key: "/channels",
            icon: <BrannIcon icon={faJoint} size={16} />,
            label: "Channels",
        },
        {
            key: "/tasks",
            icon: <BrannIcon icon={faTasks} size={16} />,
            label: "Tasks",
        },
        {
            key: "/schedule",
            icon: <BrannIcon icon={faCalendarDay} size={16} />,
            label: "Schedule",
        },
    ];

    const getLevelKeys = (items1) => {
        const key = {};
        const func = (items2, level = 1) => {
            items2.forEach((item) => {
                if (item.key) {
                    key[item.key] = level;
                }
                if (item.children) {
                    return func(item.children, level + 1);
                }
            });
        };
        func(items1);
        return key;
    };
    const levelKeys = getLevelKeys(items);
    const [stateOpenKeys, setStateOpenKeys] = useState([]);
    const onOpenChange = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            setStateOpenKeys(openKeys);
        }
    };

    return (
        <Drawer
            placement={'right'}
            closable={false}
            onClose={handleClose}
            open={open}
            key={'right'}
            style={{ backgroundColor: '#00162A' }}
        >
            <View className="brann-logo-wrapper">
                <BrannMobileLogo justify="flex-start" />
            </View>
            <Menu
                onClick={onClickMenuItem}
                items={items}
                theme="dark"
                mode="inline"
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                selectedKeys={[currentMenuItem]}
                style={{ fontSize: 16, color: '#FFFFFF', backgroundColor: '#00162A' }}
            />
        </Drawer>
    )
}

export default MobileRightSider;