import React, { useEffect, useState } from "react";
import { Typography, Card, Col, Row, Flex, Button } from "antd";
import { useLocalizedConfig } from "../components/Config";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const Schedule = () => {
  const configs = useLocalizedConfig("schedules.config.json");
  const navigate = useNavigate();

  return (
    <div>
      <>
        <Row>
          <Col
            span={24}
            style={{
              padding: "300px 0",
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/66c9fa6ef7f1d5548ace346b/83c34c2c-3235-4f78-9cb2-0e017a63c14b/IMG_5446.jpg?format=2500w)",
            }}
          >
            <Flex justify="center">
              <Title
                level={1}
                style={{
                  fontFamily: "Oswald",
                  fontSize: 150,
                  color: "white",
                }}
              >
                SCHEDULE
              </Title>
            </Flex>
          </Col>
        </Row>
        <Row gutter={16} style={{ backgroundColor: "black" }}>
          {configs &&
            configs.schedules.map((item) => {
              const date = new Date(item.date);

              return (
                <Col span={8}>
                  <div style={{ backgroundColor: "black", margin: 50 }}>
                    <Flex>
                      <div
                        style={{
                          backgroundColor: "lightgray",
                          height: 70,
                          width: 70,
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            color: "black",
                            fontSize: 20,
                            margin: "6px 0 6px",
                            fontFamily: "Space Mono",
                          }}
                        >
                          {date
                            .toLocaleString("default", { month: "long" })
                            .slice(0, 3)}
                        </p>
                        <p
                          style={{
                            color: "black",
                            fontSize: 28,
                            fontFamily: "Space Mono",
                          }}
                        >
                          {date.getDate()}
                        </p>
                      </div>
                      <Flex
                        justify="space-between"
                        vertical
                        style={{ marginLeft: 35 }}
                      >
                        <Link to={`/schedule/${item.path}`}>
                          <Title
                            level={4}
                            style={{
                              color: "white",
                              margin: 0,
                              fontFamily: "oswald",
                            }}
                          >
                            {item.name}
                          </Title>
                        </Link>

                        <Title
                          level={5}
                          style={{
                            color: "white",
                            fontWeight: 100,
                            fontFamily: "Space Mono",
                          }}
                        >
                          {item.timeFrom} - {item.timeTo}
                        </Title>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            borderRadius: "0",
                            marginTop: "10px",
                            padding: "25px",
                            fontFamily: "Space Mono",
                            width: "150px",
                          }}
                          onClick={() => {
                            navigate(`/schedule/${item.path}`);
                          }}
                        >
                          {"View Event ->"}
                        </Button>
                      </Flex>
                    </Flex>
                  </div>
                </Col>
              );
            })}
        </Row>
      </>
    </div>
  );
};

export default Schedule;
