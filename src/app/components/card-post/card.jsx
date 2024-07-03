"use client";

import { Row, Col, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Card() {

  return (
    <Row style={{ background:"#FFFFFF", marginTop:"20px", padding: "15px 10px", borderRadius: "12px" }}>
      <Col span={24}>
        <Col span={24}>
            <span>Wittawat</span>
        </Col>
        <Col span={24}>
            <span>History</span>
        </Col>
        <Col span={24}>
            <span>Title</span>
        </Col>
        <Col span={24}>
            <span>Comment</span>
        </Col>
      </Col>
     
    </Row>
  );
}
