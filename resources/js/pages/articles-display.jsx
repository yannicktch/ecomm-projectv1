import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default function ArticlesDisplay() {
    const [hoverStates, setHoverStates] = useState({
        tshirts: false,
        jeansHomme: false,
        jeansFemme: false,
        accessoires: false,
    });

    const handleMouseEnter = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: false }));
    };

    return (
        <>
            <Head title="ucisee" />
            <Header />

            <main className='flex flex-col items-center justify-center p-0'>
                {/* Content goes here */}
            </main>

            <Footer />
        </>
    );
}