import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./_styles/global.css";
import MenuAppBar from "./_components/MenuAppBar";
import MainContainer from "./_components/MainContainer";

export const metadata = {
  description: "Your workout mate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuAppBar showBackButton={false} />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
