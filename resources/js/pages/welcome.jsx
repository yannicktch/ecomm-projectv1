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
// Components :
import CarouselCustomNavigation from "../components/carousel";

// Product images : 
import acnetee from '../ASSETS/images/1.jpg';
import saucony from '../ASSETS/images/saucony-jae-tips-love-you-but-im-busy-jazz-9-release-date-1024x536.jpg'
import acneteeblack from '../ASSETS/images/2.webp';

export default function Welcome({ phpVersion }) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />

            <main className="flex flex-row items-center justify-center p-0 m-0">
                <div className="flex w-full justify-center md:w-1/2 m-0">
                    <img src={acnetee} alt="article1" className="w-full h-full object-cover" />
                </div>
                <div className="flex w-full justify-center md:w-1/2 m-0">
                    <img src={acnetee} alt="article1" className="w-full h-full object-cover" />
                </div>
            </main>
            <div className="flex w-full mt-0">
                <img src={saucony} alt="shoes section" className='w-full h-full object-cover' />
            </div>

            <CarouselCustomNavigation />


            <Footer />
        </>
    );
}