"use client";

import "./css/search.css"
import React, { useState } from "react";
import { Row, Col, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CreatePost from "../modal-post/create-post";


export default function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row gutter={[16, 8]} style={{ alignItems: "center" }}>
      <Col xs={24} sm={24} md={12} lg={15} className="inp-search">
        <Input prefix={<SearchOutlined />} placeholder="Search" allowClear />
      </Col>
      <Col xs={6} sm={24} md={12} lg={15} className="icon-search">
        <SearchOutlined />
      </Col>
      <Col xs={10} sm={12} md={7} lg={5} style={{ textAlign: "right" }}>
        <Select
          placeholder="Community"
          optionFilterProp="label"
          onChange={onChange}
          style={{
            width: "100%",
            maxWidth: "128px",
          }}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </Col>
      <Col xs={8} sm={12} md={5} lg={4} style={{ textAlign: "right" }}>
        <Button
          style={{
            color: "#FFFFFF",
            width: "100%",
            maxWidth: "105px",
            height: "40px",
            borderRadius: "8px",
            borderColor: "#49A569",
            backgroundColor: "#49A569",
          }}
          onClick={()=>{
            setIsModalOpen(!isModalOpen);
          }}
        >
          Create +
        </Button>
      </Col>
      <CreatePost isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </Row>
  );
}
