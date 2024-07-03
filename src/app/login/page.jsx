"use client";
import { Form, Input, Button, Layout, Typography, Row, Col } from "antd";
import Image from "next/image";
import LoginLayout from "./layout";

const { Title } = Typography;

export default function LoginPage() {
  return <div>Login Page</div>
}

LoginPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
