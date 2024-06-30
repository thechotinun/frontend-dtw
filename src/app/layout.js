import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "antd";
import HeaderMain from "./components/layouts/header";
import ContentMain from "./components/layouts/content";

const { Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dtw",
  description: "0.0.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{ height: "100%" }}>
          <HeaderMain />
          <ContentMain>{children}</ContentMain>
        </Layout>
      </body>
    </html>
  );
}
