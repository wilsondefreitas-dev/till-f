"use client";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MainHeader from "_components/MainHeader";
import LongButton from "_components/LongButton";
import TrainingForm, {
  IExerciseDataObject,
} from "../../../_components/TrainingForm";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type TrainingDataState = [
  IExerciseDataObject[],
  Dispatch<SetStateAction<IExerciseDataObject[]>>,
];

type ControlledInputState = [string, Dispatch<SetStateAction<string>>];

export default function NewTraining(): JSX.Element {
  const [name, setName]: ControlledInputState = useState<string>("");
  const [trainingFormsData, setTrainingFormsData]: TrainingDataState = useState<
    IExerciseDataObject[]
  >([]);

  function handleAddExercise(): void {
    addNewExercise();
  }

  function addNewExercise(): void {
    setTrainingFormsData([...trainingFormsData, getNewExerciseDataObject()]);
  }

  function removeTraining(id: string): void {
    const aCopy: IExerciseDataObject[] = [...trainingFormsData];
    const indexToDelete: number = aCopy.findIndex(
      (data: IExerciseDataObject): boolean => data.id === id,
    );

    aCopy.splice(indexToDelete, 1);
    setTrainingFormsData(aCopy);
  }

  function getNewExerciseDataObject(): IExerciseDataObject {
    return {
      id: uuidv4(),
      type: "",
      name: "",
    };
  }

  function updateExerciseDataObject(
    id: string,
    key: keyof IExerciseDataObject,
    value: string,
  ): void {
    const aCopy: IExerciseDataObject[] = [...trainingFormsData];
    const indexToUpdate: number = aCopy.findIndex(
      (data: IExerciseDataObject): boolean => data.id === id,
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

      <Stack>
        <TextField
          variant="standard"
          label="Nome"
          value={name}
          onChange={handleNameOnChange}
          required
          multiline
        />

        {trainingFormsData.map((value: IExerciseDataObject, index: number) => (
          <TrainingForm
            key={index}
            exerciseData={value}
            updateExerciseDataObject={updateExerciseDataObject}
            removeTraining={removeTraining}
          />
        ))}
      </Stack>

      <LongButton onClick={handleAddExercise}>Adicionar Exercício</LongButton>
      <LongButton disabled={true}>Salvar Treino</LongButton>
    </>
  );
}
