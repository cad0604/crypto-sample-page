import React, { useEffect, useState } from "react";
import { Button, Layout, ConfigProvider, Menu, FloatButton } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import { faAnglesLeft, faAnglesRight, faCalendarDay, faJoint, faMessage, faNotesMedical, faTasks } from "@fortawesome/free-solid-svg-icons";
import BrannTitle from "components/ui/typo/Title";

const { Sider } = Layout;

const colors1 = ['#a191e7', '#676b6d'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());


export default function BrannRightSider() {
  const statusOfRightPanel = localStorage.getItem('statusOfRightPanel') ? localStorage.getItem('statusOfRightPanel') === 'true' ? true : false : false;
  const rightPrevMenu = localStorage.getItem('rightPrevMenu') ? localStorage.getItem('rightPrevMenu') : '/oversikt';
  const prevMenuTitle = localStorage.getItem('rightPrevMenuTitle') ? localStorage.getItem('rightPrevMenuTitle') : "Notifications";
  const [isLeftPanel, setIsLeftPanel] = useState(statusOfRightPanel);
  const [currentMenuItem, setCurrentMenuItem] = useState(rightPrevMenu);
  const [showFloatButtons, setShowFloatButtons] = useState(false);
  const [showPurpleInFloatButtons, setShowPurpleInFloatButtons] = useState(false);
  const [menuTitle, setMenuTitle] = useState(prevMenuTitle);
  const [showPurpleOut, setShowPurpleOut] = useState(statusOfRightPanel);
  const [showItems, setShowItems] = useState(true);

  const mouseMove = (e) => {
    if (showFloatButtons === true) {
      if ((window.innerWidth - e.clientX) > 60 || (window.innerHeight - e.clientY) > 420)
        setShowFloatButtons(false);
    }
    if (showPurpleInFloatButtons === true) {
      if ((window.innerWidth - e.clientX) > 360 || (window.innerWidth - e.clientX) < 260 || (window.innerHeight - e.clientY) > 420)
        setShowPurpleInFloatButtons(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  })

  const hidePannel = () => {
    localStorage.setItem('statusOfRightPanel', 'false');
    setIsLeftPanel(false)
    setTimeout(() => {
      setShowPurpleOut(false);
    }, 120)
  }

  const handleShowPanel = () => {
    localStorage.setItem('statusOfRightPanel', 'true');
    setShowItems(true);
    setIsLeftPanel(true);
    setShowPurpleOut(true)
  }
  const onClickMenuItem = (e) => {
    const label = items.find((item) => item.key === e.key).label;
    localStorage.setItem('rightPrevMenu', e.key);
    localStorage.setItem('rightPrevMenuTitle', label);
    setMenuTitle(label);
    localStorage.setItem('statusOfRightPanel', 'true');
    setCurrentMenuItem(e.key);
    setShowItems(false);
    setIsLeftPanel(false);
    setTimeout(() => {
      setIsLeftPanel(true)
    }, 500);
  };

  const handleClickExpandButton = (value, label) => {
    localStorage.setItem('rightPrevMenu', value);
    localStorage.setItem('statusOfRightPanel', 'true');
    localStorage.setItem('rightPrevMenuTitle', label);
    setShowItems(false);
    setMenuTitle(label);
    setCurrentMenuItem(value);
    setIsLeftPanel(true);
    setShowPurpleOut(true);
  }

  const handleClickExpandButtonInPull = (value, label) => {
    localStorage.setItem('rightPrevMenu', value);
    localStorage.setItem('prevMenuTitle', label);
    setShowItems(false);
    setMenuTitle(label);
    setCurrentMenuItem(value);
    setShowPurpleOut(true);
    setShowPurpleInFloatButtons(false);
    setIsLeftPanel(false);
    setTimeout(() => {
      setIsLeftPanel(true)
    }, 250);
  }
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
    <>
      <Sider width={isLeftPanel ? 300 : 0} theme="dark" style={{ backgroundColor: '#00162A' }}>
        <View className="brann-logo-wrapper">
          <BrannTitle text={menuTitle} style={{ color: '#F0F0F0', fontSize: '1.5rem', marginLeft: '2rem' }} />

        </View>
        <Menu
          onClick={onClickMenuItem}
          items={showItems ? items : []}
          theme="dark"
          mode="inline"
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[currentMenuItem]}
          style={{ fontSize: 16, color: '#FFFFFF', backgroundColor: '#00162A' }}
        />
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
              style={{ width: '35px', padding: 0, height: 100, position: 'absolute', left: 0, bottom: 24, borderRadius: '0px 50px 50px 0px' }}
              type="primary"
              onMouseOver={() => setShowPurpleInFloatButtons(true)}
              onClick={() => hidePannel()}
              icon={<BrannIcon icon={faAnglesRight} color="white" />}
            />
            {showPurpleInFloatButtons &&
              <>
                <FloatButton style={{ right: 310, bottom: 340 }} icon={<BrannIcon icon={faMessage} />} onClick={() => handleClickExpandButtonInPull('/micro-notifications', 'Notifications')} tooltip="Notifications" />
                <FloatButton style={{ right: 310, bottom: 290 }} icon={<BrannIcon icon={faNotesMedical} />} onClick={() => handleClickExpandButtonInPull('/side-notes', 'Side Notes')} tooltip="Side Notes" />
                <FloatButton style={{ right: 310, bottom: 240 }} icon={<BrannIcon icon={faJoint} />} onClick={() => handleClickExpandButtonInPull('/channels', 'Channels')} tooltip="Channels" />
                <FloatButton style={{ right: 310, bottom: 190 }} icon={<BrannIcon icon={faTasks} />} onClick={() => handleClickExpandButtonInPull('/tasks', 'Tasks')} tooltip="Tasks" />
                <FloatButton style={{ right: 310, bottom: 140 }} icon={<BrannIcon icon={faCalendarDay} />} onClick={() => handleClickExpandButtonInPull('/schedule', 'Schedule')} tooltip="Schedule" />
              </>
            }
          </ConfigProvider>
        }
      </Sider>
      {!showPurpleOut &&
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
            onMouseOver={() => setShowFloatButtons(true)}
            onClick={() => handleShowPanel()}
            icon={<BrannIcon icon={faAnglesLeft} color="white" />}
          />
          {showFloatButtons &&
            <>
              <FloatButton style={{ right: 10, bottom: 340 }} icon={<BrannIcon icon={faMessage} />} onClick={() => handleClickExpandButton('/micro-notifications', 'Notifications')} tooltip="Notifications" />
              <FloatButton style={{ right: 10, bottom: 290 }} icon={<BrannIcon icon={faNotesMedical} />} onClick={() => handleClickExpandButton('/side-notes', 'Side Notes')} tooltip="Side Notes" />
              <FloatButton style={{ right: 10, bottom: 240 }} icon={<BrannIcon icon={faJoint} />} onClick={() => handleClickExpandButton('/channels', 'Channels')} tooltip="Channels" />
              <FloatButton style={{ right: 10, bottom: 190 }} icon={<BrannIcon icon={faTasks} />} onClick={() => handleClickExpandButton('/tasks', 'Tasks')} tooltip="Tasks" />
              <FloatButton style={{ right: 10, bottom: 140 }} icon={<BrannIcon icon={faCalendarDay} />} onClick={() => handleClickExpandButton('/schedule', 'Schedule')} tooltip="Schedule" />
            </>
          }
        </ConfigProvider >
      }

    </>
  );
}
