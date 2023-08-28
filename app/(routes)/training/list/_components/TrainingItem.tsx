import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Edit from "@mui/icons-material/Edit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";

interface IProps {
  name: string;
  exerciseNum: number;
  executedTimes: number;
}

export const TrainingItem = ({
  name,
  exerciseNum,
  executedTimes,
}: IProps): JSX.Element => {
  const router: AppRouterInstance = useRouter();

  function handleGoToEdit(): void {
    router.push("/training/edit/1111");
  }

  return (
    <>
      <Card onClick={handleGoToEdit}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Edit />
            </IconButton>
          }
        >
          <ListItemText
            primary={name}
            secondary={`${exerciseNum} exercícios | ${executedTimes} vezes executado`}
          />
        </ListItem>
      </Card>
    </>
  );
};
