import { useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function NewTrainingButton() {
  const buttonToTrain = useRef(null);
  const fabToTrain = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "object" && typeof document === "object") {
      showFabOnScroll();
    }

    return () => {
      document.onscroll = null;
    };
  }, []);

  function showFabOnScroll() {
    const buttonMarginTopSize = parseInt(
      window
        .getComputedStyle(buttonToTrain.current)
        .getPropertyValue("margin-top"),
    );

    const buttonHeight = buttonToTrain.current.offsetHeight;

    (document.onscroll = () => {
      const showFab = window.scrollY >= buttonMarginTopSize + buttonHeight;
      fabToTrain.current.style.opacity = Number(showFab);
    })();
  }

  function handleOnClick() {
    router.push("/training/new");
  }

  return (
    <>
      <LongButton
        ref={buttonToTrain}
        variant="contained"
        onClick={handleOnClick}
      >
        Novo Treino
      </LongButton>

      <FixedFab ref={fabToTrain} color="primary" onClick={handleOnClick}>
        <AddIcon />
      </FixedFab>
    </>
  );
}

const FixedFab = styled(Fab)(() => ({
  position: "fixed",
  bottom: 24,
  right: 24,
  opacity: 0,
  transition: "opacity 0.25s",
}));

const LongButton = styled(Button)(() => ({
  width: "100%",
  marginTop: 24,
  height: 50,
}));
