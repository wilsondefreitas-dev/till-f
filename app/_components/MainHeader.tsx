import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function MainHeader({ children }) {
  return <Header>{children}</Header>;
}

const Header = styled(Typography)(() => ({
  textAlign: "center",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 16,
  borderBottom: "solid 1px rgba(0, 0, 0, 0.3)",
  borderTop: "solid 1px rgba(0, 0, 0, 0.3)",
  padding: 5,
}));
