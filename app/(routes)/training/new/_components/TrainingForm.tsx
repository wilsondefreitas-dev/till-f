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
import { Dispatch, SetStateAction, useState } from "react";
import { ITrainingDataObject } from "../page";

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
    <Stack spacing={"18px"}>
      <Divider
        sx={{
          position: "sticky",
          top: "48px",
          backgroundColor: "gainsboro",
          zIndex: 2,
        }}
      >
        <Typography>Exercício {trainingID}</Typography>
      </Divider>
      <Card>
        <CardContent>
          <Stack spacing={"18px"}>
            <FormControl sx={{ marginTop: "0 !important" }} required>
              <InputLabel id="demo-simple-select-filled-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
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
        </CardContent>
      </Card>
    </Stack>
  );
}

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
