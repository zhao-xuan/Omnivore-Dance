import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import "./css/homepage.css";
import Projects from "./pages/Projects";
import axios from "axios";
import { LanguageContextProvider } from "./components/LanguageProvider";

import "@fontsource/space-mono"; // Defaults to weight 400
import "@fontsource/space-mono/400.css"; // Specify weight
import "@fontsource/space-mono/400-italic.css"; // Specify weight and style

import React, { useState } from "react";
import { Typography, Button, Flex, Layout, Form, Input } from "antd";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const { Title, Text } = Typography;
const { Header, Footer } = Layout;

const headerStyle = {
  height: "100px",
  paddingInline: 20,
  lineHeight: "100px",
  backgroundColor: "black",
};

const footerStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "black",
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

axios.defaults.baseURL =
  "https://raw.githubusercontent.com/zhao-xuan/Omnivore-Dance/refs/heads/main/omnivore-dance/src/";

function App() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Flex>
      <Layout>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <LanguageContextProvider>
          <Projects />
        </LanguageContextProvider>

        <Footer style={footerStyle}>
          <Title
            level={1}
            style={{
              color: "white",
              fontFamily: "Oswald",
            }}
          >
            CONTACT US
          </Title>
          <Title
            level={4}
            style={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Space Mono",
              padding: "0 30%",
            }}
          >
            Stay in the loop for our latest performances, events and workshops!
          </Title>
          <Form
            name="nest-messages"
            onFinish={onFinish}
            style={{}}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "email"]}
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Text
                style={{
                  display: "block",
                  padding: "20px 0",
                  fontFamily: "Space Mono",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Email: (required)
              </Text>
              <Input style={{ width: 400, borderRadius: 0 }} />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "0",
                  padding: "30px",
                  fontFamily: "Space Mono",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          <Flex justify="center">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              style={{ padding: "10px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              style={{ padding: "10px" }}
            />
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              size="lg"
              style={{ padding: "10px" }}
            />
          </Flex>

          <Flex justify="space-between">
            <Title level={5} style={{ color: "white" }}>
              2024 - Infinity
            </Title>
            <Title level={5} style={{ color: "white" }}>
              Designed and Made by Tom Zhao
            </Title>
          </Flex>
        </Footer>
      </Layout>
    </Flex>
  );
}

export default App;
