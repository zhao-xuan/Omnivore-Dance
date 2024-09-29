import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import ScheduleDetail from "./pages/ScheduleDetail";
import "./css/homepage.css";
import Projects from "./pages/Projects";
import axios from "axios";
import { LanguageContextProvider } from "./components/LanguageProvider";

import "@fontsource/space-mono"; // Defaults to weight 400
import "@fontsource/space-mono/400.css"; // Specify weight
import "@fontsource/space-mono/400-italic.css"; // Specify weight and style

import React, { useState, useEffect } from "react";
import { Typography, Button, Flex, Layout, Form, Input } from "antd";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

const headerStyle = {
  height: "100px",
  paddingInline: 20,
  lineHeight: "100px",
  backgroundColor: "black",
  position: "sticky",
  top: 0,
  zIndex: 99,
  alignItems: "center",
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

export const BASE_URL =
  "https://raw.githubusercontent.com/omnivore-dance/omnivore-dance.github.io/refs/heads/main/";

axios.defaults.baseURL = BASE_URL;

function App() {
  const [current, setCurrent] = useState("mail");

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <Content>
          <LanguageContextProvider>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/projects" Component={Projects} />
              <Route path="/schedules" Component={Schedule} />
              <Route path="/project/:projectName" Component={ProjectDetail} />
              <Route
                path="/schedule/:scheduleName"
                Component={ScheduleDetail}
              />
            </Routes>
          </LanguageContextProvider>
        </Content>
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
            <a
              href="https://www.instagram.com/xiao_liang_xiao/"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ padding: "10px" }}
              />
            </a>

            <a
              href="https://www.instagram.com/wang_yinqi_dance/"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ padding: "10px" }}
              />
            </a>
            <a
              href="https://www.gofundme.com/f/bring-ominvore-dances-bold-performance-to-your-city"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                size="lg"
                style={{ padding: "10px" }}
              />
            </a>
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
    </Router>
  );
}

export default App;
