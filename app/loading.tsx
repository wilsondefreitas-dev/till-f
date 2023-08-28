"use client";
import { styled } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading(): JSX.Element {
  return <Loader />;
}

// eslint-disable-next-line @typescript-eslint/typedef
const Loader = styled(CircularProgress)(() => ({
  margin: "0 auto",
}));
