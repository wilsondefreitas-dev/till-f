import { Historic, TrainingDataObject } from "_interfaces";

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
      seriesNum: "4",
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
  ],
};

export const trainingListMock: Array<TrainingDataObject> = [
  trainingMock,
  trainingMock,
  trainingMock,
];

export const historicMock: Historic = {
  exercises: [
    {
      id: "5fbb9a58-2db0-4a62-b76f-7493e029e085",
      comment: "Feeling something...",
      series: [
        {
          exercise_1: {
            repetitions: 8,
            weight: 15,
          },
        },
        {
          exercise_1: {
            repetitions: 9,
            weight: 17,
          },
        },
      ],
    },
    {
      id: "f2d02248-a15f-41db-950f-3d62d20f3a37",
      comment: "Feeling something else...",
      series: [
        {
          exercise_1: {
            repetitions: 8,
            weight: 15,
          },
          exercise_2: {
            repetitions: 6,
            weight: 17,
          },
        },
        {
          exercise_1: {
            repetitions: 3,
            weight: 11,
          },
          exercise_2: {
            repetitions: 7,
            weight: 9,
          },
        },
        {
          exercise_1: {
            repetitions: 8,
            weight: 15,
          },
          exercise_2: {
            repetitions: 6,
            weight: 17,
          },
        },
        {
          exercise_1: {
            repetitions: 3,
            weight: 11,
          },
          exercise_2: {
            repetitions: 7,
            weight: 9,
          },
        },
      ],
    },
  ],
};
