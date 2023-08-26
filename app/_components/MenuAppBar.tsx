"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

interface IProps {
  showBackButton: boolean;
}

type IMenuAnchorState = [
  null | HTMLElement,
  Dispatch<SetStateAction<HTMLElement | null>>,
];

export default function MenuAppBar({
  showBackButton = true,
}: IProps): JSX.Element {
  const [anchorEl, setAnchorEl]: IMenuAnchorState =
    useState<null | HTMLElement>(null);
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const routesToHideBackButton: string[] = ["/feed"];

  showBackButton = !routesToHideBackButton.includes(pathname);

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  function handleGoBack(): void {
    router.back();
  }

  function handleGoToTrainings(): void {
    handleClose();
    router.push("/training/list");
  }

  return (
    <AppBar position="sticky">
      <ReducedToolbar variant="dense">
        <BackButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ visibility: showBackButton ? "visible" : "hidden" }}
          onClick={handleGoBack}
        >
          <ArrowBackIcon />
        </BackButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Till-F
        </Typography>
        <div>
          <IconButton size="large" onClick={handleMenu} color="inherit">
            <UserAvatar>W</UserAvatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleGoToTrainings}>Ver Treinos</MenuItem>
          </Menu>
        </div>
      </ReducedToolbar>
    </AppBar>
  );
}

// eslint-disable-next-line @typescript-eslint/typedef
const ReducedToolbar = styled(Toolbar)(() => ({
  maxWidth: 600,
  width: "100%",
  margin: "auto",
}));

// eslint-disable-next-line @typescript-eslint/typedef
const UserAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
  fontSize: 14,
  backgroundColor: red[500],
}));

// eslint-disable-next-line @typescript-eslint/typedef
const BackButton = styled(IconButton)(() => ({
  padding: 9,
}));
