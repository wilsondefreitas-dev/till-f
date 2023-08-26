"use client";
import { styled } from "@mui/material/styles";
import TrainingCard from "./_components/TrainingCard";
import WorkoutButton from "./_components/WorkoutButton";
import MainHeader from "../../_components/MainHeader";

export default function Feed(): JSX.Element {
  return (
    <>
      <WorkoutButton />
      <MainHeader>histórico</MainHeader>

      <HistoricContainer>
        {Array.from([1, 2, 3, 4, 5, 6], (data: number) => (
          <TrainingCard key={data} />
        ))}
      </HistoricContainer>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const HistoricContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100",
}));
