'use client'
import Button from '@mui/material/Button';
import ContainFirstPage from '../ContainFirstPage';
import Footer from '../Footer';
import Header from '../Header';
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
        {/* <h1>Shop</h1>
        <Button variant="contained">Hello world</Button> */}
      </>
    );
}