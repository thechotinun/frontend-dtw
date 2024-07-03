import "./globals.css";
import HeaderMain from "./components/layouts/header";
import SiderMenu from "./components/layouts/menu";
import ContentMain from "./components/layouts/content";
import { Row, Col } from "antd";

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
          <Row style={{ height: "100%" }}>
            <Col xs={0} sm={6} md={6} lg={6}>
              <SiderMenu />
            </Col>
            {/* <Col xs={24} sm={12} md={12} lg={12}> */}
              <ContentMain>{children}</ContentMain>
            {/* </Col> */}
          </Row>
        </div>
      </body>
    </html>
  );
}
