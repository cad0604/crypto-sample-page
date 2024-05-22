import React, { useEffect, useState } from "react";
import { Button, Layout, ConfigProvider, Menu, FloatButton } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import BrannIcon from "components/ui/typo/Icon";
import {
  faAnglesLeft,
  faAnglesRight,
  faBookOpen,
  faClipboard,
  faComments,
  faHeartPulse,
  faInfo,
  faPassport,
  faPeopleGroup,
  faPlus,
  faSpa,
  faStrikethrough
} from "@fortawesome/free-solid-svg-icons";
import Box from "components/ui/box/Box";

const { Sider } = Layout;

const colors1 = ['#a191e7', '#676b6d'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());


export default function BrannLeftSider({ menuTitle, setMenuTitle }) {
  const statusOfLeftPanel = localStorage.getItem('statusOfLeftPanel') ? localStorage.getItem('statusOfLeftPanel') === 'true' ? true : false : false;
  const leftPrevMenu = localStorage.getItem('leftPrevMenu') ? localStorage.getItem('leftPrevMenu') : '/oversikt';
  const [isLeftPanel, setIsLeftPanel] = useState(statusOfLeftPanel);
  const [currentMenuItem, setCurrentMenuItem] = useState(leftPrevMenu);
  const [showFloatButtons, setShowFloatButtons] = useState(false);

  const mouseMove = (e) => {
    if (showFloatButtons === true) {
      if (e.clientX > 60 || (window.innerHeight - e.clientY) > 650)
        setShowFloatButtons(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  })

  const handleShowPanel = () => {
    localStorage.setItem('statusOfLeftPanel', 'true');
    setIsLeftPanel(true)
  }
  const hidePannel = () => {
    localStorage.setItem('statusOfLeftPanel', 'false');
    setIsLeftPanel(false)
  }

  const onClickMenuItem = async (e) => {
    const label = items.find((item) => item.key === e.key).label;
    localStorage.setItem('leftPrevMenu', e.key);
    localStorage.setItem('prevMenuTitle', label);
    setCurrentMenuItem(e.key);
    setMenuTitle(label);
    localStorage.setItem('statusOfLeftPanel', 'false');
    setIsLeftPanel(false);
  };

  const handleClickExpandButton = (value, label) => {
    localStorage.setItem('leftPrevMenu', value);
    localStorage.setItem('prevMenuTitle', label);
    setCurrentMenuItem(value);
    setMenuTitle(label);
    setShowFloatButtons(false);
  }

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
    <>
      <Sider width={isLeftPanel ? 300 : 0} theme="dark" style={{ backgroundColor: '#00162A' }}>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                horizontalItemSelectedColor: '#fe34fe',
                itemHoverColor: 'rgba(0, 0, 0, 0.88)'
              }
            },
          }}
        >
          <Box></Box>
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
        </ConfigProvider>
        {isLeftPanel &&
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button
              style={{ width: '35px', padding: 0, height: 100, position: 'absolute', right: 0, bottom: 24, borderRadius: '50px 0px 0px 50px' }}
              type="primary"
              onClick={() => hidePannel()}
              icon={<BrannIcon icon={faAnglesLeft} color="white" />}
            />
          </ConfigProvider>
        }
      </Sider>
      {!isLeftPanel &&
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button
            style={{ width: '35px', padding: 0, height: 100, position: 'absolute', left: 0, bottom: 24, borderRadius: '0px 50px 50px 0px' }}
            type="primary"
            onMouseOver={() => setShowFloatButtons(true)}
            onClick={() => handleShowPanel()}
            icon={<BrannIcon icon={faAnglesRight} color="white" />}
          />
          {showFloatButtons &&
            <>
              <FloatButton style={{ left: 10, bottom: 590 }} icon={<BrannIcon icon={faPlus} />} onClick={() => handleClickExpandButton('/oversikt', 'Create Project')} tooltip="Create Project" />
              <FloatButton style={{ left: 10, bottom: 540 }} icon={<BrannIcon icon={faClipboard} />} onClick={() => handleClickExpandButton('/bygg', 'Project Summary')} tooltip="Project Summary" />
              <FloatButton style={{ left: 10, bottom: 490 }} icon={<BrannIcon icon={faInfo} />} onClick={() => handleClickExpandButton('/oppgaver', 'Task Details')} tooltip="Task Details" />
              <FloatButton style={{ left: 10, bottom: 440 }} icon={<BrannIcon icon={faPeopleGroup} />} onClick={() => handleClickExpandButton('/avvik', 'Project GPT')} tooltip="Project GPT" />
              <FloatButton style={{ left: 10, bottom: 390 }} icon={<BrannIcon icon={faHeartPulse} />} onClick={() => handleClickExpandButton('/innstillinger', 'TimeLines, Budget, Resources')} tooltip="TimeLines, Budget, Resources" />
              <FloatButton style={{ left: 10, bottom: 340 }} icon={<BrannIcon icon={faStrikethrough} />} onClick={() => handleClickExpandButton('/loggut', 'Risks and Mitigations')} tooltip="Risks and Mitigations" />
              <FloatButton style={{ left: 10, bottom: 290 }} icon={<BrannIcon icon={faPassport} />} onClick={() => handleClickExpandButton('/issues', 'Issues Management')} tooltip="Issues Management" />
              <FloatButton style={{ left: 10, bottom: 240 }} icon={<BrannIcon icon={faSpa} />} onClick={() => handleClickExpandButton('/test-plans', 'Test Plans')} tooltip="Test Plans" />
              <FloatButton style={{ left: 10, bottom: 190 }} icon={<BrannIcon icon={faComments} />} onClick={() => handleClickExpandButton('/release-note', 'Release Notes')} tooltip="Release Notes" />
              <FloatButton style={{ left: 10, bottom: 140 }} icon={<BrannIcon icon={faBookOpen} />} onClick={() => handleClickExpandButton('/meeting-notebook', 'Meeting Notebook')} tooltip="Meeting Notebook" />

            </>
          }
        </ConfigProvider>
      }

    </>
  );
}