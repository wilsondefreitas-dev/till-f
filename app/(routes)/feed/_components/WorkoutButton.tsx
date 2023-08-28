import { RefObject, useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import LongButton from "../../../_components/LongButton";

export default function WorkoutButton(): JSX.Element {
  const buttonToTrain: RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const fabToTrain: RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    if (typeof window === "object" && typeof document === "object") {
      showFabOnScroll();
    }

    return () => {
      document.onscroll = null;
    };
  }, []);

  function showFabOnScroll(): void {
    if (!buttonToTrain.current) throw new Error("buttonToTrain is not defined");

    const buttonMarginTopSize: number = parseInt(
      window
        .getComputedStyle(buttonToTrain.current)
        .getPropertyValue("margin-top"),
    );

    const buttonHeight: number = buttonToTrain.current.offsetHeight;

    (document.onscroll = (): void => {
      if (!fabToTrain.current) throw new Error("fabToTrain is not defined");

      const showFab: boolean =
        window.scrollY >= buttonMarginTopSize + buttonHeight;

      fabToTrain.current.style.opacity = Number(showFab).toString();
    })();
  }

  function handleOnClick(): void {
    router.push("/workout");
  }

  return (
    <>
      <LongButton ref={buttonToTrain} onClick={handleOnClick}>
        Treinar
      </LongButton>

      <FixedFab ref={fabToTrain} color="primary" onClick={handleOnClick}>
        <FitnessCenterIcon />
      </FixedFab>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const FixedFab = styled(Fab)(() => ({
  position: "fixed",
  bottom: 24,
  right: 24,
  opacity: 0,
  transition: "opacity 0.25s",
}));
