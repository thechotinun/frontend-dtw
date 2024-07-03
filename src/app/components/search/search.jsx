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
    <Row gutter={16} style={{ alignItems: "center" }}>
      <Col span={15}>
        <Input prefix={<SearchOutlined />} placeholder="Search" allowClear />
      </Col>
      <Col span={5}>
        <Select
          showSearch
          placeholder="Community"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{
            width: "100%"
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
      <Col span={4} style={{ textAlign: "center" }}>
        <Button
          style={{
            color: "#FFFFFF",
            width: "105px",
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
