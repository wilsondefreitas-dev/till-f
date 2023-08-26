"use client";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

export default function MainContainer({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <StyledContainer maxWidth="sm">{children}</StyledContainer>;
}

// eslint-disable-next-line @typescript-eslint/typedef
const StyledContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingBottom: 24,
  paddingTop: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));
