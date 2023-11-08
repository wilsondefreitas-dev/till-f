import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function DetailsHeader(): JSX.Element {
  return (
    <Stack spacing={1}>
      <Stack>
        <HeaderInfo>{"01 de agosto, quarta | 10:23 → 11h55"}</HeaderInfo>

        <TrainingTitle variant="h6">
          {"8° - Treino A - Peito, ombro e tríceps"}
        </TrainingTitle>

        <Stack direction="row" spacing={0.5} justifyContent={"center"}>
          <Chip label={"40:03 de duração"} color="info" size="small" />
          <Chip label={"3 de 6 refeições"} color="success" size="small" />
          <Chip label={"7 de 8 horas de sono"} color="warning" size="small" />
        </Stack>
      </Stack>
    </Stack>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const TrainingTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

// eslint-disable-next-line @typescript-eslint/typedef
const HeaderInfo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 0,
}));
