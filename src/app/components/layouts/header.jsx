"use client";
import { useState } from "react";
import { Castoro } from "@next/font/google";
import { Layout, Col, Button, Drawer } from "antd";
import {
  MenuOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "./css/layoutMain.css";

const castoro = Castoro({ subsets: ["latin"], weight: "400", style: "italic" });

const { Header } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const HeaderMain = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          height: "60px",
          display: "flex",
          lineHeight: "unset",
          alignItems: "center",
          backgroundColor: "#243831",
          padding: "0 25px",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={12}
          className={castoro.className}
          style={{ textAlign: "left" }}
        >
          <span style={{ fontSize: "20px", color: "#FFFFFF" }}>a Board</span>
        </Col>
        <Col xs={12} md={12} style={{ textAlign: "right" }} className="sign-in">
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
            Sign In
          </Button>
        </Col>
        <Col
          xs={12}
          md={12}
          style={{ textAlign: "right" }}
          className="list-menu"
        >
          <MenuOutlined
            style={{ color: "#FFFFFF" }}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </Col>
        <Drawer
          closeIcon={<ArrowRightOutlined style={{ color: "#FFFFFF" }} />}
          onClose={() => {
            setOpen(!open);
          }}
          open={open}
          width={280}
          style={{ backgroundColor: "#243831" }}
        >
          <Col style={{ height: "40px", cursor: "pointer" }}>
            <HomeOutlined style={{ color: "#FFFFFF", fontSize: "18px", marginRight: "5px" }} />{" "}
            <span style={{ color: "#FFFFFF", fontSize: "16px" }}>Home</span>
          </Col>
          <Col style={{ height: "40px", cursor: "pointer" }}>
            <FormOutlined style={{ color: "#BBC2C0", fontSize: "18px", marginRight: "5px" }} />{" "}
            <span style={{ color: "#BBC2C0", fontSize: "16px" }}>Our Blog</span>
          </Col>
        </Drawer>
      </Header>
    </>
  );
};

export default HeaderMain;
