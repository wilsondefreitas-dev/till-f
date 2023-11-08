"use client";
import { trainingMock } from "_utils/mockData";
import MainHeader from "_components/MainHeader";
import LongButton from "_components/LongButton";
import WorkoutForm from "_components/WorkoutForm";

export default function NewWorkout(): JSX.Element {
  return (
    <>
      <MainHeader>treinar</MainHeader>
      <WorkoutForm trainingData={trainingMock} />
      <LongButton>Finalizar</LongButton>
    </>
  );
}
