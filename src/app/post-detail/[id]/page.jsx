"use client";

import "../../components/card-post/css/card.css";
import React, { useState } from "react";
import { Form, Input, Button, Layout, Typography, Row, Col, Tag } from "antd";
import Image from "next/image";
import { LeftCircleOutlined, CommentOutlined } from "@ant-design/icons";

const { Paragraph, Title, Text } = Typography;

export default function PostDetail({ params }) {
  console.log(params);
  return (
    <Row style={{ background: "#FFFFFF", height: "100%" }}>
      <Col
        xs={{
          flex: "5%",
        }}
        sm={{
          flex: "5%",
        }}
        md={{
          flex: "10%",
        }}
        lg={{
          flex: "10%",
        }}
      ></Col>
      <Col
        xs={{
          flex: "90%",
        }}
        sm={{
          flex: "90%",
        }}
        md={{
          flex: "80%",
        }}
        lg={{
          flex: "80%",
        }}
      >
        <Row>
          <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
            <LeftCircleOutlined style={{ fontSize: "31px" }} />
          </Col>
          <Col>
            <Col
              span={24}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div className="circle" style={{ marginRight: "4px" }}>
                <Image
                  src="/img/1.jpeg"
                  alt="Circle Image"
                  width={31}
                  height={31}
                  className="circleImage"
                />
              </div>
              <Text style={{ color: "#939494" }}>Wittawat</Text>
            </Col>
            <Col span={24}>
              <Tag>History</Tag>
            </Col>
            <Col span={24}>
              <Title level={5}>The Beginning of the End of the World</Title>
            </Col>
            <Col span={24}>
              <Paragraph>
                The afterlife sitcom The Good Place comes to its culmination,
                the show’s two protagonists, Eleanor and Chidi, contemplate
                their future. Having lived thousands upon thousands of lifetimes
                together, and having experienced virtually everything this life
                has to offer, they are weary. It is time for it all to end. The
                show’s solution to this perpetual happiness-cum-weariness is
                extinction. When you have had enough, when you are utterly sated
                by love and joy and pleasure, you can walk through a passage to
                nothingness. And Chidi has had enough.
              </Paragraph>
            </Col>
            <Col
              span={24}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/post-detail/${1}`)}
            >
              <CommentOutlined
                style={{ fontSize: "18px", marginRight: "4px" }}
              />
              <Text>32 Comments</Text>
            </Col>
          </Col>
        </Row>
      </Col>
      <Col
        xs={{
          flex: "5%",
        }}
        sm={{
          flex: "5%",
        }}
        md={{
          flex: "10%",
        }}
        lg={{
          flex: "10%",
        }}
      ></Col>
    </Row>
  );
}
