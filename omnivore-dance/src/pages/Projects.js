import React from "react";
import { Typography, Image, Col, Row } from "antd";
import PhotoGallery from "../components/PhotoGallery";

const { Title } = Typography;

const Projects = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <>
        <Row>
          <Title
            level={2}
            style={{
              color: "white",
              fontFamily: "oswald",
              padding: "20px 18%",
            }}
          >
            Driven by a naive passion to move, a keen desire to express, and a
            strong dedication for physical research…
          </Title>
        </Row>
        <Row>
          <PhotoGallery />
        </Row>
      </>
    </div>
  );
};

export default Projects;
