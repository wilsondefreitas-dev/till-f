import ExerciseTable from "_components/WorkoutForm/_components/ExerciseTable";
import WorkoutHeader from "_components/WorkoutForm/_components/WorkoutHeader";
import { ExerciseDataObject, TrainingDataObject } from "_interfaces";
import { Historic } from "_utils/mockData";

export default function WorkoutForm({
  trainingData,
  historicMock,
}: {
  trainingData: TrainingDataObject;
  historicMock?: Historic;
}): JSX.Element {
  return (
    <>
      <WorkoutHeader name={trainingData.name} />
      {trainingData.exercises.map((exercise: ExerciseDataObject) => {
        return (
          <ExerciseTable
            key={exercise.id}
            data={exercise}
            historicMock={historicMock}
          />
        );
      })}
    </>
  );
}
