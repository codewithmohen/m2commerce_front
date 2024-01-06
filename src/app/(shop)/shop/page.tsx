'use client';
import React from 'react';
import { Box, Container, Stack, Avatar, Tabs, Tab } from '@mui/material';
import Stories from './_componenets/Stories';
import Slider from './_componenets/Slider';
import Linker from './_componenets/Linker';
import SugestionSlider from './_componenets/SugestionSlider';
import Banners from './_componenets/Banners';
import CategoryProduct from './_componenets/CategoryProduct';
import SugestionSliderTwo from './_componenets/SugestionSliderTwo';
import Header from './_componenets/Header';
import Footer from './_componenets/Footer';

export default function Page() {
    return (
        <>
            <Header />
            <main style={{ marginTop: "130px" }}>
                <Stories />
                <Slider />
                <Container maxWidth="xl">
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