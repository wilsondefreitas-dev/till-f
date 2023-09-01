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
import { Dispatch, SetStateAction, useState } from "react";
import { ITrainingDataObject } from "../page";
import { styled, Theme } from "@mui/material/styles";

interface IProps {
  trainingID: string;
  updateTrainingDataObject(
    id: string,
    key: keyof ITrainingDataObject,
    value: string,
  ): void;
}

type ControlledInputState = [string, Dispatch<SetStateAction<string>>];

export default function TrainingForm({
  trainingID,
  updateTrainingDataObject,
}: IProps): JSX.Element {
  const [type, setType]: ControlledInputState = useState<string>("");

  function handleTypeOnChange(e: SelectChangeEvent): void {
    setType(e.target.value);
    updateTrainingDataObject(trainingID, "type", e.target.value);
  }

  return (
    <Stack>
      <FormHeader>{trainingID}º Exercício</FormHeader>

      <Card>
        <CardContent>
          <Stack spacing={"18px"}>
            <FormControl sx={{ marginTop: "0 !important" }} required>
              <InputLabel id="demo-simple-select-filled-label-2">
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label-2"
                id="demo-simple-select-filled-2"
                label="Tipo"
                value={type}
                onChange={handleTypeOnChange}
              >
                <MenuItem value={"default"}>Padrão</MenuItem>
                <MenuItem value={"dropset"}>Drop Set</MenuItem>
                <MenuItem value={"biset"}>Bi Set</MenuItem>
                <MenuItem value={"warmup"}>Aquecimento</MenuItem>
              </Select>
            </FormControl>

            <TextField id="nameInput" label="Nome" required multiline />

            <Stack direction={"row"} spacing={"18px"}>
              <TextField
                sx={{ flex: 1 }}
                id="nameInput"
                label="Número de Series"
                type="number"
                inputProps={{ inputMode: "numeric" }}
                required
              />
            </Stack>

            <Divider>
              <FormSubTitle>Range de Descanso em Segundos</FormSubTitle>
            </Divider>

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

            <Divider>
              <FormSubTitle>Range de Repetição</FormSubTitle>
            </Divider>

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
          </Stack>
        </CardContent>

        <Divider />

        <CardActions>
          <Button size="small">excluir</Button>
        </CardActions>
      </Card>
    </Stack>
  );
}

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

{
  /* <Stack spacing={"18px"}>
          <Divider
            sx={{
              position: "sticky",
              top: "48px",
              backgroundColor: "gainsboro",
              zIndex: 2,
            }}
          >
            <Typography>Exercício 2</Typography>
          </Divider>
          <Card>
            <CardContent>
              <Stack spacing={"18px"}>
                <FormControl sx={{ marginTop: "0 !important" }} required>
                  <InputLabel id="demo-simple-select-filled-label">
                    Tipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    label="Tipo"
                    value={30}
                  >
                    <MenuItem value={10}>Padrão</MenuItem>
                    <MenuItem value={20}>Drop Set</MenuItem>
                    <MenuItem value={30}>Bi Set</MenuItem>
                    <MenuItem value={40}>Aquecimento</MenuItem>
                  </Select>
                </FormControl>

                <Stack component={"fieldset"} spacing={"18px"}>
                  <Typography component={"legend"}>Exercício A</Typography>

                  <TextField id="nameInput" label="Nome" required multiline />

                  <Stack direction={"row"} spacing={"18px"}>
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Número de Repetições"
                      type="number"
                      required
                    />
                  </Stack>

                  <Divider>
                    <Typography>Range de Descanso em Segundos</Typography>
                  </Divider>

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

                  <Divider>
                    <Typography>Range de Repetição</Typography>
                  </Divider>

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
                </Stack>

                <Stack component={"fieldset"} spacing={"18px"}>
                  <Typography component={"legend"}>Exercício B</Typography>

                  <TextField id="nameInput" label="Nome" required multiline />

                  <Stack direction={"row"} spacing={"18px"}>
                    <TextField
                      sx={{ flex: 1 }}
                      id="nameInput"
                      label="Número de Series"
                      type="number"
                      required
                    />
                  </Stack>

                  <Divider>
                    <Typography>Range de Descanso em Segundos</Typography>
                  </Divider>

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

                  <Divider>
                    <Typography>Range de Repetição</Typography>
                  </Divider>

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
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack> */
}
