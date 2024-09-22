import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Typography, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import { useLocation } from "react-router-dom";

const { Title } = Typography;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  // let { pathname: location } = useLocation();
  // useEffect(() => {
  //   setVisible(false);
  // }, [location]);
  // Upto here

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        height: "100px",
        lineHeight: "100px",
      }}
    >
      <Flex style={{ width: "30%" }}>
        <Button
          type="link"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Space Mono",
          }}
        >
          ABOUT
        </Button>
        <Button
          type="link"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Space Mono",
          }}
        >
          PROJECTS
        </Button>
        <Button
          type="link"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Space Mono",
          }}
        >
          SCHEDULE
        </Button>
        {/* </div> */}
      </Flex>
      <Title
        level={2}
        style={{
          color: "white",
          margin: 0,
          width: "30%",
          textAlign: "center",
          fontFamily: "Oswald",
        }}
      >
        Omnivore Dance
      </Title>
      <Flex style={{ width: "30%", justifyContent: "flex-end" }}>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "0",
            padding: "30px",
            fontFamily: "Space Mono",
          }}
        >
          Subscribe
        </Button>
      </Flex>

      {/* <Button className="menuButton" type="text" onClick={showDrawer}>
        <MenuOutlined />
      </Button> */}

      <Drawer
        title={"Brand Here"}
        placement="right"
        closable={true}
        onClose={showDrawer}
        visible={visible}
        style={{ zIndex: 99999 }}
      >
        {/* <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} /> */}
      </Drawer>
    </Flex>
  );
};

export default Navbar;
