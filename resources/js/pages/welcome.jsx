import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

// Product images :
// import acnetee from '../ASSETS/images/1.jpg';
import acnejeanjacket from '../ASSETS/images/vesteenjeanoversizeacne.webp';
import saucony from '../ASSETS/images/saucony-jae-tips-love-you-but-im-busy-jazz-9-release-date-1024x536.jpg'
import acneteeblack from '../ASSETS/images/2.webp';

export default function Welcome({ phpVersion }) {
    const [hoverStates, setHoverStates] = useState({
        pantalonsFemme1: false,
        pantalonsHomme1: false,
        shoesSection: false,
        pantalonsFemme2: false,
        pantalonsHomme2: false,
        jeansFemme: false,
        accessoires: false,
        tshirts: false,
        jeansHomme: false,
    });

    const handleMouseEnter = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: false }));
    };

    const hoverText = "> VOIR LA COLLECTION";

    return (
        <>
            <Head title="ucisee">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <Header className="relative z-[50]"/>

            <main className='flex flex-row items-center justify-center p-0'>
                <div
                    className="relative m-0 flex w-full justify-center md:w-1/2 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('pantalonsFemme1')}
                    onMouseLeave={() => handleMouseLeave('pantalonsFemme1')}
                >
                    <Link href='/articles-grid'className=" h-230 w-full">
                    <img src={acnejeanjacket} alt="Pantalons Femme" className="object-cover h-230 w-full" />
                    </Link>
                    <p className={`bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium  text-black cursor-pointer tracking-wider`}>
                        <span>PANTALONS FEMME</span>
                        {hoverStates.pantalonsFemme1 && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                    
                </div>
                <div
                
                    
                    className="relative m-0 flex w-full justify-center md:w-1/2 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('pantalonsHomme1')}
                    onMouseLeave={() => handleMouseLeave('pantalonsHomme1')}
                >
                    <Link href='/articles-grid'className=" h-230 w-full">
                    <img src={acnejeanjacket} alt="Pantalons Femme" className="object-cover h-230 w-full" />
                    </Link>
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>PANTALONS HOMME</span>
                        {hoverStates.pantalonsHomme1 && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>
            </main>

            <div
                className="relative mt-0 flex w-full cursor-pointer"
                onMouseEnter={() => handleMouseEnter('shoesSection')}
                onMouseLeave={() => handleMouseLeave('shoesSection')}
            >
                <Link href='sneakers'className=" h-150 w-full">
                    <img src={saucony} alt="Pantalons Femme" className="object-cover h-150 w-full" />
                    </Link>
                <p className={`bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-white cursor-pointer tracking-wider`}>
                    <span>SHOES SECTION</span>
                    {hoverStates.shoesSection && (
                        <span className="ml-2">{hoverText}</span>
                    )}
                </p>
            </div>

            <div className="m-0 flex flex-row items-center justify-center p-0">
                <div
                    className="relative m-0 flex w-full justify-center md:w-1/2 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('pantalonsFemme2')}
                    onMouseLeave={() => handleMouseLeave('pantalonsFemme2')}
                >
                    <Link href='/articles-grid'className=" h-230 w-full">
                    <img src={acnejeanjacket} alt="SAUCONY JAZZ 9" className="object-cover h-230 w-full" />
                    </Link>
                    <p className={`bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>PANTALONS FEMME</span>
                        {hoverStates.pantalonsFemme2 && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>
                <div
                    className="relative m-0 flex w-full justify-center md:w-1/2 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('pantalonsHomme2')}
                    onMouseLeave={() => handleMouseLeave('pantalonsHomme2')}
                >
                    <img src={acnejeanjacket} alt="Pantalons Homme" className="object-cover h-230 w-full" />
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>PANTALONS HOMME</span>
                        {hoverStates.pantalonsHomme2 && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                <div
                    className="relative w-1/4 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('jeansFemme')}
                    onMouseLeave={() => handleMouseLeave('jeansFemme')}
                >
                    <Link href='/articles-grid'className=" h-100 w-full">
                    <img src={acneteeblack} alt="Jeans Femme" className="block h-100 w-full object-cover" />
                    </Link>
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>JEANS FEMME</span>
                        {hoverStates.jeansFemme && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>

                <div
                    className="relative w-1/4 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('accessoires')}
                    onMouseLeave={() => handleMouseLeave('accessoires')}
                >
                    <Link href='/articles-grid'className=" h-100 w-full">
                    <img src={acneteeblack} alt="Jeans Femme" className="block h-100 w-full object-cover" />
                    </Link>
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>ACCESSOIRES</span>
                        {hoverStates.accessoires && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>

                <div
                    className="relative w-1/4 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('tshirts')}
                    onMouseLeave={() => handleMouseLeave('tshirts')}
                >
                    <Link href='/articles-grid'className=" h-100 w-full">
                    <img src={acneteeblack} alt="Jeans Femme" className="block h-100 w-full object-cover" />
                    </Link>
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>T-SHIRTS</span>
                        {hoverStates.tshirts && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>

                <div
                    className="relative w-1/4 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('jeansHomme')}
                    onMouseLeave={() => handleMouseLeave('jeansHomme')}
                >
                    <Link href='/articles-grid'className=" h-100 w-full">
                    <img src={acneteeblack} alt="Jeans Femme" className="block h-100 w-full object-cover" />
                    </Link>
                    <p className={`absolute top-4 left-4 z-10 px-2 py-1 text-[12px] font-medium text-black cursor-pointer tracking-wider`}>
                        <span>JEANS HOMME</span>
                        {hoverStates.jeansHomme && (
                            <span className="ml-2">{hoverText}</span>
                        )}
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}