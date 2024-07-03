"use client";
import { Layout, Col } from "antd";

const { Content } = Layout;

export default function ContentMain({ children }) {
  return (
    <>
      <Col xs={24} sm={12} md={12} lg={12} style={{padding: "0px 15px"}}>
        <Content style={{ padding: "32px 0px 0px 0px" }}>{children}</Content>
      </Col>
    </>
  );
}
