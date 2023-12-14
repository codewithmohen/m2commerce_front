import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../Header";
import ContainFirstPage from "./ContainFirstPage";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header />
      {children}
      <h1>Shop Layout</h1> */}
      {/* <Header /> */}
      <Header/>
      {children}
    </>
  );
}
