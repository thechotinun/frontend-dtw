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
          <main style={{ height: "100%" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
