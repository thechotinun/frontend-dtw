"use client";

import { Layout, Menu } from "antd";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";
import Link from 'next/link';
import "./css/layoutMain.css";

const items = [
  {
    key: '/',
    icon: <HomeOutlined style={{ fontSize: "18px" }} />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: '/ourblog',
    icon: <FormOutlined style={{ fontSize: "18px" }} />,
    label: <Link href="/ourblog">Our Blog</Link>,
  },
];

const { Sider } = Layout;

const SiderMenu = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      <Sider
        width={"100%"}
        className="sider-menu"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
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
