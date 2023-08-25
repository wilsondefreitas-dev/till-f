"use client";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import ExerciseTable from "./_components/ExerciseTable";
import MainHeader from "../../../_components/MainHeader";

export default function Page({ params }) {
  const { id } = params;
  console.log(id);

  useEffect(() => {
    if (typeof window === "object") window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainHeader>detalhes</MainHeader>

      <Stack spacing={1}>
        <Stack>
          <HeaderInfo>01 de agosto, quarta | 10:23 → 11h55</HeaderInfo>

          <TrainingTitle variant="h6">
            33° - Treino A - Peito, ombro e tríceps
          </TrainingTitle>

          <Stack direction="row" spacing={0.5} justifyContent={"center"}>
            <Chip label="01h42 de duração" color="info" size="small" />
            <Chip label="6 de 6 refeições" color="success" size="small" />
            <Chip label="7 de 8 horas de sono" color="warning" size="small" />
          </Stack>
        </Stack>

        <Observation>
          <InfoIcon fontSize={"inherit"} />
          Dor no ombro esquerdo durante o Peck Deck.
        </Observation>
      </Stack>

      <ExerciseTable />
      <ExerciseTable />
      <ExerciseTable />
      <ExerciseTable />
      <ExerciseTable />
      <ExerciseTable />
      <ExerciseTable />
    </>
  );
}

const TrainingTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

const HeaderInfo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 0,
}));

const Observation = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
