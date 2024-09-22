import React from "react";
import { Typography, Layout, Image, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

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
  return (
    <Content style={contentStyle}>
      <Title
        level={3}
        style={{
          textAlign: "center",
          fontFamily: "Space Mono",
          color: "white",
        }}
      >
        We devour everything.
      </Title>
      <Image
        preview={false}
        width={"100%"}
        src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/d5f2e10d-1258-4212-a93c-2377ffc75fac/DSC09062.jpg?format=1000w"
      />
      <div>
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
                A life force we’re after
              </Title>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontFamily: "Space Mono",
                  color: "white",
                }}
              >
                Philosopher-turned choreographers and dancers Yinqi and Maggie
                have finally found out that it is a Nietzschean life force that
                they’re after. So commonly found in nature, that primal energy
                is depleting in contemporary times. To them, this fictitious yet
                critical essence only materializes as they dance and make dance.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontFamily: "Space Mono",
                  color: "white",
                }}
              >
                Imbued with this power, they consult their imagination to
                construct wild realities on stage. They also turn to the
                instruments of their bodies to research the myriad ways they can
                move across time and space.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontFamily: "Space Mono",
                  color: "white",
                }}
              >
                This is the life force they’re after — a force that is at once
                terrifying and beautiful, destructive and creative, chaotic and
                sublime.
              </Paragraph>
            </Col>
            <Col span={11} offset={0} style={{ padding: "60px 40px" }}>
              <Image
                preview={false}
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/afa14b5a-4d39-412b-ac66-c956be31394d/IMG_5363.jpg?format=1000w"
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "-400px" }}>
            <Col span={10} offset={5}>
              <Image
                preview={false}
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/d395eb12-6d4e-4900-8c42-bcf16ad45985/IMG_6279.jpg?format=1000w"
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
                src="https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/73e47f86-4ae9-4709-baaa-4ae61ab8d6fb/IMG_5464.jpg?format=1000w"
              />
            </Col>
          </Row>
        </>
      </div>
    </Content>
  );
};

export default Home;
