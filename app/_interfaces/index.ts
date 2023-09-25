export interface TrainingDataObject {
  name: string;
  exercises: ExerciseDataObject[];
}

export interface ExerciseDataObject {
  id: string;
  type: string;
  name: ExerciseNameObject;
  seriesNum: string;
  restRange: RangeObject;
  repetitionRange: ExerciseRepetitionObject;
}

export interface ExerciseRepetitionObject {
  exercise1: RepetitionObject;
  exercise2: RepetitionObject;
}

export interface RangeObject {
  min: string;
  max: string;
}

export interface RepetitionObject extends RangeObject {
  tillFail: boolean;
}

export interface ExerciseNameObject {
  exercise1: string;
  exercise2: string;
}

export type ExerciseTypeOption = { label: string; value: string };
