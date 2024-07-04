"use client";

import "../css/comments.css";
import React, { useState } from "react";
import { Row, Col, Input, Modal, Button, Select, Form, Spin } from "antd";
import { useRouter } from "next/navigation";

const { TextArea } = Input;

export default function ModalAddComment({ isModalOpen, setIsModalOpen }) {
  const router = useRouter();
  const [formComment] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();

  const handleCancel = async (e) => {
    console.log(e);
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Modal
      title={`Add Comments`}
      open={isModalOpen}
      onOk={formComment.submit}
      onCancel={handleCancel}
      maskClosable={false}
      centered
      footer={null}
    >
      <Form form={formComment} onFinish={handleSubmit}>
        <Spin spinning={false}>
          <Form.Item name={"comment"}>
            <TextArea rows={6} placeholder="What's on your mind..." />
          </Form.Item>
        </Spin>
      </Form>
      <Row style={{ marginTop: 24 }}>
        <Col span={24} style={{ marginBottom: "5px" }}>
          <Button
            style={{
              width: "100%",
              color: "#49A569",
              width: "100%",
              //   maxWidth: "105px",
              height: "40px",
              borderRadius: "8px",
              borderColor: "#49A569",
              // backgroundColor: "#49A569",
              marginRight: "10px",
            }}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{
              width: "100%",
              color: "#FFFFFF",
              width: "100%",
              //   maxWidth: "105px",
              height: "40px",
              borderRadius: "8px",
              borderColor: "#49A569",
              backgroundColor: "#49A569",
            }}
          >
            Post
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}
