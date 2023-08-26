import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export default function MainHeader({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <Header>{children}</Header>;
}

// eslint-disable-next-line @typescript-eslint/typedef
const Header = styled(Typography)(() => ({
  textAlign: "center",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 16,
  borderBottom: "solid 1px rgba(0, 0, 0, 0.3)",
  borderTop: "solid 1px rgba(0, 0, 0, 0.3)",
  padding: 5,
}));
