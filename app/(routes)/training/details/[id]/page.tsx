"use client";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import ExerciseTable from "./_components/ExerciseTable";
import MainHeader from "../../../../_components/MainHeader";

type Params = { [key: string]: string };

interface ITraining {
  date: string;
  number: number;
  name: string;
  muscles: string;
  observation: string;
  workoutData: IWorkoutData[];
  extraData: IExtraData;
}

export interface IWorkoutData {
  type: string;
  name: string;
  restSecs: number;
  repeatsRange: { min: number; max: number };
  seriesData: ISeriesData[];
} //remove optional when remove mock data

export interface ISeriesData {
  serieNumber: number;
  reps: string;
  weight: string;
}

interface IExtraData {
  duration: number;
  sleep: { done: number; max: number };
  meals: { done: number; max: number };
}

interface IProps {
  params: Params;
}

const data: ITraining = {
  date: "01 de agosto, quarta | 10:23 → 11h55",
  number: 33,
  name: "Treino A",
  muscles: "Peito, ombro e tríceps",
  observation: "Dor no ombro esquerdo durante o Peck Deck",
  workoutData: [
    {
      type: "aquecimento",
      name: "Supino Inclinado com Halter",
      restSecs: 90,
      repeatsRange: { min: 6, max: 15 },
      seriesData: [
        {
          serieNumber: 1,
          reps: `${15}`,
          weight: `${17.5} kg`,
        },
        {
          serieNumber: 2,
          reps: `${15}`,
          weight: `${17.5} kg`,
        },
        {
          serieNumber: 3,
          reps: `${15}`,
          weight: `${17.5} kg`,
        },
      ],
    },
  ],
  extraData: {
    duration: 116,
    sleep: { done: 5, max: 6 },
    meals: { done: 6, max: 6 },
  },
};

export default function Details({ params }: IProps): JSX.Element {
  const { id }: Params = params;
  const {
    date,
    number,
    name,
    muscles,
    observation,
    extraData,
    workoutData,
  }: ITraining = data;

  console.log(id);

  useEffect(() => {
    scrollToTop();
  }, []);

  function scrollToTop(): void {
    if (typeof window !== "object") throw new Error("window is undefined");
    window.scrollTo(0, 0);
  }

  function getDuration(): string {
    const minsToHours: number = extraData.duration / 60;
    const hours: number = Math.floor(minsToHours);
    const restMins: number = minsToHours - hours;
    const mins: number = restMins * 60;

    return `${hours}:${mins}`; //todo
  }

  return (
    <>
      <MainHeader>detalhes</MainHeader>

      <Stack spacing={1}>
        <Stack>
          <HeaderInfo>{date}</HeaderInfo>

          <TrainingTitle variant="h6">
            {`${number}° - ${name} - ${muscles}`}
          </TrainingTitle>

          <Stack direction="row" spacing={0.5} justifyContent={"center"}>
            <Chip
              label={`${getDuration()} de duração`}
              color="info"
              size="small"
            />
            <Chip
              label={`${extraData.meals.done} de ${extraData.meals.max} refeições`}
              color="success"
              size="small"
            />
            <Chip
              label={`${extraData.sleep.done} de ${extraData.sleep.max} horas de sono`}
              color="warning"
              size="small"
            />
          </Stack>
        </Stack>

        {observation && (
          <Observation>
            <InfoIcon fontSize={"inherit"} />
            {observation}
          </Observation>
        )}
      </Stack>

      {workoutData &&
        workoutData.map((data: IWorkoutData) => (
          <ExerciseTable key={data.name} data={data} />
        ))}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const TrainingTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

// eslint-disable-next-line @typescript-eslint/typedef
const HeaderInfo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 0,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const Observation = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
