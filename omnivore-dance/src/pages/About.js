import React from "react";
import { Typography, Image, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;

const About = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Col span={12} style={{ padding: "80px", paddingRight: 0 }}>
            <Title
              level={1}
              style={{
                fontFamily: "Oswald",
                fontSize: 50,
                color: "white",
              }}
            >
              We are…
            </Title>
            <Paragraph
              style={{
                fontSize: "16px",
                fontFamily: "Space Mono",
                color: "white",
              }}
            >
              a funny performance duo. More professionally speaking, we are a
              performance duo that is willing to laugh at ourselves, to take
              bold risks, and to speak truths that are tucked away in our bodies
              and in the world.
            </Paragraph>
          </Col>
          <Col span={12}>
            <Image
              preview={false}
              width={"100%"}
              src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/99ceb54e-c3d2-428f-b76b-d9c1c4f0a2c3/DSC09408.jpg?format=2500w"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Image
              preview={false}
              width={"100%"}
              src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/99ceb54e-c3d2-428f-b76b-d9c1c4f0a2c3/DSC09408.jpg?format=2500w"
            />
          </Col>
          <Col span={12} style={{ padding: "80px", paddingRight: 0 }}>
            <Title
              level={1}
              style={{
                fontFamily: "Oswald",
                fontSize: 50,
                color: "white",
              }}
            >
              We are…
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Image
              preview={false}
              width={"100%"}
              src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/99ceb54e-c3d2-428f-b76b-d9c1c4f0a2c3/DSC09408.jpg?format=2500w"
            />
          </Col>
          <Col span={8} style={{ padding: "80px", paddingRight: 0 }}>
            <Title
              level={1}
              style={{
                fontFamily: "Oswald",
                fontSize: 50,
                color: "white",
              }}
            >
              We are…
            </Title>
          </Col>
          <Col span={4}>
            <Image
              preview={false}
              width={"100%"}
              src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/99ceb54e-c3d2-428f-b76b-d9c1c4f0a2c3/DSC09408.jpg?format=2500w"
            />
          </Col>
          <Col span={8} style={{ padding: "80px", paddingRight: 0 }}>
            <Title
              level={1}
              style={{
                fontFamily: "Oswald",
                fontSize: 50,
                color: "white",
              }}
            >
              We are…
            </Title>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default About;
