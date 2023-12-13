'use client'

import ContainFirstPage from "./ContainFirstPage"
import Footer from "./Footer"
import Header from "./Header"
import Shop from "./shop/page";

export default function Home() {
  return (
    <>
      {/* <Header />
      <main style={{ marginTop: "130px" }}>
        <ContainFirstPage />
      </main>
      <footer>
        <Footer />
      </footer> */}
      <Shop/>
    </>
  );
}