import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled, Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface ICardSmallInfo {
  progressed: boolean;
}

export default function TrainingCard(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  function handleGoToDetails(): void {
    router.push("/training/test");
  }

  return (
    <>
      <Divider>
        <CardHeader>01 de agosto, quarta</CardHeader>
      </Divider>
      <Card>
        <CardContent>
          <Stack spacing={0.8}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CardAvatar>W</CardAvatar>
              <CardHeader>
                <b>wilsondef | </b> 10:23
              </CardHeader>
            </Stack>

            <Stack>
              <Typography variant="h6">
                Treino A - Peito, ombro e tríceps
              </Typography>

              <Stack direction="row" spacing={0.5}>
                <CardChip label="Duração: 01h42" color="info" size="small" />
                <CardChip label="Dieta: 100%" color="success" size="small" />
                <CardChip label="Sono: 70%" color="warning" size="small" />
              </Stack>
            </Stack>

            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CardInfoTitle>Carga:</CardInfoTitle>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <ArrowUpwardIcon fontSize="inherit" color="success" />
                <CardInfo>
                  Supino Inclinado com Halteres&nbsp;
                  <CardSmallInfo progressed={true}>
                    - <b>S.3: </b>17,5 → <b>18 kg</b>
                  </CardSmallInfo>
                </CardInfo>
              </Stack>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <ArrowDownwardIcon fontSize="inherit" color="error" />
                <CardInfo>
                  Desenvolvimento&nbsp;
                  <CardSmallInfo progressed={false}>
                    - <b>S.3: </b>10 → <b>8 kg</b>
                  </CardSmallInfo>
                </CardInfo>
              </Stack>
            </Stack>

            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CardInfoTitle>Repetição:</CardInfoTitle>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <ArrowUpwardIcon fontSize="inherit" color="success" />
                <CardInfo>
                  Crucifixo Inclinado com Halteres&nbsp;
                  <CardSmallInfo progressed={true}>
                    - <b>S.3: </b>10 → <b>12 reps</b>
                  </CardSmallInfo>
                </CardInfo>
              </Stack>
            </Stack>

            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CardInfoTitle>Observação:</CardInfoTitle>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CardInfo>Dor no ombro esquerdo durante o Peck Deck.</CardInfo>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>

        <Divider />

        <CardActions>
          <Button size="small" onClick={handleGoToDetails}>
            ver detalhes
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const CardAvatar = styled(Avatar)(() => ({
  width: 20,
  height: 20,
  fontSize: 12,
  backgroundColor: red[500],
}));

// eslint-disable-next-line @typescript-eslint/typedef
const CardHeader = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const CardChip = styled(Chip)(() => ({
  fontSize: 12,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const CardInfoTitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: "bold",
  color: "#4e4e4e",
}));

// eslint-disable-next-line @typescript-eslint/typedef
const CardInfo = styled(Typography)(() => ({
  fontSize: 14,
}));

// eslint-disable-next-line @typescript-eslint/typedef
const CardSmallInfo = styled("small", {
  shouldForwardProp: (prop: PropertyKey) => prop !== "progressed",
})<ICardSmallInfo>(({ progressed }: { progressed: boolean }) => ({
  color: "gray",
  "& b": {
    color: "#4e4e4e",
  },
  "& b:last-child": {
    color: progressed ? "green" : "red",
  },
}));
