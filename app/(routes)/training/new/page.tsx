"use client";
import TrainingForm from "_components/TrainingForm";
import MainHeader from "_components/MainHeader";

export default function NewTraining(): JSX.Element {
  return (
    <>
      <MainHeader>Criar Novo Treino</MainHeader>
      <TrainingForm />
    </>
  );
}
