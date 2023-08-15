"use client";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TrainingCard from "./components/TrainingCard";
import NewTrainingButton from "./components/NewTrainingButton";

export default function Feed() {
  return (
    <>
      <NewTrainingButton />
      <FeedHeader>histórico</FeedHeader>

      <HistoricContainer>
        {Array.from(Array(6), (data) => (
          <TrainingCard key={data} />
        ))}
      </HistoricContainer>
    </>
  );
}

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
