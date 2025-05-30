// import { Head, Link, usePage } from '@inertiajs/react';
// import { Fragment, useState } from 'react';
// ;
// // import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import Header from '@/Components/Header';
// import Footer from '@/Components/Footer';
// //import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';

// export default function Welcome() {
//   const { auth } = usePage().props; // Correctly placed usePage() hook

//   const currencies = ['EUR', 'CAD', 'USD', 'AUD', 'GBP'];

 

//   const [open, setOpen] = useState(false);

//   return (
//     <>
      <Head title="ucisee.shop">
//         <link rel="preconnect" href="https://fonts.bunny.net" />
//         <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
//       </Head>

//       <Header />


      


//       <Footer />
//     </>
//   );
// }

import { Head, Link } from '@inertiajs/react';
import Footer from '../components/footer';
import Header from '../components/header';
import Secondheader from '../components/secondheader';
// Components :

// Product images : 
import acnetee from '../ASSETS/images/1.jpg';
import saucony from '../ASSETS/images/saucony-jae-tips-love-you-but-im-busy-jazz-9-release-date-1024x536.jpg'
import acneteeblack from '../ASSETS/images/2.webp';

export default function Welcome({ phpVersion }) {
    return (
        <>
            <Head title="ucisee">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <Header />

            <main className='flex flex-row items-center justify-center p-0'>
                {/* <div className="m-0 flex flex-row items-center justify-center p-0"> */}
                    <div className="relative m-0 flex w-full justify-center md:w-1/2">
                        <img src={acnetee} alt="article1" className="object-fit h-250 w-full" />
                        <p className="bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">PANTALONS FEMME</p>
                    </div>
                <div className="relative m-0 flex w-full justify-center md:w-1/2">
                    <img src={acnetee} alt="article1" className="object-fit h-250 w-full" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">PANTALONS HOMME</p>
                </div>
            {/* </div> */}
            </main>
            

            <div className="relative mt-0 flex w-full">
                <img src={saucony} alt="shoes section" className="h-150 w-full object-cover" />
                <p className="bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-white">SHOES SECTION</p>
            </div>

            <div className="m-0 flex flex-row items-center justify-center p-0">
                <div className="relative m-0 flex w-full justify-center md:w-1/2">
                    <img src={acnetee} alt="article1" className="object-fit h-250 w-full" />
                    <p className="bg-opacity-50 absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">PANTALONS FEMME</p>
                </div>
                <div className="relative m-0 flex w-full justify-center md:w-1/2">
                    <img src={acnetee} alt="article1" className="object-fit h-250 w-full" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">PANTALONS HOMME</p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                {/* Image 1 avec son texte */}
                <div className="relative w-1/4">
                    {' '}
                    {/* Ce conteneur prend 1/4 de la largeur et est relatif */}
                    <img src={acneteeblack} alt="T-shirt Acne Studios 1" className="block h-150 w-full object-cover" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">JEANS FEMME</p>
                </div>

                {/* Image 2 avec son texte */}
                <div className="relative w-1/4">
                    <img src={acneteeblack} alt="T-shirt Acne Studios 2" className="block h-150 w-full object-cover" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">ACCESSOIRES</p>
                </div>

                {/* Image 3 avec son texte */}
                <div className="relative w-1/4">
                    <img src={acneteeblack} alt="T-shirt Acne Studios 3" className="block h-150 w-full object-cover" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">T-SHIRTS</p>
                </div>

                {/* Image 4 avec son texte */}
                <div className="relative w-1/4">
                    <img src={acneteeblack} alt="T-shirt Acne Studios 4" className="block h-150 w-full object-cover" />
                    <p className="absolute top-4 left-4 z-10 px-2 py-1 text-[12px] text-black">JEANS HOMME</p>
                </div>
            </div>

            <Footer />

            <Secondheader />
        </>
    );
}