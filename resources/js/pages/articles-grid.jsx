import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Categorynav from '../components/category-nav';
import Articlespath from '../components/articles-path';
// import Grid from '../components/grid';
import Grid2 from '../components/grid2';

export default function ArticlesGrid() {
    return (
        <>
            <Head title="ucisee" />
            <Header />

            <main>
                <div>
                    <p className="bg-white text-black text-[12px] mt-10 pl-7">VÊTEMENTS FEMME</p>
                </div>
                <Categorynav />
                <Articlespath />
                {/* <Grid /> */}
                <Grid2 />
            </main>
            <Footer />
        </>
    );
}
