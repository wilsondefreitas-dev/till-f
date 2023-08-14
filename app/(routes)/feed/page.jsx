"use client";

import { useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TrainingCard from "./TrainingCard";

export default function Feed() {
  const feedContainer = useRef(null);
  const buttonToTrain = useRef(null);
  const fabToTrain = useRef(null);

  useEffect(() => {
    if (typeof window === "object" && typeof document === "object") {
      showFabOnScroll();
    }
  }, []);

  function showFabOnScroll() {
    const feedPaddingTopSize = parseInt(
      window
        .getComputedStyle(feedContainer.current)
        .getPropertyValue("padding-top"),
    );

    const buttonHeight = buttonToTrain.current.offsetHeight;

    (document.onscroll = () => {
      const showFab = window.scrollY >= feedPaddingTopSize + buttonHeight;
      fabToTrain.current.style.opacity = Number(showFab);
    })();
  }

  return (
    <FeedContainer ref={feedContainer} maxWidth="sm">
      <LongButton ref={buttonToTrain} variant="contained">
        Novo Treino
      </LongButton>

      <FixedFab ref={fabToTrain} color="primary">
        <AddIcon />
      </FixedFab>

      <FeedHeader>histórico</FeedHeader>

      <HistoricContainer>
        {Array.from(Array(6), (data) => (
          <TrainingCard key={data} />
        ))}
      </HistoricContainer>
    </FeedContainer>
  );
}

const FeedContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingTop: 24,
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));

const FeedHeader = styled(Typography)(() => ({
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.05)",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 14,
}));

const FixedFab = styled(Fab)(() => ({
  position: "fixed",
  bottom: 24,
  right: 24,
  opacity: 0,
  transition: "opacity 0.25s",
}));

const LongButton = styled(Button)(() => ({
  width: "100%",
  height: 50,
}));

const HistoricContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100",
}));
