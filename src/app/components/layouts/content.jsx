"use client";
import { Layout } from "antd";

const { Content } = Layout;

export default function ContentMain({ children }) {
  return (
    <>
      <Content style={{ padding: "32px 0px 0px 0px" }}>{children}</Content>
    </>
  );
}
