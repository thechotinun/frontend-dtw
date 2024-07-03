import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "antd";
import HeaderMain from "./components/layouts/header";
import SiderMenu from "./components/layouts/menu";
import ContentMain from "./components/layouts/content";
import { Row, Col } from "antd";

const { Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home-dtw",
  description: "0.0.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ height: "100%", background: "#BBC2C0" }}>
          <HeaderMain />
          <Row>
            <Col span={6}>
              <SiderMenu />
            </Col>
            <Col span={12}>
              <main>
                <ContentMain>{children}</ContentMain>
              </main>
            </Col>
          </Row>
        </div>
      </body>
    </html>
  );
}
