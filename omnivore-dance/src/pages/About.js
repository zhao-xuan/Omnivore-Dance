import React, { useEffect, useState } from "react";
import { Typography, Image, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useLocalizedConfig } from "../components/Config";
import { BASE_URL } from "../App";

const { Title } = Typography;

const About = () => {
  const configs = useLocalizedConfig("about.config.json");
  const [text, setText] = useState();

  useEffect(() => {
    if (configs) {
      setText(configs);
    }
  }, [configs]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Col
            span={12}
            style={{ padding: "80px", paddingRight: 0, height: "200%" }}
          >
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
            <Paragraph
              style={{
                fontSize: "16px",
                fontFamily: "Space Mono",
                color: "white",
              }}
            >
              {text && text.introduction}
            </Paragraph>
          </Col>
          <Col span={12}>
            <Image
              preview={false}
              src={BASE_URL + "images/about/about-cover.jpg"}
            />
          </Col>
        </Row>
        <Row>
          <Col span={14} style={{ padding: "80px 0px 0px 120px" }}>
            <div style={{ position: "relative", top: 0, left: 0 }}>
              <Image
                preview={false}
                style={{
                  borderRadius: "30px",
                  position: "relative",
                  top: 0,
                  left: 0,
                }}
                src={BASE_URL + "images/about/about-intro-image-cover.jpg"}
              />
              <img
                preview={false}
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  top: "30px",
                  left: "20px",
                }}
                src={BASE_URL + "images/about/about-intro-image.png"}
              />
            </div>
          </Col>
          <Col span={10} style={{ padding: "80px 60px", paddingRight: "80px" }}>
            <Title
              level={1}
              style={{
                fontFamily: "Oswald",
                fontSize: 50,
                color: "white",
              }}
            >
              {text && text.secondaryTitle}
            </Title>
            {text &&
              text.secondaryIntro.map((item) => (
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
        </Row>
        <Row style={{ padding: "50px" }}>
          {text &&
            text.profiles.map((item) => (
              <>
                <Col span={4}>
                  <Image
                    preview={false}
                    width={"100%"}
                    style={{
                      borderRadius: "50%",
                      height: "290px",
                      width: "250px",
                      margin: "30px",
                    }}
                    src={BASE_URL + "images/about/" + item.photo}
                  />
                </Col>
                <Col span={8} style={{ padding: "80px", paddingRight: 0 }}>
                  <Title
                    level={1}
                    style={{
                      fontFamily: "Oswald",
                      fontSize: 40,
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "14px",
                      fontFamily: "Space Mono",
                      color: "white",
                    }}
                  >
                    {item.intro}
                  </Paragraph>
                </Col>
              </>
            ))}
        </Row>
      </>
    </div>
  );
};

export default About;
