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
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

//

export interface IExerciseDataObject {
  id: string;
  type: string;
  name: ExerciseDataPattern;
  seriesNum: string;
  restRange: RangeObject;
  repetitionRange: RepetitionRangePattern;
}

export type RepetitionRangePattern = {
  exercise1: RepetitionObject;
  exercise2: RepetitionObject;
};

export type RangeObject = {
  min: string;
  max: string;
};

export type RepetitionObject = RangeObject & { tillFail: boolean };

export type ExerciseDataPattern = {
  exercise1: string;
  exercise2: string;
};

//

interface IProps {
  exerciseData: IExerciseDataObject;
  updateExerciseDataObject(
    id: string,
    key: keyof IExerciseDataObject,
    value: string | ExerciseDataPattern | RangeObject | RepetitionRangePattern,
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

  function handleSeriesNumberOnChange(e: ChangeEvent): void {
    const seriesNumValue: string = (e.target as HTMLInputElement).value;

    updateExerciseDataObject(exerciseData.id, "seriesNum", seriesNumValue);
  }

  function handleRestRangeOnChange(e: ChangeEvent, edge: string): void {
    const rangeNumValue: string = (e.target as HTMLInputElement).value;

    updateExerciseDataObject(exerciseData.id, "restRange", {
      ...exerciseData.restRange,
      [edge]: rangeNumValue,
    });
  }

  function handleRepetitionOnChange(
    e: ChangeEvent,
    subExerciseNum: number,
    edge: string,
  ): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    const rangeNumValue: string | boolean = getInputValue(inputElement);
    const exerciseKey: string = `exercise${subExerciseNum}`;

    updateExerciseDataObject(exerciseData.id, "repetitionRange", {
      ...exerciseData.repetitionRange,
      [exerciseKey]: {
        ...exerciseData.repetitionRange[
          exerciseKey as keyof RepetitionRangePattern
        ],
        [edge]: rangeNumValue,
      },
    });

    function getInputValue(inputElement: HTMLInputElement): string | boolean {
      if (inputElement.type === "checkbox") {
        return inputElement.checked;
      } else {
        return inputElement.value;
      }
    }
  }

  return (
    <Stack>
      <FormHeader
        exerciseData={exerciseData}
        exercisesNum={exercisesNum}
        position={position}
        changeExercisePosition={changeExercisePosition}
      />

      <Card>
        <CardContent>
          <Stack spacing={"18px"}>
            <TypeSelect
              exerciseData={exerciseData}
              handleTypeOnChange={handleTypeOnChange}
            />

            {exerciseData.type !== "biset" && (
              <NameInput
                handleNameOnChange={(e: ChangeEvent<Element>): void =>
                  handleNameOnChange(e, 1)
                }
                value={exerciseData.name.exercise1}
              />
            )}

            <SeriesNumberInput
              handleSeriesNumberOnChange={handleSeriesNumberOnChange}
              value={exerciseData.seriesNum}
            />

            <RestRangeInput
              handleRestRangeOnChange={handleRestRangeOnChange}
              value={exerciseData.restRange}
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

                  <RepetitionRangeInput
                    handleRepetitionRangeOnChange={(
                      e: ChangeEvent<Element>,
                      edge: string,
                    ): void => handleRepetitionOnChange(e, 1, edge)}
                    value={exerciseData.repetitionRange.exercise1}
                  />
                </SubExercise>

                <SubExercise>
                  <Typography component={"legend"}>Exercício B</Typography>

                  <NameInput
                    handleNameOnChange={(e: ChangeEvent<Element>): void =>
                      handleNameOnChange(e, 2)
                    }
                    value={exerciseData.name.exercise2}
                  />

                  <RepetitionRangeInput
                    handleRepetitionRangeOnChange={(
                      e: ChangeEvent<Element>,
                      edge: string,
                    ): void => handleRepetitionOnChange(e, 2, edge)}
                    value={exerciseData.repetitionRange.exercise2}
                  />
                </SubExercise>
              </>
            ) : (
              <>
                <RepetitionRangeInput
                  handleRepetitionRangeOnChange={(
                    e: ChangeEvent<Element>,
                    edge: string,
                  ): void => handleRepetitionOnChange(e, 1, edge)}
                  value={exerciseData.repetitionRange.exercise1}
                />
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

//

const FormHeader = ({
  exercisesNum,
  position,
  exerciseData,
  changeExercisePosition,
}: {
  exercisesNum: number;
  position: number;
  exerciseData: IExerciseDataObject;
  changeExercisePosition: (id: string, to: number) => void;
}): JSX.Element => {
  const { name, id, type }: IExerciseDataObject = exerciseData;

  function handlePositionOnChange(e: SelectChangeEvent): void {
    const to: number = parseInt(e.target.value) - 1;
    changeExercisePosition(id, to);
  }

  function getTitle(): string {
    let exerciseName: string = "Novo Exercício";
    const isExercise1NameFilled: boolean = name.exercise1.length > 0;
    const isExercise2NameFilled: boolean = name.exercise2.length > 0;

    if (isExercise1NameFilled && isExercise2NameFilled) {
      exerciseName = `${name.exercise1} / ${name.exercise2}`;
    } else if (isExercise1NameFilled) {
      exerciseName = name.exercise1;
    }

    const getTypeLabel = (): string => {
      const typeLabel: string | undefined = EXERCISE_TYPES.find(
        (data: ExerciseTypeOption) => data.value === type,
      )?.label;

      return typeLabel ? `${typeLabel} - ` : "";
    };

    return `${getTypeLabel()} ${exerciseName}`;
  }
  return (
    <FormHeaderContainer>
      <PositionSelect
        exercisesNum={exercisesNum}
        position={position}
        handlePositionOnChange={handlePositionOnChange}
      />
      <Typography>{getTitle()}</Typography>
    </FormHeaderContainer>
  );
};

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
    <>
      <Divider>
        <FormSubTitle>Range de Descanso em Segundos</FormSubTitle>
      </Divider>
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
    </>
  );
};

