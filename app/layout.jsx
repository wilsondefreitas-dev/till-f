import "./_styles/global.css";

export const metadata = {
  title: "Till-F",
  description: "Your workout mate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
