"use client";

import React, { useState, useEffect } from "react";
import { Layout, Col } from "antd";
import Search from "../components/search/search";
import Card from "../components/card-post/card";
import LayoutMain from "../components/layouts/layoutMain";

const { Content } = Layout;

export default function OurBlog() {
  const [ isOurBlog, setIsOurBlog ] = useState(false);

  useEffect(()=>{
    setIsOurBlog(true);
  },[])

  return (
    <LayoutMain>
      <Col xs={24} sm={14} md={14} lg={14}>
        <Content style={{ padding: "24px 15px 24px 15px" }}>
          <Search />
          <Card isOurBlog={isOurBlog}/>
        </Content>
      </Col>
    </LayoutMain>
  );
}
