"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TrainingCard from "./components/TrainingCard";
import NewTrainingButton from "./components/NewTrainingButton";

export default function Feed() {
  return (
    <FeedContainer maxWidth="sm">
      <NewTrainingButton />
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
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));

const HistoricContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100",
}));

const FeedHeader = styled(Typography)(() => ({
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.05)",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 14,
}));
