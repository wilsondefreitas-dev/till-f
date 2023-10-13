"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import MainHeader from "_components/MainHeader";
import { trainingMock } from "_utils/mockData";
import {
  ExerciseDataObject,
  TrainingDataObject,
  ExerciseTypeOption,
  RangeObject,
  ExerciseNameObject,
} from "_interfaces";
import {
  Chip,
  Divider,
  InputAdornment,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Theme,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import RepeatIcon from "@mui/icons-material/Repeat";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { EXERCISE_TYPES } from "_utils/constants";
import LongButton from "_components/LongButton";

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

export default function NewWorkout(): JSX.Element {
  const data: TrainingDataObject = trainingMock;

  function getData(): string {
    return "01 de agosto, quarta | 10:23";
  }

  function getName(name: ExerciseNameObject, type: string): string {
    if (type === "biset") {
      return `A - ${name.exercise1} | B - ${name.exercise2}`;
    } else {
      return name.exercise1;
    }
  }

  function getTrainingNumber(): number {
    return 7;
  }

  function getExerciseType(value: string): string {
    return (
      EXERCISE_TYPES.find((data: ExerciseTypeOption) => data.value === value)
        ?.label || ""
    );
  }

  function getExerciseRestRange(restObject: RangeObject): string {
    return `${restObject.min}s ~ ${restObject.max}s`;
  }

  console.log(data);

  function ExerciseTable({ data }: { data: ExerciseDataObject }): JSX.Element {
    return (
      <Stack spacing={1}>
        <Divider />

        <TableTitle justifyContent={"center"}>
          <Typography>
            {getExerciseType(data.type)} | <RestoreIcon fontSize="inherit" />{" "}
            {getExerciseRestRange(data.restRange)}
          </Typography>
          <Typography>{getName(data.name, data.type)}</Typography>
        </TableTitle>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableHeaderCell>#</TableHeaderCell>
                <TableHeaderCell>
                  <RepeatIcon fontSize="inherit" />
                  {`Reps. (${data.repetitionRange.exercise1.min} ~ ${data.repetitionRange.exercise1.max})`}
                </TableHeaderCell>
                <TableHeaderCell>
                  <FitnessCenterIcon fontSize="inherit" /> Carga
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {[1, 2, 3, 4].map((value: number, index: number) => {
                return (
                  <React.Fragment key={value}>
                    <TableRow
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f3f3f3" : "white",
                      }}
                    >
                      <SerieCell rowSpan={data.type == "biset" ? 2 : 1}>
                        <b>{value}</b>
                      </SerieCell>
                      <DataCell>
                        <div>
                          {data.type == "biset" && <Typography>A</Typography>}
                          <OutlinedInput
                            size="small"
                            type="number"
                            placeholder="7"
                            inputProps={{ inputMode: "numeric" }}
                            endAdornment={
                              <InputAdornment position="end">x</InputAdornment>
                            }
                            required
                          />
                        </div>
                      </DataCell>
                      <DataCell>
                        <div>
                          <OutlinedInput
                            size="small"
                            type="number"
                            placeholder="18"
                            inputProps={{ inputMode: "numeric" }}
                            endAdornment={
                              <InputAdornment position="end">Kg</InputAdornment>
                            }
                            required
                          />
                        </div>
                      </DataCell>
                    </TableRow>
                    {data.type == "biset" && (
                      <TableRow
                        key={value}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#f3f3f3" : "white",
                        }}
                      >
                        <DataCell>
                          <div>
                            <Typography>B</Typography>
                            <OutlinedInput
                              size="small"
                              type="number"
                              placeholder="7"
                              inputProps={{ inputMode: "numeric" }}
                              endAdornment={
                                <InputAdornment position="end">
                                  x
                                </InputAdornment>
                              }
                              required
                            />
                          </div>
                        </DataCell>
                        <DataCell>
                          <div>
                            <OutlinedInput
                              size="small"
                              type="number"
                              placeholder="18"
                              inputProps={{ inputMode: "numeric" }}
                              endAdornment={
                                <InputAdornment position="end">
                                  Kg
                                </InputAdornment>
                              }
                              required
                            />
                          </div>
                        </DataCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    );
  }

  return (
    <>
      <MainHeader>treinar</MainHeader>

      <Stack spacing={1}>
        <Stack>
          <HeaderInfo>{getData()}</HeaderInfo>

          <TrainingTitle variant="h6">{`${getTrainingNumber()}° - ${
            data.name
          }`}</TrainingTitle>

          <Stack direction="row" spacing={0.5} justifyContent={"center"}>
            <Chip label={"1:40 de duração"} color="info" size="small" />
            <Chip label={"3 de 6 refeições"} color="success" size="small" />
            <Chip label={"8 de 8 horas de sono"} color="warning" size="small" />
          </Stack>
        </Stack>
      </Stack>

      {data.exercises.map((exercise: ExerciseDataObject) => {
        return <ExerciseTable key={exercise.id} data={exercise} />;
      })}

      <Stack spacing={1}>
        <Divider />
        <TextField placeholder="Observação" multiline />
      </Stack>

      <LongButton>Finalizar</LongButton>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const TableTitle = styled(Stack)(() => ({
  fontSize: 15,
  textAlign: "center",
  "& svg": {
    position: "relative",
    top: 2,
    marginRight: 1,
  },
  "& .MuiTypography-root:first-of-type": {
    fontSize: 12,
  },
  "& .MuiTypography-root:last-child": {
    fontWeight: "bold",
  },
}));

// eslint-disable-next-line @typescript-eslint/typedef
const TableHeaderCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: "white",
  "& svg": {
    position: "relative",
    top: 3,
    marginRight: 1,
  },
}));

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
const DataCell = styled(TableCell)(() => ({
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& .MuiFormControl-root": {
      // width: "50%",
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/typedef
const SerieCell = styled(TableCell)(() => ({
  borderRight: "1px solid rgba(224, 224, 224, 1)",
}));
