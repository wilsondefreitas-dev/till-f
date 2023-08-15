"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import RepeatIcon from "@mui/icons-material/Repeat";
import Container from "@mui/material/Container";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Page({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <MainContainer maxWidth="sm">
      <Stack>
        <Typography>Treino A - Peito, ombros e tríceps</Typography>
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
      </Stack>
    </MainContainer>
  );
}

const MainContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  paddingBottom: 24,
  minHeight: "100vh",
  backgroundColor: "gainsboro",
  boxShadow: "0px 0px 20px -1px rgba(0, 0, 0, 0.4)",
}));
