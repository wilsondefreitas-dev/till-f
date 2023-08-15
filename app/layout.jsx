"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./_styles/global.css";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";

export const metadata = {
  title: "Till-F",
  description: "Your workout mate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Maincontainer maxWidth="sm">{children}</Maincontainer>
      </body>
    </html>
  );
}

const Maincontainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));
