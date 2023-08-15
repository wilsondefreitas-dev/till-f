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
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export default function TrainingCard() {
  const router = useRouter();

  return (
    <>
      <Divider>
        <CardHeader>01 de agosto</CardHeader>
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
                <ArrowUpwardIcon fontSize="1" color="success" />
                <CardInfo>
                  Supino Inclinado com Halteres&nbsp;
                  <CardSmallInfo progressed={true}>
                    - <b>S.3: </b>17,5 → <b>18 kg</b>
                  </CardSmallInfo>
                </CardInfo>
              </Stack>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <ArrowDownwardIcon fontSize="1" color="error" />
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
                <ArrowUpwardIcon fontSize="1" color="success" />
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
          <Button size="small" onClick={() => router.push("/details/test")}>
            ver detalhes
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const CardAvatar = styled(Avatar)(() => ({
  width: 20,
  height: 20,
  fontSize: 12,
  backgroundColor: red[500],
}));

const CardHeader = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
}));

const CardChip = styled(Chip)(() => ({
  fontSize: 12,
}));

const CardInfoTitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: "bold",
  color: "#4e4e4e",
}));

const CardInfo = styled(Typography)(() => ({
  fontSize: 14,
}));

const CardSmallInfo = styled("small", {
  shouldForwardProp: (prop) => prop !== "progressed",
})(({ progressed }) => ({
  color: "gray",
  "& b": {
    color: "#4e4e4e",
  },
  "& b:last-child": {
    color: progressed ? "green" : "red",
  },
}));
