import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

export default function SubHeader({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <SubHeaderContainer>{children}</SubHeaderContainer>;
}

// eslint-disable-next-line @typescript-eslint/typedef
const SubHeaderContainer = styled("div")(() => ({
  position: "sticky",
  top: 48,
  padding: "14px 0",
  textAlign: "center",
  backgroundColor: "gainsboro",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  textTransform: "capitalize",
  "& p": { fontWeight: "bold" },
}));
