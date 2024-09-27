import React, { useEffect, useState } from "react";
import { Typography, Image, Col, Row, Flex } from "antd";
import { useLocalizedConfig } from "../components/Config";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../App";

const { Title, Paragraph } = Typography;

const ProjectDetail = () => {
  const configs = useLocalizedConfig("projects.config.json");
  const { projectName } = useParams();
  const [index, setIndex] = useState();
  const navigate = useNavigate();

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
      <Flex style={{ padding: "0 40px" }} horizontal justify="space-between">
        {configs && index - 1 >= 0 ? (
          <a
            onClick={() => {
              navigate(`/project/${configs.projects[index - 1].imagePath}`);
              navigate(0);
            }}
          >
            {" "}
            <Flex horizontal>
              <Title style={{ color: "white", lineHeight: "60px" }}>
                {"<"}
              </Title>
              <Flex vertical style={{ paddingLeft: "20px" }}>
                <a
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    width: "80%",
                    fontSize: "40px",
                    fontFamily: "oswald",
                  }}
                >
                  {configs && configs.projects[index - 1].name}
                </a>
              </Flex>
            </Flex>
          </a>
        ) : (
          <p style={{ width: "50%" }}></p>
        )}
        {configs && index + 1 < configs.projects.length ? (
          <a
            onClick={() => {
              navigate(`/project/${configs.projects[index + 1].imagePath}`);
              navigate(0);
            }}
          >
            {" "}
            <Flex horizontal justify="flex-end">
              <Flex vertical style={{ marginRight: "20px" }}>
                <a
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "40px",
                    fontFamily: "oswald",
                    textAlign: "end",
                  }}
                >
                  {configs && configs.projects[index + 1].name}
                </a>
              </Flex>
              <Title style={{ color: "white", lineHeight: "60px" }}>
                {">"}
              </Title>
            </Flex>
          </a>
        ) : (
          <p style={{ width: "50%" }}></p>
        )}
      </Flex>
    </div>
  );
};

export default ProjectDetail;
