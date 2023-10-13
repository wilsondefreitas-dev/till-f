import { TrainingDataObject } from "_interfaces";

export const trainingMock: TrainingDataObject = {
  name: "Treino Teste",
  exercises: [
    {
      id: "5fbb9a58-2db0-4a62-b76f-7493e029e085",
      type: "default",
      seriesNum: "2",
      name: {
        exercise1: "exercisio 1",
        exercise2: "",
      },
      restRange: {
        min: "1",
        max: "2",
      },
      repetitionRange: {
        exercise1: {
          min: "1",
          max: "2",
          tillFail: false,
        },
        exercise2: {
          min: "",
          max: "",
          tillFail: false,
        },
      },
    },
    {
      id: "f2d02248-a15f-41db-950f-3d62d20f3a37",
      type: "biset",
      seriesNum: "2",
      name: {
        exercise1: "Exercicio 2A",
        exercise2: "Exercicio 2B",
      },
      restRange: {
        min: "3",
        max: "4",
      },
      repetitionRange: {
        exercise1: {
          min: "6",
          max: "12",
          tillFail: true,
        },
        exercise2: {
          min: "1",
          max: "2",
          tillFail: false,
        },
      },
    },
    {
      id: "f2d02248-a15f-41db-950f-3d62d50f3a37",
      type: "biset",
      seriesNum: "3",
      name: {
        exercise1: "Exercicio 2A",
        exercise2: "Exercicio 2B",
      },
      restRange: {
        min: "3",
        max: "4",
      },
      repetitionRange: {
        exercise1: {
          min: "6",
          max: "15",
          tillFail: true,
        },
        exercise2: {
          min: "1",
          max: "2",
          tillFail: false,
        },
      },
    },
  ],
};
