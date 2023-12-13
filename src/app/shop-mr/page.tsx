"use client";
import ContainFirstPage from "./ContainFirstPage";
import Footer from "./Footer";
import Header from "./Header";
export default function Shop() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "130px" }}>
        <ContainFirstPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
