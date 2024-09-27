import React, { useEffect, useState } from "react";
import { Typography, Layout, Image, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useLocalizedConfig } from "../components/Config";
import { BASE_URL } from "../App";

const { Title } = Typography;
const { Content } = Layout;

const contentStyle = {
  minHeight: 120,
  lineHeight: "120px",
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

const Home = () => {
  const configs = useLocalizedConfig("home.config.json");
  const [text, setText] = useState();

  useEffect(() => {
    if (configs) {
      setText(configs);
    }
  }, [configs]);

  return (
    <Content style={contentStyle}>
      <Title
        level={4}
        style={{
          textAlign: "center",
          fontFamily: "Space Mono",
          color: "white",
          paddingTop: "40px",
        }}
      >
        {text && text.slogan}
      </Title>
      <Image
        preview={false}
        width={"100%"}
        src={BASE_URL + "images/home/home-cover.jpg"}
      />
      <div style={{ paddingBottom: "80px" }}>
        <>
          <Row>
            <Col span={13} style={{ padding: "80px", paddingRight: 0 }}>
              <Title
                level={1}
                style={{
                  fontFamily: "Oswald",
                  fontSize: 50,
                  color: "white",
                }}
              >
                {text && text.title}
              </Title>
              {text &&
                text.content.map((item) => (
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      fontFamily: "Space Mono",
                      color: "white",
                    }}
                  >
                    {item}
                  </Paragraph>
                ))}
            </Col>
            <Col span={11} offset={0} style={{ padding: "60px 40px" }}>
              <Image
                preview={false}
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src={BASE_URL + "images/home/home-intro-1.jpg"}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "-400px" }}>
            <Col span={10} offset={5}>
              <Image
                preview={false}
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src={BASE_URL + "images/home/home-intro-2.jpg"}
              />
            </Col>
            <Col
              span={6}
              offset={0}
              style={{ marginTop: "130px", marginLeft: "-20px" }}
            >
              <Image
                preview={false}
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src={BASE_URL + "images/home/home-intro-3.jpg"}
              />
            </Col>
          </Row>
        </>
      </div>
    </Content>
  );
};

export default Home;
