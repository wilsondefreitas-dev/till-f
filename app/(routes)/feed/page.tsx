"use client";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TrainingCard from "./_components/TrainingCard";
import NewTrainingButton from "./_components/NewTrainingButton";

export default function Feed() {
  return (
    <>
      <NewTrainingButton />
      <Header>histórico</Header>

      <HistoricContainer>
        {Array.from([1, 2, 3, 4, 5, 6], (data) => (
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

const Header = styled(Typography)(() => ({
  textAlign: "center",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 16,
  borderBottom: "solid 1px rgba(0, 0, 0, 0.3)",
  borderTop: "solid 1px rgba(0, 0, 0, 0.3)",
  padding: 5,
}));
