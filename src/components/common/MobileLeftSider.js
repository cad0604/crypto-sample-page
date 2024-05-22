import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import { faBookOpen, faClipboard, faComments, faHeartPulse, faInfo, faPassport, faPeopleGroup, faPlus, faSpa, faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import BrannMobileLogo from "./MobileLogo";

const MobileLeftSider = ({ handleClose, open, setMenuTitle }) => {
    const leftPrevMenu = localStorage.getItem('leftPrevMenu') ? localStorage.getItem('leftPrevMenu') : '/oversikt';
    const [currentMenuItem, setCurrentMenuItem] = useState(leftPrevMenu);

    const onClickMenuItem = (e) => {
        const label = items.find((item) => item.key === e.key).label;
        localStorage.setItem('leftPrevMenu', e.key);
        localStorage.setItem('prevMenuTitle', label);
        setCurrentMenuItem(e.key);
        setMenuTitle(label);
        handleClose();
    };

    const items = [
        {
            key: "/oversikt",
            icon: <BrannIcon icon={faPlus} size={16} />,
            label: "Create Project",
        },
        {
            key: "/bygg",
            icon: <BrannIcon icon={faClipboard} size={16} />,
            label: "Project Summary",
        },
        {
            key: "/oppgaver",
            icon: <BrannIcon icon={faInfo} size={16} />,
            label: "Task Details",
        },
        {
            key: "/avvik",
            icon: <BrannIcon icon={faPeopleGroup} size={16} />,
            label: "Project GPT",
        },
        {
            key: "/innstillinger",
            icon: <BrannIcon icon={faHeartPulse} size={16} />,
            label: "TimeLines, Budget, Resources",
        },
        {
            key: "/loggut",
            icon: <BrannIcon icon={faStrikethrough} size={16} />,
            label: "Risks and Mitigations",
        },
        {
            key: "/issues",
            icon: <BrannIcon icon={faPassport} size={16} />,
            label: "Issues Management",
        },
        {
            key: "/test-plans",
            icon: <BrannIcon icon={faSpa} size={16} />,
            label: "Test Plans",
        },
        {
            key: "/release-note",
            icon: <BrannIcon icon={faComments} size={16} />,
            label: "Release Notes",
        },
        {
            key: "/meeting-notebook",
            icon: <BrannIcon icon={faBookOpen} size={16} />,
            label: "Meeting Notebook",
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
            // title="Basic Drawer"
            placement={'left'}
            closable={false}
            onClose={handleClose}
            open={open}
            key={'left'}
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

export default MobileLeftSider;