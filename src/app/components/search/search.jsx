"use client";

import { Row, Col, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Search() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Row gutter={[16, 8]} style={{ alignItems: "center" }}>
      <Col xs={24} sm={24} md={12} lg={15}>
        <Input prefix={<SearchOutlined />} placeholder="Search" allowClear />
      </Col>
      <Col xs={12} sm={12} md={7} lg={5} style={{ textAlign: "center" }}>
        <Select
          showSearch
          placeholder="Community"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
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
      <Col xs={12} sm={12} md={5} lg={4} style={{ textAlign: "center" }}>
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
        >
          Create +
        </Button>
      </Col>
    </Row>
  );
}
