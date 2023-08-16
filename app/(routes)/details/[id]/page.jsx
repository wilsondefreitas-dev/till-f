"use client";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import RepeatIcon from "@mui/icons-material/Repeat";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";

export default function Page({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <MainContainer maxWidth="sm">
      <Header>detalhes</Header>

      <Stack spacing={1}>
        <Stack>
          <HeaderInfo>01 de agosto, quarta | 10:23 → 11h55</HeaderInfo>
          <TrainingTitle variant="h6">
            33° - Treino A - Peito, ombro e tríceps
          </TrainingTitle>
        </Stack>

        <Stack direction="row" spacing={0.5} justifyContent={"center"}>
          <Chip label="01h42 de duração" color="info" size="small" />
          <Chip label="6 de 6 refeições" color="success" size="small" />
          <Chip label="7 de 8 horas de sono" color="warning" size="small" />
        </Stack>

        <Observation>
          <InfoIcon fontSize={"1"} />
          Dor no ombro esquerdo durante o Peck Deck.
        </Observation>
      </Stack>

      <DenseTable />
      <DenseTable />
      <DenseTable />
      <DenseTable />
      <DenseTable />
      <DenseTable />
      <DenseTable />

      {/* <Stack>
        <Typography>
          Aquecimento | Manguito Rotador - <RepeatIcon fontSize="1" />
          20
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 20 <FitnessCenterIcon /> 0 Kg
        </Typography>

        <Typography>
          Aquecimento | Supino Inclinado com Halter -{" "}
          <RepeatIcon fontSize="1" />
          20 - <HourglassTopIcon fontSize="1" />
          45s
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 20 <FitnessCenterIcon /> 8 Kg
        </Typography>
        <Typography>
          S.2: <RepeatIcon /> 20 <FitnessCenterIcon /> 8 Kg
        </Typography>
        <Typography>
          S.3: <RepeatIcon /> 20 <FitnessCenterIcon /> 8 Kg
        </Typography>

        <Typography>
          Supino Inclinado com Halter - <RepeatIcon fontSize="1" />8 ~ 15 -{" "}
          <HourglassTopIcon fontSize="1" />
          90s{" "}
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 15 <FitnessCenterIcon /> 17,5 Kg{" "}
          <ArrowUpwardIcon fontSize="1" color="success" />
        </Typography>
        <Typography>
          S.2: <RepeatIcon /> 10 <FitnessCenterIcon /> 18 Kg{" "}
          <ArrowUpwardIcon fontSize="1" color="success" />
        </Typography>
        <Typography>
          S.3: <RepeatIcon /> 6 <FitnessCenterIcon /> 18 Kg{" "}
          <ArrowUpwardIcon fontSize="1" color="success" />
        </Typography>
        <Typography>
          S.4: <RepeatIcon /> 7 <ArrowUpwardIcon fontSize="1" color="success" />
          <FitnessCenterIcon /> 17,5 Kg{" "}
          <ArrowUpwardIcon fontSize="1" color="success" />
        </Typography>

        <Typography>
          Dropdown | Elevação Lateral - <RepeatIcon fontSize="1" />
          falha - <HourglassTopIcon fontSize="1" />
          90s
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 18
          <ArrowDownwardIcon
            fontSize="1"
            color="error"
          /> <FitnessCenterIcon /> 7 Kg → 5 Kg → 3 Kg
        </Typography>
        <Typography>
          S.2: <RepeatIcon /> 16
          <ArrowDownwardIcon
            fontSize="1"
            color="error"
          /> <FitnessCenterIcon /> 7 Kg → 5 Kg → 3 Kg
        </Typography>
        <Typography>
          S.3: <RepeatIcon /> 15 <FitnessCenterIcon /> 7 Kg → 5 Kg → 3 Kg
        </Typography>
        <Typography>
          S.4: <RepeatIcon /> 14 <FitnessCenterIcon /> 7 Kg → 5 Kg → 3 Kg
        </Typography>
        <Typography>
          S.5: <RepeatIcon /> 10 <FitnessCenterIcon /> 7 Kg → 5 Kg → 3 Kg
        </Typography>

        <Typography>
          Tríceps no Banco - <RepeatIcon fontSize="1" />
          15 - <HourglassTopIcon fontSize="1" />
          90s
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 15 <FitnessCenterIcon /> 0 Kg
        </Typography>
        <Typography>
          S.2: <RepeatIcon /> 15 <FitnessCenterIcon /> 0 Kg
        </Typography>
        <Typography>
          S.3: <RepeatIcon /> 15 <FitnessCenterIcon /> 0 Kg
        </Typography>

        <Typography>
          Biset | Legpress 45 graus - <RepeatIcon fontSize="1" />8 ~ 15 & Afundo
          com halteres - <RepeatIcon fontSize="1" />6 ~ 12 -
          <HourglassTopIcon fontSize="1" />
          90s
        </Typography>
        <Typography>
          S.1: <RepeatIcon /> 12 <FitnessCenterIcon /> 200 Kg | <RepeatIcon />{" "}
          20 <FitnessCenterIcon /> 8 Kg
        </Typography>
        <Typography>
          S.2: <RepeatIcon /> 10
          <ArrowDownwardIcon
            fontSize="1"
            color="error"
          /> <FitnessCenterIcon /> 200 Kg | <RepeatIcon /> 20{" "}
          <FitnessCenterIcon /> 8 Kg
        </Typography>
        <Typography>
          S.3: <RepeatIcon /> 9
          <ArrowDownwardIcon
            fontSize="1"
            color="error"
          /> <FitnessCenterIcon /> 200 Kg | <RepeatIcon /> 20{" "}
          <FitnessCenterIcon /> 8 Kg
        </Typography>
      </Stack> */}
    </MainContainer>
  );
}

