import React from "react";
import { Typography, Image, Col, Row } from "antd";
import PhotoGallery from "../components/PhotoGallery";
import { useLocalizedConfig } from "../components/Config";

const { Title } = Typography;

const Projects = () => {
  const configs = useLocalizedConfig("projects.config.json");

  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Title
            level={1}
            style={{
              color: "white",
              fontFamily: "oswald",
              padding: "40px 14% 10px",
              textAlign: "center",
            }}
          >
            {configs && configs.slogan}
          </Title>
        </Row>
        <Row>
          <Col span={24}>
            <PhotoGallery />
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Projects;
