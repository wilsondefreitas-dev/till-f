import { EXERCISE_TYPES } from "_utils/constants";
import { ExerciseDataObject, ExerciseTypeOption } from "../../../_interfaces";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import SubHeader from "_components/SubHeader";

//

interface FormHeaderProps {
  exercisesNum: number;
  position: number;
  exerciseData: ExerciseDataObject;
  changeExercisePosition: (id: string, to: number) => void;
}

//

export default function FormHeader({
  exercisesNum,
  position,
  exerciseData,
  changeExercisePosition,
}: FormHeaderProps): JSX.Element {
  const { name, id, type }: ExerciseDataObject = exerciseData;

  function handlePositionOnChange(e: SelectChangeEvent): void {
    const to: number = parseInt(e.target.value) - 1;
    changeExercisePosition(id, to);
  }

  function getTitle(): string {
    let exerciseName: string = "Novo Exercício";
    const isExercise1NameFilled: boolean = name.exercise1.length > 0;
    const isExercise2NameFilled: boolean = name.exercise2.length > 0;

    if (isExercise1NameFilled && isExercise2NameFilled) {
      exerciseName = `${name.exercise1} / ${name.exercise2}`;
    } else if (isExercise1NameFilled) {
      exerciseName = name.exercise1;
    }

    const getTypeLabel = (): string => {
      const typeLabel: string | undefined = EXERCISE_TYPES.find(
        (data: ExerciseTypeOption) => data.value === type,
      )?.label;

      return typeLabel ? `${typeLabel} - ` : "";
    };

    return `${getTypeLabel()} ${exerciseName}`;
  }
  return (
    <SubHeader>
      <PositionSelect
        exercisesNum={exercisesNum}
        position={position}
        handlePositionOnChange={handlePositionOnChange}
      />
      <Typography>{getTitle()}</Typography>
    </SubHeader>
  );
}

interface PositionSelectProps {
  exercisesNum: number;
  position: number;
  handlePositionOnChange: (e: SelectChangeEvent) => void;
}

const PositionSelect = ({
  exercisesNum,
  position,
  handlePositionOnChange,
}: PositionSelectProps): JSX.Element => {
  function getExerciseNum(index: number): string {
    return (index + 1).toString();
  }
  function getExercisePosition(position: number): string {
    return (position + 1).toString();
  }

  return (
    <PositionFormControl variant="standard" size={"small"}>
      <InputLabel></InputLabel>
      <Select
        labelId="position-select"
        id="position-select"
        value={getExercisePosition(position)}
        onChange={handlePositionOnChange}
      >
        {Array.from(new Array(exercisesNum), (_: undefined, index: number) => (
          <MenuItem
            key={`${_}-${index}`}
            value={getExerciseNum(index)}
          >{`${getExerciseNum(index)}°`}</MenuItem>
        ))}
      </Select>
    </PositionFormControl>
  );
};

// eslint-disable-next-line @typescript-eslint/typedef
const PositionFormControl = styled(FormControl)(() => ({
  "& .MuiInputBase-root": { marginTop: "0" },
  "& .MuiSelect-select": { padding: "0 28px 0 10px", fontWeight: "bold" },
}));
