"use client";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TrainingCard from "./components/TrainingCard";
import Container from "@mui/material/Container";
import NewTrainingButton from "./components/NewTrainingButton";

export default function Feed() {
  return (
    <MainContainer maxWidth="sm">
      <NewTrainingButton />
      <Header>histórico</Header>

      <HistoricContainer>
        {Array.from(Array(6), (data) => (
          <TrainingCard key={data} />
        ))}
      </HistoricContainer>
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

const HistoricContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100",
}));

const Header = styled(Typography)(() => ({
  textAlign: "center",
  color: "dimgray",
  textTransform: "uppercase",
  fontSize: 16,
  borderBottom: "solid 1px rgba(0, 0, 0, 0.3)",
  borderTop: "solid 1px rgba(0, 0, 0, 0.3)",
  padding: 5,
}));
