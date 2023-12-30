import { Box, Container, Stack, Avatar, Tabs, Tab } from '@mui/material';
import React from 'react';
import imgs from "public/logo.svg";
import Stories from './Stories';
import Slider from './Slider';
import Linker from './Linker';
import SugestionSlider from './SugestionSlider';
import Banners from './Banners';
import CategoryProduct from './CategoryProduct';
import SugestionSliderTwo from './SugestionSliderTwo';
import HideAppBar from '../Header';
import Footer from '../Footer';

function Story() {
    return (
        <>
            <HideAppBar />
            <main style={{ marginTop: "130px" }}>
                <Stories />
                <Slider />
                <Container maxWidth="xl">
                    {/* <Linker/> */}
                    <SugestionSlider />
                    <Banners />
                    <CategoryProduct />
                    <SugestionSliderTwo />
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    );
}

export default Story;