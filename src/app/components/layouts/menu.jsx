"use client";

import { Layout, Menu } from "antd";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import "./css/layoutMain.css";

const items = [
  {
    key: 1,
    icon: <HomeOutlined style={{ fontSize: "18px" }} />,
    label: `Home`,
  },
  {
    key: 2,
    icon: <FormOutlined style={{ fontSize: "18px" }} />,
    label: `Our Blog`,
  },
];

const { Sider } = Layout;

const SiderMenu = () => {
  return (
    <>
      <Sider
        width={"100%"}
        className="sider-menu"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            width: "100%",
            paddingTop: "20px",
            background: "#BBC2C0",
            borderInlineEnd: "unset",
            fontSize: "16px",
          }}
        />
      </Sider>
    </>
  );
};

export default SiderMenu;
