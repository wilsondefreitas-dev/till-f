import { useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function WorkoutButton() {
  const buttonToTrain = useRef<HTMLButtonElement>(null);
  const fabToTrain = useRef<HTMLButtonElement>(null);
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
    if (!buttonToTrain.current) throw new Error("buttonToTrain is not defined");

    const buttonMarginTopSize = parseInt(
      window
        .getComputedStyle(buttonToTrain.current)
        .getPropertyValue("margin-top"),
    );

    const buttonHeight = buttonToTrain.current.offsetHeight;

    (document.onscroll = () => {
      if (!fabToTrain.current) throw new Error("fabToTrain is not defined");
      const showFab = window.scrollY >= buttonMarginTopSize + buttonHeight;
      fabToTrain.current.style.opacity = Number(showFab).toString();
    })();
  }

  function handleOnClick() {
    router.push("/training/workout");
  }

  return (
    <>
      <LongButton
        ref={buttonToTrain}
        variant="contained"
        onClick={handleOnClick}
      >
        Treinar
      </LongButton>

      <FixedFab ref={fabToTrain} color="primary" onClick={handleOnClick}>
        <FitnessCenterIcon />
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
  height: 50,
}));
