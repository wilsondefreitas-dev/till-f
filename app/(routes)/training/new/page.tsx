"use client";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MainHeader from "_components/MainHeader";
import LongButton from "_components/LongButton";
import TrainingForm from "../../../_components/TrainingForm";
import {
  ExerciseDataObject,
  RangeObject,
  RepetitionObject,
} from "_components/TrainingForm/_interfaces";

//

type TrainingDataState = [
  ExerciseDataObject[],
  Dispatch<SetStateAction<ExerciseDataObject[]>>,
];

type ControlledInputState = [string, Dispatch<SetStateAction<string>>];

//

export default function NewTraining(): JSX.Element {
  const [name, setName]: ControlledInputState = useState<string>("");
  const [trainingFormsData, setTrainingFormsData]: TrainingDataState = useState<
    ExerciseDataObject[]
  >([]);

  const rangeObject: RangeObject = {
    min: "",
    max: "",
  };
  const repetitionObject: RepetitionObject = {
    ...rangeObject,
    tillFail: false,
  };

  function handleAddExercise(): void {
    addNewExercise();
  }

  function addNewExercise(): void {
    setTrainingFormsData([...trainingFormsData, getNewExerciseDataObject()]);
  }

  const removeTraining: (id: string) => void = useCallback(
    (id: string): void => {
      const aCopy: ExerciseDataObject[] = [...trainingFormsData];
      const indexToDelete: number = aCopy.findIndex(
        (data: ExerciseDataObject): boolean => data.id === id,
      );

      aCopy.splice(indexToDelete, 1);
      setTrainingFormsData(aCopy);
    },
    [trainingFormsData],
  );

  function getNewExerciseDataObject(): ExerciseDataObject {
    return {
      id: uuidv4(),
      type: "",
      seriesNum: "",
      name: {
        exercise1: "",
        exercise2: "",
      },
      restRange: {
        min: "",
        max: "",
      },
      repetitionRange: {
        exercise1: repetitionObject,
        exercise2: repetitionObject,
      },
    };
  }

  /**
   * 'no-explicit-any' is disabled on this function
   * because I want the possibility to set the
   * attributes of ExerciseDataPattern in a generic
   * way. To avoid this, I should create specific
   * functions to set the attributes based on their
   * type. At this POC moment, make no sense, since
   * I'm still finding out the attributes types.
   */

  const updateExerciseDataObject: (
    id: string,
    key: keyof ExerciseDataObject,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
  ) => void = useCallback(
    (
      id: string,
      key: keyof ExerciseDataObject,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any,
    ): void => {
      const aCopy: ExerciseDataObject[] = [...trainingFormsData];
      const indexToUpdate: number = aCopy.findIndex(
        (data: ExerciseDataObject): boolean => data.id === id,
      );

      if (indexToUpdate === -1)
        throw new Error("Data was not founded by ID on trainingDataObject");
      if (aCopy[indexToUpdate][key] === undefined)
        throw new Error("Key was not found on trainingDataObject");

      if (key === "type") {
        const currentTypeIsBiset: boolean =
          aCopy[indexToUpdate][key] === "biset";

        if (currentTypeIsBiset) {
          aCopy[indexToUpdate] = getDataWithExercise2Reseted(
            aCopy[indexToUpdate],
          );
        }
      }

      aCopy[indexToUpdate][key] = value;
      setTrainingFormsData(aCopy);
    },
    [trainingFormsData],
  );

  function getDataWithExercise2Reseted(
    data: ExerciseDataObject,
  ): ExerciseDataObject {
    data.name.exercise2 = "";
    data.repetitionRange.exercise2 = repetitionObject;

    return data;
  }

  function handleTrainingNameOnChange(e: ChangeEvent): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;

    setName(el.value);
  }

  const changeExercisePosition: (id: string, to: number) => void = useCallback(
    (id: string, to: number): void => {
      const aCopy: ExerciseDataObject[] = [...trainingFormsData];
      const exerciseToSwapPosition: number = getExercisePosition(id);
      const exerciseToSwap: ExerciseDataObject = aCopy[exerciseToSwapPosition];

      aCopy[exerciseToSwapPosition] = aCopy[to];
      aCopy[to] = exerciseToSwap;

      setTrainingFormsData(aCopy);
    },
    [trainingFormsData],
  );

  function getExercisePosition(id: string): number {
    const exercise: ExerciseDataObject | undefined = trainingFormsData.find(
      (exercise: ExerciseDataObject) => exercise.id === id,
    );

    if (!exercise) throw new Error("Exercise not found in trainingFormsData");

    return trainingFormsData.indexOf(exercise);
  }

  console.log(trainingFormsData);

  return (
    <>
      <MainHeader>Criar Novo Treino</MainHeader>

      <Stack>
        <TextField
          variant="standard"
          label="Nome"
          value={name}
          onChange={handleTrainingNameOnChange}
          required
          multiline
        />

        {trainingFormsData.map((value: ExerciseDataObject, index: number) => (
          <TrainingForm
            key={index}
            exerciseData={value}
            updateExerciseDataObject={updateExerciseDataObject}
            changeExercisePosition={changeExercisePosition}
            removeTraining={removeTraining}
            exercisesNum={trainingFormsData.length}
            position={getExercisePosition(value.id)}
          />
        ))}
      </Stack>

      <LongButton onClick={handleAddExercise}>Adicionar Exercício</LongButton>
      <LongButton disabled={true}>Salvar Treino</LongButton>
    </>
  );
}