//dupe - feed page
const MainContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));

//dupe - feed page
const Header = styled(Typography)(() => ({
  textAlign: "center",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 16,
  borderBottom: "solid 1px rgba(0, 0, 0, 0.3)",
  borderTop: "solid 1px rgba(0, 0, 0, 0.3)",
  padding: 5,
  marginTop: 24, //uniq
}));

const TrainingTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

const HeaderInfo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 0,
}));

const Observation = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

function createData(series, reps, weight) {
  return { series, reps, weight };
}

const rows = [
  createData(1, `${15}`, `${17.5} kg`),
  createData(2, `${10}`, `${18} kg`),
  createData(3, `${7}`, `${18} kg`),
  createData(4, `${12}`, `${17.5} kg`),
];

export function DenseTable() {
  return (
    <Stack spacing={1}>
      <Divider />
      <TableTitle
        direction={"row"}
        justifyContent={"center"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Typography>Aquecimento</Typography>
        <Typography>Supino Inclinado com Halter</Typography>
        <Typography>90s</Typography>
      </TableTitle>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <Table size="small">
          <TableHead>
            {/* <TableRow> */}
            <TableHeaderCell>Series</TableHeaderCell>
            <TableHeaderCell>
              <RepeatIcon fontSize="1" /> Reps. (8 ~ 15)
            </TableHeaderCell>
            <TableHeaderCell>
              <FitnessCenterIcon fontSize="1" /> Carga
            </TableHeaderCell>
            {/* </TableRow> */}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <b>{row.series}</b>
                </TableCell>
                <TableCell>
                  {row.reps}
                  <ArrowUpwardIcon fontSize="1" color="success" />
                </TableCell>
                <TableCell>
                  {row.weight}
                  <ArrowDownwardIcon fontSize="1" color="error" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

const TableTitle = styled(Stack)(() => ({
  fontSize: 15,
  textAlign: "center",
  "& svg": {
    position: "relative",
    top: 2,
    marginRight: 1,
  },
}));

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: "white",
  "& svg": {
    position: "relative",
    top: 3,
    marginRight: 1,
  },
}));
