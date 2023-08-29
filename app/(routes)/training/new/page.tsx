"use client";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MainHeader from "_components/MainHeader";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LongButton from "_components/LongButton";
import { Card, CardContent } from "@mui/material";

export default function NewTraining(): JSX.Element {
  return (
    <>
      <MainHeader>Criar Novo Treino</MainHeader>
      <Stack spacing={"18px"}>
        <TextField variant="filled" id="nameInput" label="Nome" required />

        <Stack spacing={"18px"}>
          <Divider
            sx={{
              position: "sticky",
              top: "48px",
              backgroundColor: "gainsboro",
              zIndex: 2,
            }}
          >
            <Typography>Exercício 1</Typography>
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
                  >
                    <MenuItem value={10}>Padrão</MenuItem>
                    <MenuItem value={20}>Drop Set</MenuItem>
                    <MenuItem value={30}>Bi Set</MenuItem>
                    <MenuItem value={40}>Aquecimento</MenuItem>
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

        <Stack spacing={"18px"}>
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
        </Stack>
      </Stack>
      <LongButton>Adicionar Exercício</LongButton>
      <LongButton>Salvar Treino</LongButton>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
// const FormContainer = styled(Stack)(() => ({
//   "& .MuiOutlinedInput-notchedOutline": {
//     backgroundColor: "white",
//   },
// }));