const RepetitionRangeInput = ({
  value,
  handleRepetitionRangeOnChange,
}: {
  value: RepetitionObject;
  handleRepetitionRangeOnChange: (e: ChangeEvent, edge: string) => void;
}): JSX.Element => {
  return (
    <>
      <Divider>
        <FormSubTitle>Range de Repetição</FormSubTitle>
      </Divider>
      <Stack direction={"row"} alignItems={"center"} spacing={"18px"}>
        <TextField
          sx={{ flex: 1 }}
          id="repetitionRangeMin"
          label="Mín."
          type="number"
          inputProps={{ inputMode: "numeric" }}
          value={value.min}
          onChange={(e: ChangeEvent): void =>
            handleRepetitionRangeOnChange(e, "min")
          }
          required
        />
        <TextField
          sx={{ flex: 1 }}
          id="repetitionRangeMax"
          label="Máx."
          type="number"
          inputProps={{ inputMode: "numeric" }}
          value={value.max}
          onChange={(e: ChangeEvent): void =>
            handleRepetitionRangeOnChange(e, "max")
          }
        />
        <FormControlLabel
          control={
            <Switch
              id={"repetitionRangeTillFail"}
              checked={value.tillFail}
              onChange={(e: ChangeEvent): void =>
                handleRepetitionRangeOnChange(e, "tillFail")
              }
            />
          }
          label="Falha"
          labelPlacement="top"
        />
      </Stack>
    </>
  );
};

const EXERCISE_TYPES: Array<ExerciseTypeOption> = [
  {
    label: "Padrão",
    value: "default",
  },
  {
    label: "Drop Set",
    value: "dropset",
  },
  {
    label: "Bi Set",
    value: "biset",
  },
  {
    label: "Aquecimento",
    value: "warmup",
  },
];

type ExerciseTypeOption = { label: string; value: string };

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
        {EXERCISE_TYPES.map(({ label, value }: ExerciseTypeOption) => {
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          );
        })}
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

//

// eslint-disable-next-line @typescript-eslint/typedef
const FormHeaderContainer = styled("div")(() => ({
  position: "sticky",
  top: 48,
  padding: "14px 0",
  textAlign: "center",
  backgroundColor: "gainsboro",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  textTransform: "capitalize",
  "& p": { fontWeight: "bold" },
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
