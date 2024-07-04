"use client";

import { Layout, Col } from "antd";
import LayoutMain from "../../components/layouts/layoutMain";

const { Content } = Layout;

export default function PostDetailLayout({ children }) {
  return (
    <LayoutMain>
      <Content style={{background: "#FFFFFF"}}>{children}</Content>
    </LayoutMain>
  );
}
