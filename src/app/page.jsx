"use client";

import { Layout, Col } from "antd";
import Search from "./components/search/search";
import Card from "./components/card-post/card";
import LayoutMain from "./components/layouts/layoutMain";

const { Content } = Layout;

export default function Home() {
  return (
    <LayoutMain>
      <Col xs={24} sm={18} md={18} lg={18}>
        <Content style={{padding: "24px 15px 24px 15px",}}>
          <Search />
          <Card />
        </Content>
      </Col>
    </LayoutMain>
  );
}
