import React, { useEffect, useState } from "react";
import { Typography, Image, Col, Row } from "antd";
import { useLocalizedConfig } from "../components/Config";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";

const { Title, Paragraph } = Typography;

const ProjectDetail = () => {
  const configs = useLocalizedConfig("projects.config.json");
  const { projectName } = useParams();
  const [index, setIndex] = useState();

  useEffect(() => {
    if (configs) {
      const index = configs.projects.findIndex(
        (element) => element.imagePath === projectName
      );
      setIndex(index);
    }
  }, [configs]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Row>
        <Title
          level={1}
          style={{
            color: "white",
            fontFamily: "oswald",
            padding: "40px 14% 10px",
            textAlign: "center",
            backgroundImage:
              index !== undefined &&
              "url(" +
                BASE_URL +
                `images/projects/${configs.projects[index].imagePath}/overlay.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            width: "100%",
            height: "450px",
          }}
        >
          {index !== undefined && configs.projects[index].name}
        </Title>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Paragraph
            style={{
              fontSize: "14px",
              fontFamily: "Space Mono",
              color: "white",
              marginBottom: "80px",
            }}
          >
            {index !== undefined && configs.projects[index].description}
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[10, 10]} style={{ padding: "0 20px 60px" }}>
        {index !== undefined &&
          Array.from({ length: configs.projects[index].imageCount }).map(
            (_, i) => (
              <Col span={12}>
                <Image
                  preview={false}
                  width={"100%"}
                  src={
                    BASE_URL +
                    `images/projects/${
                      configs.projects[index].imagePath
                    }/image-${i + 1}.jpg`
                  }
                />
              </Col>
            )
          )}
      </Row>
    </div>
  );
};

export default ProjectDetail;
