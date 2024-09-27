import React from "react";
import { Typography, Image, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;

const Gallery = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Col span={12} style={{ padding: "80px", paddingRight: 0 }}></Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Image />
          </Col>
          <Col>
            <Image />
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph></Paragraph>
          </Col>
          <Col>
            <Paragraph></Paragraph>
          </Col>
        </Row>
        <Row>
          <Flex>
            <Button></Button>
            <Button></Button>
          </Flex>
        </Row>
      </>
    </div>
  );
};

export default Gallery;
