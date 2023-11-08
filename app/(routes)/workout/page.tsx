"use client";
import { trainingListMock, trainingMock } from "_utils/mockData";
import MainHeader from "_components/MainHeader";
import LongButton from "_components/LongButton";
import WorkoutForm from "_components/WorkoutForm";
import { TrainingDataObject } from "_interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function NewWorkout(): JSX.Element {
  const [selectedTraining, setSelectedTraining]: [
    string | null,
    Dispatch<SetStateAction<string | null>>,
  ] = useState<string | null>(null);

  const [liveTraining, setLiveTraining]: [
    boolean | null,
    Dispatch<SetStateAction<boolean | null>>,
  ] = useState<boolean | null>(null);

  const [dateObject, setDateObject]: [
    { date: string; init: string; end: string } | null,
    Dispatch<
      SetStateAction<{ date: string; init: string; end: string } | null>
    >,
  ] = useState<{ date: string; init: string; end: string } | null>(null);

  return (
    <>
      <MainHeader>treinar</MainHeader>
      {!selectedTraining && (
        <TrainingSelect setSelectedTraining={setSelectedTraining} />
      )}
      {selectedTraining && liveTraining === null && (
        <RegisterTypeModal setLiveTraining={setLiveTraining} />
      )}
      {liveTraining === false && !dateObject && (
        <DateForm setDateObject={setDateObject} />
      )}
      {(liveTraining || (liveTraining === false && dateObject)) && <Form />}
    </>
  );
}

function TrainingSelect({
  setSelectedTraining,
}: {
  setSelectedTraining: Dispatch<SetStateAction<string | null>>;
}): JSX.Element {
  function handleTrainingOnChange(e: SelectChangeEvent): void {
    setSelectedTraining(e.target.value);
  }

  return (
    <>
      <label>Selecione o treino</label>
      <Select onChange={handleTrainingOnChange}>
        {trainingListMock.map((training: TrainingDataObject) => {
          return (
            <MenuItem key={training.name} value={training.name}>
              {training.name}
            </MenuItem>
          );
        })}
      </Select>
      <LongButton>Confirmar</LongButton>
    </>
  );
}

function RegisterTypeModal({
  setLiveTraining,
}: {
  setLiveTraining: Dispatch<SetStateAction<boolean | null>>;
}): JSX.Element {
  return (
    <>
      <h3>O que você deseja fazer?</h3>
      <button onClick={(): void => setLiveTraining(true)}>Treinar agora</button>
      <button onClick={(): void => setLiveTraining(false)}>
        Registrar Treino passado
      </button>
    </>
  );
}

function DateForm({
  setDateObject,
}: {
  setDateObject: Dispatch<
    SetStateAction<{ date: string; init: string; end: string } | null>
  >;
}): JSX.Element {
  return (
    <>
      <h3>Insira os dados sobre o treino passado</h3>
      <>
        <label>Data</label>
        <input type="date" />
      </>
      <>
        <label>Horário de ínicio</label>
        <input type="time" />
      </>
      <>
        <label>Horário de término</label>
        <input type="time" />
      </>
      <LongButton
        onClick={(): void =>
          setDateObject({ date: "xpto", init: "xpto", end: "xpto" })
        }
      >
        Salvar
      </LongButton>
    </>
  );
}

function Form(): JSX.Element {
  return (
    <>
      <WorkoutForm trainingData={trainingMock} />
      <LongButton>Salvar</LongButton>
    </>
  );
}
