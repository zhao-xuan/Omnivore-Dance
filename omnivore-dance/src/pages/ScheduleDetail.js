import React, { useEffect, useState } from "react";
import { Typography, Card, Col, Row, Flex, Button } from "antd";
import { useLocalizedConfig } from "../components/Config";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../App";
import Paragraph from "antd/es/skeleton/Paragraph";

const { Title } = Typography;

const ScheduleDetail = () => {
  const configs = useLocalizedConfig("schedules.config.json");
  const { scheduleName } = useParams();
  const [index, setIndex] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (configs) {
      const index = configs.schedules.findIndex(
        (element) => element.path === scheduleName
      );
      setIndex(index);
    }
  }, [configs]);

  return (
    <div>
      <>
        <Row
          gutter={16}
          style={{ backgroundColor: "black", padding: "20px 40px" }}
        >
          <Col span={24}>
            <Button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "0",
                marginTop: "10px",
                padding: "25px",
                fontFamily: "Space Mono",
                width: "150px",
              }}
              onClick={() => {
                navigate(-1);
              }}
            >
              {" "}
              {"<- Back to all events"}{" "}
            </Button>
          </Col>
          <Col span={8}>
            <Title
              level={3}
              style={{ color: "white", margin: 0, fontFamily: "oswald" }}
            >
              {index !== undefined && configs.schedules[index].name}
            </Title>
          </Col>
          <Col span={16} style={{ color: "white", fontFamily: "Space Mono" }}>
            {index !== undefined && configs.schedules[index].description}
          </Col>
          <Col span={24} style={{ marginTop: 60 }}>
            <p style={{ color: "white", fontFamily: "Space Mono" }}>
              {new Date(
                index !== undefined && configs.schedules[index].date
              ).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br />
              {index !== undefined && configs.schedules[index].timeFrom} -{" "}
              {index !== undefined && configs.schedules[index].timeTo}
            </p>
          </Col>
        </Row>
        <Flex
          style={{ backgroundColor: "black", padding: "20px 40px" }}
          justify={"space-between"}
        >
          {configs && index - 1 >= 0 ? (
            <Button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "0",
                marginTop: "10px",
                padding: "25px",
                fontSize: "80px",
                fontFamily: "oswald",
              }}
            >
              {configs && configs.schedules[index - 1].name}
            </Button>
          ) : (
            <></>
          )}
          {configs && index < configs.schedules.length ? (
            <Button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "0",
                marginTop: "10px",
                padding: "25px",
                fontFamily: "Space Mono",
              }}
            >
              {configs && configs.schedules[index].name}
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      </>
    </div>
  );
};

export default ScheduleDetail;
