"use client";

import "./css/login.css";
import { Castoro } from "@next/font/google";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import Image from "next/image";
// import LoginLayout from "./layout";

const castoro = Castoro({ subsets: ["latin"], weight: "400", style: "italic" });
const { Title } = Typography;

export default function LoginPage() {
  return (
    <>
      <Row
        style={{
          height: "100%",
          background: "#243831",
          flexWrap: "wrap-reverse",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={13}
          lg={13}
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <Row justify="center">
            <Col xs={22} sm={22} md={12} lg={12}>
              <Form autoComplete="off">
                <Col style={{textAlign: "left"}}>
                  <Title level={2} style={{ color: "#FFFFFF" }}>
                    Sign in
                  </Title>
                </Col>

                <Form.Item name={"username"}>
                  <Input
                    placeholder="Username"
                    style={{
                      height: "44px",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      height: "40px",
                      background: "#49A569",
                    }}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
        {/*  */}
        <Col
          xs={24}
          sm={24}
          md={11}
          lg={11}
          className="custom-col-logo"
          style={{
            background: "#2B5F44",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Col
            className={castoro.className}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/img/loginlogo.png"
              alt="Login logo"
              width={300}
              height={230}
            />
            <span style={{ fontSize: "20px", color: "#FFFFFF" }}>a Board</span>
          </Col>
        </Col>
      </Row>
    </>
  );
}
