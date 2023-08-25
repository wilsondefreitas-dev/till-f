import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./_styles/global.css";
import MenuAppBar from "./_components/MenuAppBar";
import MainContainer from "./_components/MainContainer";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const metadata = {
  description: "Your workout mate!",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <MenuAppBar showBackButton={false} />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
