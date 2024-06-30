"use client";
import { Layout } from "antd";

const { Content } = Layout;

export default function ContentMain({ children }) {
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Content style={{ padding: "24px 48px" }}>{children}</Content>
      </Layout>
    </>
  );
}
