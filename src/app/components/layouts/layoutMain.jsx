"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme, Col } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HeaderMain from "./header";
import SiderMenu from "./menu";
const { Header, Content, Footer, Sider } = Layout;

export default function LayoutMain({ children }) {
  return (
    <Layout style={{ height: "100%" }}>
      <HeaderMain />
      <Layout style={{ height: "100%" }}>
        <Col xs={0} sm={5} md={5} lg={5} style={{ height: "100%" }}>
          <SiderMenu />
        </Col>
        {children}
      </Layout>
    </Layout>
  );
}
