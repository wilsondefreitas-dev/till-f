"use client";
import TrainingForm from "_components/TrainingForm";
import MainHeader from "_components/MainHeader";
import { trainingMock } from "_utils/mockData";

//

type Params = { [key: string]: string };

interface Props {
  params: Params;
}

//

export default function EditTraining({ params }: Props): JSX.Element {
  const { id }: Params = params;

  console.log(id);

  return (
    <>
      <MainHeader>Editar Treino</MainHeader>
      <TrainingForm data={trainingMock} />
    </>
  );
}
