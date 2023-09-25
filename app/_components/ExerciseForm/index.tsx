import { ChangeEvent, memo } from "react";
import Stack from "@mui/material/Stack";
import { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import {
  ExerciseDataObject,
  ExerciseNameObject,
  RangeObject,
  ExerciseRepetitionObject,
  RepetitionObject,
} from "../../_interfaces";
import FormHeader from "./_components/FormHeader";
import {
  NameInput,
  RepetitionRangeInput,
  RestRangeInput,
  SeriesNumberInput,
  TypeSelect,
} from "./_components/Inputs";

//

interface Props {
  exerciseData: ExerciseDataObject;
  exercisesNum: number;
  position: number;
  removeTraining(id: string): void;
  changeExercisePosition(id: string, to: number): void;
  updateExerciseDataObject(
    id: string,
    key: keyof ExerciseDataObject,
    value: string | ExerciseNameObject | RangeObject | ExerciseRepetitionObject,
  ): void;
}

interface SubExercise {
  title: string;
}

//

function ExerciseForm({
  exerciseData,
  exercisesNum,
  position,
  removeTraining,
  changeExercisePosition,
  updateExerciseDataObject,
}: Props): JSX.Element {
  const subExercisesDatas: Array<SubExercise> = [
    { title: "Exercício A" },
    { title: "Exercício B" },
  ];

  function handleTypeOnChange(e: SelectChangeEvent): void {
    const type: string = e.target.value;

    updateExerciseDataObject(exerciseData.id, "type", type);
  }

  function handleSeriesNumberOnChange(e: ChangeEvent): void {
    const seriesNumValue: string = (e.target as HTMLInputElement).value;

    updateExerciseDataObject(exerciseData.id, "seriesNum", seriesNumValue);
  }

  function handleNameOnChange(e: ChangeEvent, subExerciseNum: number): void {
    const nameValue: string = (e.target as HTMLInputElement).value;
    const exerciseKey: string = `exercise${subExerciseNum}`;

    const newNameObj: ExerciseNameObject = {
      ...exerciseData.name,
      [exerciseKey]: nameValue,
    };

    updateExerciseDataObject(exerciseData.id, "name", newNameObj);
  }

  function handleRestRangeOnChange(e: ChangeEvent, edge: string): void {
    const rangeNumValue: string = (e.target as HTMLInputElement).value;

    const newRangeNumObj: RangeObject = {
      ...exerciseData.restRange,
      [edge]: rangeNumValue,
    };

    updateExerciseDataObject(exerciseData.id, "restRange", newRangeNumObj);
  }

  function handleRepetitionOnChange(
    e: ChangeEvent,
    subExerciseNum: number,
    edge: string,
  ): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    const repetitionRangeValue: string | boolean = getInputValue(inputElement);
    const exerciseKey: string = `exercise${subExerciseNum}`;
    const exerciseCurrentValue: RepetitionObject =
      exerciseData.repetitionRange[
        exerciseKey as keyof ExerciseRepetitionObject
      ];

    const newRepetitionRangeObj: ExerciseRepetitionObject = {
      ...exerciseData.repetitionRange,
      [exerciseKey]: {
        ...exerciseCurrentValue,
        [edge]: repetitionRangeValue,
      },
    };

    if (edge == "tillFail" && repetitionRangeValue === true) {
      newRepetitionRangeObj[exerciseKey as keyof ExerciseRepetitionObject].max =
        "";
    }

    updateExerciseDataObject(
      exerciseData.id,
      "repetitionRange",
      newRepetitionRangeObj,
    );

    function getInputValue(inputElement: HTMLInputElement): string | boolean {
      if (inputElement.type === "checkbox") {
        return inputElement.checked;
      } else {
        return inputElement.value;
      }
    }
  }

  function handleDeleteOnClick(): void {
    removeTraining(exerciseData.id);
  }

  return (
    <Stack>
      <FormHeader
        exerciseData={exerciseData}
        exercisesNum={exercisesNum}
        position={position}
        changeExercisePosition={changeExercisePosition}
      />

      <Card>
        <CardContent>
          <Stack spacing={"18px"}>
            <TypeSelect
              exerciseData={exerciseData}
              handleTypeOnChange={handleTypeOnChange}
            />

            {exerciseData.type !== "biset" && (
              <NameInput
                handleNameOnChange={(e: ChangeEvent<Element>): void =>
                  handleNameOnChange(e, 1)
                }
                value={exerciseData.name.exercise1}
              />
            )}

            <SeriesNumberInput
              handleSeriesNumberOnChange={handleSeriesNumberOnChange}
              value={exerciseData.seriesNum}
            />

            <RestRangeInput
              handleRestRangeOnChange={handleRestRangeOnChange}
              value={exerciseData.restRange}
            />

            {exerciseData.type === "biset" ? (
              <>
                {subExercisesDatas.map((data: SubExercise, index: number) => {
                  const exerciseNumber: number = index + 1;
                  const exerciseKey: keyof ExerciseRepetitionObject =
                    `exercise${exerciseNumber}` as keyof ExerciseRepetitionObject;
                  return (
                    <SubExercise key={data.title}>
                      <Typography component={"legend"}>{data.title}</Typography>

                      <NameInput
                        handleNameOnChange={(e: ChangeEvent<Element>): void =>
                          handleNameOnChange(e, exerciseNumber)
                        }
                        value={exerciseData.name[exerciseKey]}
                      />

                      <RepetitionRangeInput
                        handleRepetitionRangeOnChange={(
                          e: ChangeEvent<Element>,
                          edge: string,
                        ): void =>
                          handleRepetitionOnChange(e, exerciseNumber, edge)
                        }
                        value={exerciseData.repetitionRange[exerciseKey]}
                      />
                    </SubExercise>
                  );
                })}
              </>
            ) : (
              <>
                <RepetitionRangeInput
                  handleRepetitionRangeOnChange={(
                    e: ChangeEvent<Element>,
                    edge: string,
                  ): void => handleRepetitionOnChange(e, 1, edge)}
                  value={exerciseData.repetitionRange.exercise1}
                />
              </>
            )}
          </Stack>
        </CardContent>

        <Divider />

        <CardActions>
          <Button size="small" onClick={handleDeleteOnClick}>
            excluir
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}

export default memo(ExerciseForm);

// eslint-disable-next-line @typescript-eslint/typedef
const SubExercise = styled("fieldset")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  borderColor: "rgba(0, 0, 0, 0.23)",
  borderRadius: 4,
}));
