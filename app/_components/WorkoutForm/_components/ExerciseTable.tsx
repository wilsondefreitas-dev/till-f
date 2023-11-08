import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import RestoreIcon from "@mui/icons-material/Restore";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RepeatIcon from "@mui/icons-material/Repeat";
import { styled, Theme } from "@mui/material/styles";
import { EXERCISE_TYPES } from "_utils/constants";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  ExerciseDataObject,
  ExerciseNameObject,
  ExerciseTypeOption,
  RangeObject,
} from "_interfaces";
import { ExerciseHistoric, Historic } from "_utils/mockData";

export default function ExerciseTable({
  data,
  historicMock,
}: {
  data: ExerciseDataObject;
  historicMock?: Historic;
}): JSX.Element {
  return (
    <Stack spacing={1}>
      <Divider />

      <TableTitle data={data} />

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHeader data={data} />
        </Table>

        <TableContent data={data} historic={historicMock} />
      </TableContainer>

      <TextField placeholder="Observação" multiline />
    </Stack>
  );
}

function TableTitle({ data }: { data: ExerciseDataObject }): JSX.Element {
  function getName(name: ExerciseNameObject, type: string): string {
    if (type === "biset") {
      return `A - ${name.exercise1} | B - ${name.exercise2}`;
    } else {
      return name.exercise1;
    }
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
  return (
    <TableTitleContainer justifyContent={"center"}>
      <Typography>
        {getExerciseType(data.type)} | <RestoreIcon fontSize="inherit" />{" "}
        {getExerciseRestRange(data.restRange)}
      </Typography>
      <Typography>{getName(data.name, data.type)}</Typography>
    </TableTitleContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const TableTitleContainer = styled(Stack)(() => ({
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

function TableHeader({ data }: { data: ExerciseDataObject }): JSX.Element {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>#</TableHeaderCell>
        <TableHeaderCell>
          <RepeatIcon fontSize="inherit" />
          {data.type === "biset"
            ? `Reps. (A: ${data.repetitionRange.exercise1.min} ~ ${data.repetitionRange.exercise1.max} | B: ${data.repetitionRange.exercise2.min} ~ ${data.repetitionRange.exercise2.max})`
            : `Reps. (${data.repetitionRange.exercise1.min} ~ ${data.repetitionRange.exercise1.max})`}
        </TableHeaderCell>
        <TableHeaderCell>
          <FitnessCenterIcon fontSize="inherit" /> Carga
        </TableHeaderCell>
      </TableRow>
    </TableHead>
  );
}

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

function TableContent({
  data,
  historic,
}: {
  data: ExerciseDataObject;
  historic?: Historic;
}): JSX.Element {
  const curHistoric: ExerciseHistoric | undefined = getExerciseHistoric(
    data.id,
  );

  function getExerciseHistoric(
    exerciseID: string,
  ): ExerciseHistoric | undefined {
    return historic?.exercises.find(
      (exercise: ExerciseHistoric) => exercise.id === exerciseID,
    );
  }

  return (
    <TableBody>
      {Array.from(
        new Array(parseInt(data.seriesNum)),
        (_: string, index: number) => {
          return (
            <React.Fragment key={index}>
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#f3f3f3" : "white",
                }}
              >
                <SerieCell rowSpan={data.type == "biset" ? 2 : 1}>
                  <b>{index + 1}</b>
                </SerieCell>
                <DataCell>
                  <div>
                    {data.type == "biset" && <Typography>A</Typography>}
                    <OutlinedInput
                      size="small"
                      type="number"
                      disabled={Boolean(curHistoric)}
                      value={
                        curHistoric
                          ? curHistoric.series[index].exercise_1.repetitions
                          : null
                      }
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
                      disabled={Boolean(curHistoric)}
                      value={
                        curHistoric
                          ? curHistoric.series[index].exercise_1.weight
                          : null
                      }
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
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f3f3f3" : "white",
                  }}
                >
                  <DataCell>
                    <div>
                      <Typography>B</Typography>
                      <OutlinedInput
                        size="small"
                        type="number"
                        disabled={Boolean(curHistoric)}
                        value={
                          curHistoric
                            ? curHistoric.series[index].exercise_2?.repetitions
                            : null
                        }
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
                        disabled={Boolean(curHistoric)}
                        value={
                          curHistoric
                            ? curHistoric.series[index].exercise_2?.weight
                            : null
                        }
                        inputProps={{ inputMode: "numeric" }}
                        endAdornment={
                          <InputAdornment position="end">Kg</InputAdornment>
                        }
                        required
                      />
                    </div>
                  </DataCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        },
      )}
    </TableBody>
  );
}

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
