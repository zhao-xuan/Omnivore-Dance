import React from "react";
import { Typography, Image, Col, Row } from "antd";
import PhotoGallery from "../components/PhotoGallery";

const { Title } = Typography;

const Projects = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Title level={1}></Title>
        </Row>
        <Row>
          <PhotoGallery />
        </Row>
      </>
    </div>
  );
};

export default Projects;
