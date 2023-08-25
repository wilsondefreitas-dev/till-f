"use client";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export default function MainContainer({ children }) {
  return <StyledContainer maxWidth="sm">{children}</StyledContainer>;
}

const StyledContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));
