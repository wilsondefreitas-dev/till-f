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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Divider from "@mui/material/Divider";
import RepeatIcon from "@mui/icons-material/Repeat";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function ExerciseTable() {
  const rows = [
    {
      series: 1,
      reps: `${15}`,
      weight: `${17.5} kg`,
    },
    {
      series: 1,
      reps: `${15}`,
      weight: `${17.5} kg`,
    },
    {
      series: 1,
      reps: `${15}`,
      weight: `${17.5} kg`,
    },
  ];
  return (
    <Stack spacing={1}>
      <Divider />
      <TableTitle justifyContent={"center"}>
        <Typography>
          Aquecimento | <RestoreIcon fontSize="inherit" /> 90s
        </Typography>
        <Typography>Supino Inclinado com Halter</Typography>
      </TableTitle>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Series</TableHeaderCell>
              <TableHeaderCell>
                <RepeatIcon fontSize="inherit" /> Reps. (8 ~ 15)
              </TableHeaderCell>
              <TableHeaderCell>
                <FitnessCenterIcon fontSize="inherit" /> Carga
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.series}>
                <TableCell>
                  <b>{row.series}</b>
                </TableCell>
                <TableCell>
                  {row.reps}
                  <ArrowUpwardIcon fontSize="inherit" color="success" />
                </TableCell>
                <TableCell>
                  {row.weight}
                  <ArrowDownwardIcon fontSize="inherit" color="error" />
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
  "& .MuiTypography-root:first-of-type": {
    fontSize: 12,
  },
  "& .MuiTypography-root:last-child": {
    fontWeight: "bold",
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
