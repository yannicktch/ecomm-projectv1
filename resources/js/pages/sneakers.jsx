import { Head, Link } from '@inertiajs/react';
import vomero from '../ASSETS/images/nike-zoom-vomero-5-varsity-maize-fj4453-765pic02.jpeg';
import saucony from '../ASSETS/images/saucony-jae-tips-love-you-but-im-busy-jazz-9-release-date-1024x536.jpg';
import SNDR from '../ASSETS/images/AIR MAX SNDR.webp';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Sneakers() {
    return (
        <>
            <Head title="ucisee" />
            <Header />
            <main className="bg-white">
                <div className="relative mt-0 flex w-full cursor-pointer">
                    <Link href="sneakers" className="h-150 w-full">
                        <img src={saucony} alt="Pantalons Femme" className="h-150 w-full object-cover" />
                    </Link>
                    <p
                        className={`bg-opacity-50 absolute top-4 left-4 z-10 cursor-pointer px-2 py-1 text-[12px] font-medium tracking-wider text-white`}
                    >
                        <span>JAE TIPS x SAUCONY JAZZ 9 "I LOVE YOU BUT I'M BUSY"</span>
                    </p>
                    <p className="bg-opacity-50 absolute bottom-4 left-4 z-10 cursor-pointer px-2 py-1 text-left text-[12px] font-medium tracking-wider text-white">
                        Plongez dans notre univers dédié aux sneakers, où style et exclusivité se rencontrent. <br />
                        Que vous soyez à la recherche de la paire intemporelle qui a marqué des générations, comme l'emblématique Air Force 1,
                        <br /> ou que vous convoitiez la dernière collaboration en vogue qui fait vibrer la scène streetwear,
                        <br /> telle que la très attendue Saucony x Jae Tips, notre sélection saura combler toutes vos attentes.
                        <br /> Nous avons méticuleusement choisi chaque modèle pour vous offrir un assortiment riche et varié,
                        <br /> des classiques indémodables aux pièces les plus recherchées.
                    </p>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-0 gap-y-5 px-0">
                    <div className="col-span-2 row-span-2">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-start-3">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-cover" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-start-4">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-cover" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-start-3 row-start-2">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-cover" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-start-4 row-start-2">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-cover" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row py-5">
                    <Link href="sneakers" className="h-full w-full">
                        <img src={SNDR} alt="AIR MAX SNDR" className="h-full w-full object-cover" />
                        <div className="flex flex-row justify-between px-5">
                            <p className="text-[12px] text-[#3c55f7]">AIR MAX SNDR</p>
                            <p className="text-[12px] text-black">170€</p>
                        </div>
                    </Link>
                    <Link href="sneakers" className="h-full w-full">
                        <img src={SNDR} alt="AIR MAX SNDR" className="h-full w-full object-cover" />
                        <div className="flex flex-row justify-between px-5">
                            <p className="text-[12px] text-[#3c55f7]">AIR MAX SNDR</p>
                            <p className="text-[12px] text-black">170€</p>
                        </div>
                    </Link>
                    <Link href="sneakers" className="h-full w-full">
                        <img src={SNDR} alt="AIR MAX SNDR" className="h-full w-full object-cover" />
                        <div className="flex flex-row justify-between px-5">
                            <p className="text-[12px] text-[#3c55f7]">AIR MAX SNDR</p>
                            <p className="text-[12px] text-black">170€</p>
                        </div>
                    </Link>
                    <Link href="sneakers" className="h-full w-full">
                        <img src={SNDR} alt="AIR MAX SNDR" className="h-full w-full object-cover" />
                        <div className="flex flex-row justify-between px-5">
                            <p className="text-[12px] text-[#3c55f7]">AIR MAX SNDR</p>
                            <p className="text-[12px] text-black">170€</p>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <div>
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-start-1 row-start-2">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-start-2 row-start-2">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-2 col-start-3 row-span-2 row-start-1">
                        <Link href="sneakers" className="h-full w-full">
                            <img src={vomero} alt="JAE TIPS x SAUCONY JAZZ 9" className="h-full w-full object-fill" />
                            <div className="flex flex-row justify-between px-5">
                                <p className="text-[12px] text-[#3c55f7]">NIKE VOMERO 5</p>
                                <p className="text-[12px] text-black">170€</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center py-10">
                    <button className="rounded-none bg-black px-8 py-3 font-normal text-[12px] text-white transition-colors hover:bg-gray-800">
                        AFFICHER PLUS
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}
