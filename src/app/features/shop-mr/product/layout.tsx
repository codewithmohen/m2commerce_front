// "use client";
import from "../";
import Header from "../Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      < />
    </>
  );
}
