"use client";
import LongButton from "_components/LongButton";
import MainHeader from "_components/MainHeader";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { TrainingItem } from "./_components/TrainingItem";

export default function TrainingList(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  function handleCreateNewTraining(): void {
    router.push("/training/new");
  }

  return (
    <>
      <MainHeader>Lista de Treinos</MainHeader>
      <TrainingItem
        name={"Treino A - Peito, ombro e tríceps"}
        exerciseNum={12}
        executedTimes={33}
      />
      <LongButton onClick={handleCreateNewTraining}>
        Criar Novo Treino
      </LongButton>
    </>
  );
}
