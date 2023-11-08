"use client";
import { historicMock, trainingMock } from "_utils/mockData";
import MainHeader from "_components/MainHeader";
import WorkoutForm from "_components/WorkoutForm";

export default function Details(): JSX.Element {
  return (
    <>
      <MainHeader>detalhes</MainHeader>
      <WorkoutForm trainingData={trainingMock} historicMock={historicMock} />
    </>
  );
}
