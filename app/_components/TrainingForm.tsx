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
  name: string;
}

interface IProps {
  exerciseData: IExerciseDataObject;
  updateExerciseDataObject(
    id: string,
    key: keyof IExerciseDataObject,
    value: string,
  ): void;
  removeTraining(id: string): void;
}

export default function TrainingForm({
  exerciseData,
  updateExerciseDataObject,
  removeTraining,
}: IProps): JSX.Element {
  function handleTypeOnChange(e: SelectChangeEvent): void {
    const type: string = e.target.value;
    updateExerciseDataObject(exerciseData.id, "type", type);
  }

  function handleDeleteOnClick(): void {
    removeTraining(exerciseData.id);
  }

  function handleNameOnChange(e: ChangeEvent): void {
    const name: string = (e.target as HTMLInputElement).value;
    updateExerciseDataObject(exerciseData.id, "name", name);
  }

  function getTitle(): string {
    const defaultTitle: string = "Novo Exercício";
    const isNameFilled: boolean = exerciseData.name.length > 0;

    return isNameFilled ? exerciseData.name : defaultTitle;
  }

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
      <FormHeader>{getTitle()}</FormHeader>

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

                  <TextField id="nameInput" label="Nome" required multiline />

                  <TextField
                    sx={{ flex: 1 }}
                    id="nameInput"
                    label="Número de Repetições"
                    type="number"
                    required
                  />

                  <RestInputsTitle />

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

                  <TextField id="nameInput" label="Nome" required multiline />

                  <TextField
                    sx={{ flex: 1 }}
                    id="nameInput"
                    label="Número de Series"
                    type="number"
                    required
                  />

                  <RestInputsTitle />

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
                  handleNameOnChange={handleNameOnChange}
                  exerciseData={exerciseData}
                />

                <TextField
                  sx={{ flex: 1 }}
                  id="nameInput"
                  label="Número de Series"
                  type="number"
                  inputProps={{ inputMode: "numeric" }}
                  required
                />

                <RestInputsTitle />

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
  exerciseData,
  handleNameOnChange,
}: {
  exerciseData: IExerciseDataObject;
  handleNameOnChange: (e: ChangeEvent) => void;
}): JSX.Element => {
  return (
    <TextField
      id="nameInput"
      label="Nome"
      onChange={handleNameOnChange}
      value={exerciseData.name}
      required
      multiline
    />
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

// eslint-disable-next-line @typescript-eslint/typedef
const FormHeader = styled(Typography)(() => ({
  position: "sticky",
  top: 48,
  padding: "14px 0",
  textAlign: "center",
  backgroundColor: "gainsboro",
  zIndex: 2,
  fontWeight: "bold",
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
