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
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ISeriesData, IWorkoutData } from "../page";

interface IProps {
  data: IWorkoutData;
}

export default function ExerciseTable({ data }: IProps): JSX.Element {
  const { type, restSecs, name, repeatsRange, seriesData }: IWorkoutData = data;
  return (
    <Stack spacing={1}>
      <Divider />
      <TableTitle justifyContent={"center"}>
        <Typography>
          {type} | <RestoreIcon fontSize="inherit" /> {`${restSecs}s`}
        </Typography>
        <Typography>{name}</Typography>
      </TableTitle>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Series</TableHeaderCell>
              <TableHeaderCell>
                <RepeatIcon fontSize="inherit" />
                {`Reps. (${repeatsRange.min} ~ ${repeatsRange.max})`}
              </TableHeaderCell>
              <TableHeaderCell>
                <FitnessCenterIcon fontSize="inherit" /> Carga
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {seriesData.map((row: ISeriesData) => (
              <TableRow key={row.serieNumber}>
                <TableCell>
                  <b>{row.serieNumber}</b>
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

// eslint-disable-next-line @typescript-eslint/typedef
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
