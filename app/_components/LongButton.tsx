import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  ForwardRefExoticComponent,
  ForwardedRef,
  RefAttributes,
  forwardRef,
} from "react";

type ForwardRefComp = ForwardRefExoticComponent<
  Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>
>;

type Ref = ForwardedRef<HTMLButtonElement>;

const LongButton: ForwardRefComp = forwardRef(
  (props: ButtonProps, ref: Ref): JSX.Element => {
    return (
      <StyledButton {...props} ref={ref} variant="contained">
        {props.children}
      </StyledButton>
    );
  },
);

LongButton.displayName = "LongButton";

export default LongButton;

// eslint-disable-next-line @typescript-eslint/typedef
const StyledButton = styled(Button)(() => ({
  width: "100%",
  height: 50,
}));
