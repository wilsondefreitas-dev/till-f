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
import { red } from "@mui/material/colors";

export default function TrainingCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={0.8}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Avatar
              sx={{
                width: 20,
                height: 20,
                fontSize: "12px",
                backgroundColor: red[500],
              }}
            >
              W
            </Avatar>

            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <b>wilsondef | </b>Aramaçan • 22.08.23 • 01:40
            </Typography>
          </Stack>

          <Typography variant="h6" component="div">
            Treino A - Peito, ombro e tríceps
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Chip label="Dieta: 100%" color="primary" size="small" />
            <Chip label="Sono: 70%" color="warning" size="small" />
            <Chip
              label="Satisfação: 😃 😃 🫥"
              variant="outlined"
              size="small"
            />
          </Stack>

          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ fontSize: 14, color: "#4e4e4e" }}>
                <b>Carga:</b>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowUpwardIcon fontSize="1" color="success" />
              <Typography sx={{ fontSize: 14 }}>
                Supino Inclinado com Halteres{" "}
                <small>
                  - <b style={{ color: "#4e4e4e" }}>S:3</b> (17,5 &gt;{" "}
                  <b style={{ color: "green" }}>18 kg</b>)
                </small>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowUpwardIcon fontSize="1" color="success" />
              <Typography sx={{ fontSize: 14 }}>
                Peck Deck{" "}
                <small>
                  - <b style={{ color: "#4e4e4e" }}>S:2</b> (50 &gt;{" "}
                  <b style={{ color: "green" }}>55 kg</b>)
                </small>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowDownwardIcon fontSize="1" color="error" />
              <Typography sx={{ fontSize: 14 }}>
                Desenvolvimento{" "}
                <small>
                  - <b style={{ color: "#4e4e4e" }}>S:3</b> (10 &gt;{" "}
                  <b style={{ color: "red" }}>8 kg</b>)
                </small>
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ fontSize: 14, color: "#4e4e4e" }}>
                <b>Repetição:</b>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowUpwardIcon fontSize="1" color="success" />
              <Typography sx={{ fontSize: 14 }}>
                Crucifixo Inclinado com Halteres{" "}
                <small>
                  - <b style={{ color: "#4e4e4e" }}>S:3</b> (10 &gt;{" "}
                  <b style={{ color: "green" }}>12</b>)
                </small>
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ fontSize: 14, color: "#4e4e4e" }}>
                <b>Observação:</b>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ fontSize: 14 }}>
                Dor no ombro esquerdo durante o Peck Deck.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}
