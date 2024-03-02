// "use client";
// import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
