import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function WorkoutHeader({ name }: { name: string }): JSX.Element {
  return (
    <Stack spacing={1}>
      <Stack>
        <HeaderInfo>{"01 de agosto, quarta | 10:23 → 11h55"}</HeaderInfo>

        <TrainingTitle variant="h6">{name}</TrainingTitle>
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
