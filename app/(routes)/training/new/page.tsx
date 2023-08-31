"use client";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MainHeader from "_components/MainHeader";
import LongButton from "_components/LongButton";
import TrainingForm from "./_components/TrainingForm";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
export interface ITrainingDataObject {
  id: string;
  type: string;
}

type TrainingDataState = [
  ITrainingDataObject[],
  Dispatch<SetStateAction<ITrainingDataObject[]>>,
];

type ControlledInputState = [string, Dispatch<SetStateAction<string>>];

export default function NewTraining(): JSX.Element {
  const [name, setName]: ControlledInputState = useState<string>("");
  const [trainingFormsData, setTrainingFormsData]: TrainingDataState = useState<
    ITrainingDataObject[]
  >([]);

  function handleAddTraining(): void {
    addNewTraining();
  }

  function addNewTraining(): void {
    setTrainingFormsData([...trainingFormsData, getTrainingDataObject()]);
  }

  function getTrainingDataObject(): ITrainingDataObject {
    const id: string = trainingFormsData.length.toString();
    return {
      id,
      type: "",
    };
  }

  function updateTrainingDataObject(
    id: string,
    key: keyof ITrainingDataObject,
    value: string,
  ): void {
    const aCopy: ITrainingDataObject[] = [...trainingFormsData];
    const indexToUpdate: number = aCopy.findIndex(
      (data: ITrainingDataObject): boolean => data.id === id,
    );

    if (indexToUpdate === -1)
      throw new Error("Data was not founded by ID on trainingDataObject");
    if (aCopy[indexToUpdate][key] === undefined)
      throw new Error("Key was not found on trainingDataObject");

    aCopy[indexToUpdate][key] = value;
    setTrainingFormsData(aCopy);
  }

  function handleNameOnChange(e: ChangeEvent): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;
    setName(el.value);
  }

  return (
    <>
      <MainHeader>Criar Novo Treino</MainHeader>

      <Stack spacing={"18px"}>
        <TextField
          variant="filled"
          label="Nome"
          value={name}
          onChange={handleNameOnChange}
          required
        />

        {trainingFormsData.map((value: object, index: number) => (
          <TrainingForm
            key={index}
            trainingID={(++index).toString()}
            updateTrainingDataObject={updateTrainingDataObject}
          />
        ))}
      </Stack>

      <LongButton onClick={handleAddTraining}>Adicionar Exercício</LongButton>
      <LongButton disabled={true}>Salvar Treino</LongButton>
    </>
  );
}
