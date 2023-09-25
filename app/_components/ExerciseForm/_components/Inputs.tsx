import { ChangeEvent } from "react";
import { EXERCISE_TYPES } from "_utils/constants";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled, Theme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import {
  ExerciseDataObject,
  RepetitionObject,
  ExerciseTypeOption,
  RangeObject,
} from "../../../_interfaces";

export const NameInput = ({
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

export const SeriesNumberInput = ({
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

export const RestRangeInput = ({
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

export const RepetitionRangeInput = ({
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
          disabled={value.tillFail}
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

export const TypeSelect = ({
  exerciseData,
  handleTypeOnChange,
}: {
  exerciseData: ExerciseDataObject;
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

// eslint-disable-next-line @typescript-eslint/typedef
const FormSubTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
