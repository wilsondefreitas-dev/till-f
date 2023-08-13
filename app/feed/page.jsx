import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

export default function Feed() {
  return (
    <Container maxWidth="sm" className={styles.feed}>
      <Button className={styles.buttonToTrain} variant="contained">
        Novo Treino
      </Button>
      <Typography align="center" variant="subtitle1" color={"#666"}>
        histórico de treinos
      </Typography>
      <div className={styles.historic}>
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </div>
    </Container>
  );
}

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { red } from "@mui/material/colors";

export function BasicCard() {
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
              Aramaçan | 22.08.23 | 10h15 ~ 12h00
            </Typography>
          </Stack>

          <Typography variant="h5" component="div">
            Treino A - Peito e Ombro
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Chip label="Dieta: 100%" color="primary" size="small" />
            <Chip label="Sono: 70%" color="warning" size="small" />
          </Stack>

          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowUpwardIcon fontSize="1" color="success" />
              <Typography sx={{ fontSize: 14 }}>
                Progrediu Carga: Supino Inclinado c/ Halteres + 2
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowDownwardIcon fontSize="1" color="error" />
              <Typography sx={{ fontSize: 14 }}>
                Reduziu Carga: Desenvolvimento
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowUpwardIcon fontSize="1" color="success" />
              <Typography sx={{ fontSize: 14 }}>
                Progrediu Reps.: Crucifixo Inclinado com Halteres + 1
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <ArrowDownwardIcon fontSize="1" color="error" />
              <Typography sx={{ fontSize: 14 }}>Reduziu Reps.: -</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>

      <Divider />

      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}
