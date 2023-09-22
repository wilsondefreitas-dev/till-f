import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { styled, Theme } from "@mui/material/styles";
import { ChangeEvent } from "react";

export interface IExerciseDataObject {
  id: string;
  type: string;
  name: ExerciseDataPattern;
  seriesNum: ExerciseDataPattern;
  restRange: ExerciseRangeDataPattern;
}

export type ExerciseRangeDataPattern = {
  exercise1: RangeObject;
  exercise2: RangeObject;
};

export type RangeObject = {
  min: string;
  max: string;
};

export type ExerciseDataPattern = {
  exercise1: string;
  exercise2: string;
};

interface IProps {
  exerciseData: IExerciseDataObject;
  updateExerciseDataObject(
    id: string,
    key: keyof IExerciseDataObject,
    value: string | ExerciseDataPattern | ExerciseRangeDataPattern,
  ): void;
  changeExercisePosition(id: string, to: number): void;
  removeTraining(id: string): void;
  exercisesNum: number;
  position: number;
}

export default function TrainingForm({
  exerciseData,
  updateExerciseDataObject,
  changeExercisePosition,
  removeTraining,
  exercisesNum,
  position,
}: IProps): JSX.Element {
  function handleTypeOnChange(e: SelectChangeEvent): void {
    const type: string = e.target.value;
    updateExerciseDataObject(exerciseData.id, "type", type);
  }

  function handleDeleteOnClick(): void {
    removeTraining(exerciseData.id);
  }

  function handleNameOnChange(e: ChangeEvent, subExerciseNum: number): void {
    const nameValue: string = (e.target as HTMLInputElement).value;
    const exerciseKey: string = `exercise${subExerciseNum}`;
    updateExerciseDataObject(exerciseData.id, "name", {
      ...exerciseData.name,
      [exerciseKey]: nameValue,
    });
  }

  function handleSeriesNumberOnChange(
    e: ChangeEvent,
    subExerciseNum: number,
  ): void {
    const seriesNumValue: string = (e.target as HTMLInputElement).value;
    const exerciseKey: string = `exercise${subExerciseNum}`;
    updateExerciseDataObject(exerciseData.id, "seriesNum", {
      ...exerciseData.seriesNum,
      [exerciseKey]: seriesNumValue,
    });
  }

  function handleRestRangeOnChange(
    e: ChangeEvent,
    subExerciseNum: number,
    edge: string,
  ): void {
    const rangeNumValue: string = (e.target as HTMLInputElement).value;
    const exerciseKey: string = `exercise${subExerciseNum}`;
    updateExerciseDataObject(exerciseData.id, "restRange", {
      ...exerciseData.restRange,
      [exerciseKey]: {
        ...exerciseData.restRange[
          exerciseKey as keyof ExerciseRangeDataPattern
        ],
        [edge]: rangeNumValue,
      },
    });
  }

  function handlePositionOnChange(e: SelectChangeEvent): void {
    const to: number = parseInt(e.target.value) - 1;
    changeExercisePosition(exerciseData.id, to);
  }

  function getTitle(): string {
    const defaultTitle: string = "Novo Exercício";
    const isExercise1NameFilled: boolean =
      exerciseData.name.exercise1.length > 0;
    const isExercise2NameFilled: boolean =
      exerciseData.name.exercise2.length > 0;

    if (isExercise1NameFilled && isExercise2NameFilled) {
      return `${exerciseData.name.exercise1} / ${exerciseData.name.exercise2}`;
    } else if (isExercise1NameFilled) {
      return exerciseData.name.exercise1;
    } else {
      return defaultTitle;
    }
  }

  //

  const RestInputsTitle = (): JSX.Element => {
    return (
      <Divider>
        <FormSubTitle>Range de Descanso em Segundos</FormSubTitle>
      </Divider>
    );
  };

  const RepetitionInputsTitle = (): JSX.Element => {
    return (
      <Divider>
        <FormSubTitle>Range de Repetição</FormSubTitle>
      </Divider>
    );
  };

  return (
    <Stack>
      <FormHeader>
        <PositionSelect
          exercisesNum={exercisesNum}
          position={position}
          handlePositionOnChange={handlePositionOnChange}
        />
        <span>{getTitle()}</span>
      </FormHeader>

      <Card>
        <CardContent>
          <Stack spacing={"18px"}>
            <TypeSelect
              exerciseData={exerciseData}
              handleTypeOnChange={handleTypeOnChange}
            />

            {exerciseData.type === "biset" ? (
              <>
                <SubExercise>
                  <Typography component={"legend"}>Exercício A</Typography>

                  <NameInput
                    handleNameOnChange={(e: ChangeEvent<Element>): void =>
                      handleNameOnChange(e, 1)
                    }
                    value={exerciseData.name.exercise1}
                  />

                  <SeriesNumberInput
                    handleSeriesNumberOnChange={(
                      e: ChangeEvent<Element>,
                    ): void => handleSeriesNumberOnChange(e, 1)}
                    value={exerciseData.seriesNum.exercise1}
                  />

                  <RestInputsTitle />

                  <RestRangeInput
                    handleRestRangeOnChange={(
                      e: ChangeEvent<Element>,
                      edge: string,
                    ): void => handleRestRangeOnChange(e, 1, edge)}
                    value={exerciseData.restRange.exercise1}
                  />

                  <RepetitionInputsTitle />

                  <Stack direction={"row"} spacing={"18px"}>
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Mín."
                      type="number"
                      required
                    />
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Máx."
                      type="number"
                    />
                  </Stack>
                </SubExercise>

                <SubExercise>
                  <Typography component={"legend"}>Exercício B</Typography>

                  <NameInput
                    handleNameOnChange={(e: ChangeEvent<Element>): void =>
                      handleNameOnChange(e, 2)
                    }
                    value={exerciseData.name.exercise2}
                  />

                  <SeriesNumberInput
                    handleSeriesNumberOnChange={(
                      e: ChangeEvent<Element>,
                    ): void => handleSeriesNumberOnChange(e, 2)}
                    value={exerciseData.seriesNum.exercise2}
                  />

                  <RestInputsTitle />

                  <RestRangeInput
                    handleRestRangeOnChange={(
                      e: ChangeEvent<Element>,
                      edge: string,
                    ): void => handleRestRangeOnChange(e, 2, edge)}
                    value={exerciseData.restRange.exercise2}
                  />

                  <RepetitionInputsTitle />

                  <Stack direction={"row"} spacing={"18px"}>
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Mín."
                      type="number"
                      required
                    />
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Máx."
                      type="number"
                    />
                  </Stack>
                </SubExercise>
              </>
            ) : (
              <>
                <NameInput
                  handleNameOnChange={(e: ChangeEvent<Element>): void =>
                    handleNameOnChange(e, 1)
                  }
                  value={exerciseData.name.exercise1}
                />

                <SeriesNumberInput
                  handleSeriesNumberOnChange={(e: ChangeEvent<Element>): void =>
                    handleSeriesNumberOnChange(e, 1)
                  }
                  value={exerciseData.seriesNum.exercise1}
                />

                <RestInputsTitle />

                <RestRangeInput
                  handleRestRangeOnChange={(
                    e: ChangeEvent<Element>,
                    edge: string,
                  ): void => handleRestRangeOnChange(e, 1, edge)}
                  value={exerciseData.restRange.exercise1}
                />

                <RepetitionInputsTitle />

                <Stack direction={"row"} spacing={"18px"}>
                  <TextField
                    sx={{ flex: 1 }}
                    id="nameInput"
                    label="Mín."
                    type="number"
                    inputProps={{ inputMode: "numeric" }}
                    required
                  />
                  <TextField
                    sx={{ flex: 1 }}
                    id="nameInput"
                    label="Máx."
                    type="number"
                    inputProps={{ inputMode: "numeric" }}
                  />
                </Stack>
              </>
            )}
          </Stack>
        </CardContent>

        <Divider />

        <CardActions>
          <Button size="small" onClick={handleDeleteOnClick}>
            excluir
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}

const NameInput = ({
  value,
  handleNameOnChange,
}: {
  value: string;
  handleNameOnChange: (e: ChangeEvent) => void;
}): JSX.Element => {
  return (
    <TextField
      id="nameInput"
      label="Nome"
      onChange={handleNameOnChange}
      value={value}
      required
      multiline
    />
  );
};

const SeriesNumberInput = ({
  value,
  handleSeriesNumberOnChange,
}: {
  value: string;
  handleSeriesNumberOnChange: (e: ChangeEvent) => void;
}): JSX.Element => {
  return (
    <TextField
      sx={{ flex: 1 }}
      id="seriesNumber"
      label="Número de Series"
      type="number"
      inputProps={{ inputMode: "numeric" }}
      onChange={handleSeriesNumberOnChange}
      value={value}
      required
    />
  );
};

const RestRangeInput = ({
  value,
  handleRestRangeOnChange,
}: {
  value: RangeObject;
  handleRestRangeOnChange: (e: ChangeEvent, edge: string) => void;
}): JSX.Element => {
  return (
    <Stack direction={"row"} spacing={"18px"}>
      <TextField
        sx={{ flex: 1 }}
        id="restRangeMin"
        label="Mín."
        type="number"
        value={value.min}
        inputProps={{ inputMode: "numeric" }}
        onChange={(e: ChangeEvent): void => handleRestRangeOnChange(e, "min")}
        required
      />
      <TextField
        sx={{ flex: 1 }}
        id="restRangeMax"
        label="Máx."
        type="number"
        value={value.max}
        inputProps={{ inputMode: "numeric" }}
        onChange={(e: ChangeEvent): void => handleRestRangeOnChange(e, "max")}
      />
    </Stack>
  );
};

const TypeSelect = ({
  exerciseData,
  handleTypeOnChange,
}: {
  exerciseData: IExerciseDataObject;
  handleTypeOnChange: (e: SelectChangeEvent) => void;
}): JSX.Element => {
  return (
    <FormControl sx={{ marginTop: "0 !important" }} required>
      <InputLabel id="demo-simple-select-filled-label-2">Tipo</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label-2"
        id="demo-simple-select-filled-2"
        label="Tipo"
        value={exerciseData.type}
        onChange={handleTypeOnChange}
      >
        <MenuItem value={"default"}>Padrão</MenuItem>
        <MenuItem value={"dropset"}>Drop Set</MenuItem>
        <MenuItem value={"biset"}>Bi Set</MenuItem>
        <MenuItem value={"warmup"}>Aquecimento</MenuItem>
      </Select>
    </FormControl>
  );
};

const PositionSelect = ({
  exercisesNum,
  position,
  handlePositionOnChange,
}: {
  exercisesNum: number;
  position: number;
  handlePositionOnChange: (e: SelectChangeEvent) => void;
}): JSX.Element => {
  function getExerciseNum(index: number): string {
    return (index + 1).toString();
  }
  function getExercisePosition(position: number): string {
    return (position + 1).toString();
  }

  return (
    <PositionFormControl variant="standard" size={"small"}>
      <InputLabel></InputLabel>
      <Select
        labelId="position-select"
        id="position-select"
        value={getExercisePosition(position)}
        onChange={handlePositionOnChange}
      >
        {Array.from(new Array(exercisesNum), (_: undefined, index: number) => (
          <MenuItem
            key={`${_}-${index}`}
            value={getExerciseNum(index)}
          >{`${getExerciseNum(index)}°`}</MenuItem>
        ))}
      </Select>
    </PositionFormControl>
  );
};

// eslint-disable-next-line @typescript-eslint/typedef
const FormHeader = styled(Typography)(() => ({
  position: "sticky",
  top: 48,
  padding: "14px 0",
  textAlign: "center",
  backgroundColor: "gainsboro",
  zIndex: 2,
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  "& :first-letter": {
    textTransform: "uppercase",
  },
}));

// eslint-disable-next-line @typescript-eslint/typedef
const FormSubTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const SubExercise = styled("fieldset")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  borderColor: "rgba(0, 0, 0, 0.23)",
  borderRadius: 4,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const PositionFormControl = styled(FormControl)(() => ({
  "& .MuiInputBase-root": { marginTop: "0" },
  "& .MuiSelect-select": { padding: "0 28px 0 10px" },
}));
