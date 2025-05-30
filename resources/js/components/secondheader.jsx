import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="bg-white text-blacksm relative">
        <ul className="flex w-full">
          {/* FEMME */}
          <li className="relative group px-4">
            <a href="article-display.html" className="block py-5 border-b-2 border-transparen text-black hover:border-gray-700 w-full text-[12px]">
              FEMME <i className="fa fa-angle-down"></i>
            </a>
            <div className="absolute left-0 top-full mt-1 w-screen bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="flex max-w-6xl mx-auto p-6">
                <div className="mr-8">
                  <h3 className="text-black mb-2 text-[12px]">VETEMENTS</h3>
                  <ul className="space-y-2 text-[12px]">
                    <li><a href="article-display.html" className="text-black">Afficher Tout</a></li>
                    <li><a href="article-display.html" className="text-black">Jeans</a></li>
                    <li><a href="article-display.html" className="text-black">Pantalons</a></li>
                    <li><a href="article-display.html" className="text-black">Shorts</a></li>
                    <li><a href="article-display.html" className="text-black">Tees</a></li>
                    <li><a href="article-display.html" className="text-black">Pulls / Sweats</a></li>
                    <li><a href="article-display.html" className="text-black">Manteaux / Vestes</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-black mb-2 text-[12px]">ACCESSOIRES</h3>
                  <ul className="space-y-2 text-[12px]">
                    <li><a href="article-display.html" className="text-black">Echarpes</a></li>
                    <li><a href="article-display.html" className="text-black">Ceintures</a></li>
                    <li><a href="article-display.html" className="text-black">Casquettes</a></li>
                    <li><a href="article-display.html" className="text-black">Underwear</a></li>
                    <li><a href="article-display.html" className="text-black">Contact Page No #5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* HOMMES */}
          <li className="relative group px-4">
            <a href="article-display.html" className="block py-5 border-b-2 border-transparent text-black hover:border-gray-700 w-full text-[12px]">
              HOMMES <i className="fa fa-angle-down"></i>
            </a>
            <div className="absolute left-0 top-full mt-1 w-screen bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="flex max-w-6xl mx-auto p-6">
                <div className="mr-8">
                  <h3 className="text-black mb-2 text-[12px]">VETEMENTS</h3>
                  <ul className="space-y-2 text-[12px]">
                    <li><a href="article-display.html" className="text-black">Afficher Tout</a></li>
                    <li><a href="article-display.html" className="text-black">Jeans</a></li>
                    <li><a href="article-display.html" className="text-black">Pantalons</a></li>
                    <li><a href="article-display.html" className="text-black">Shorts</a></li>
                    <li><a href="article-display.html" className="text-black">Tees</a></li>
                    <li><a href="article-display.html" className="text-black">Pulls / Sweats</a></li>
                    <li><a href="article-display.html" className="text-black">Manteaux / Vestes</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-black mb-2 text-[12px]">ACCESSOIRES</h3>
                  <ul className="space-y-2 text-[12px]">
                    <li><a href="article-display.html" className="text-black">Echarpes</a></li>
                    <li><a href="article-display.html" className="text-black">Ceintures</a></li>
                    <li><a href="article-display.html" className="text-black">Casquettes</a></li>
                    <li><a href="article-display.html" className="text-black">Underwear</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* MARQUES */}
          <li className="relative group px-4">
            <a href="article-display.html" className="block py-5 border-b-2 border-transparent text-black hover:border-gray-700 w-full text-[12px]">
              MARQUES <i className="fa fa-angle-down"></i>
            </a>
            <div className="absolute left-0 top-full mt-1 w-screen bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto p-6">
                <ul className="space-y-2 text-[12px]">
                  <li><a href="article-display.html" className="text-black">Acne Studios</a></li>
                  <li><a href="article-display.html" className="text-black">Adidas</a></li>
                  <li><a href="article-display.html" className="text-black">Aimé Leon Dore</a></li>
                  <li><a href="article-display.html" className="text-black">AMI Paris</a></li>
                  <li><a href="article-display.html" className="text-black">Asics</a></li>
                  <li><a href="article-display.html" className="text-black">Autry</a></li>
                  <li><a href="article-display.html" className="text-black">Bape</a></li>
                </ul>
                <ul className="space-y-2 text-[12px]">
                  <li><a href="article-display.html" className="text-black">Billionaire Boys Club</a></li>
                  <li><a href="article-display.html" className="text-black">C.P. Company</a></li>
                  <li><a href="article-display.html" className="text-black">Gallery Dept.</a></li>
                  <li><a href="article-display.html" className="text-black">Golden Goose</a></li>
                  <li><a href="article-display.html" className="text-black">Jordan</a></li>
                  <li><a href="article-display.html" className="text-black">Kid Super</a></li>
                  <li><a href="article-display.html" className="text-black">New Balance</a></li>
                </ul>
                <ul className="space-y-2 text-[12px]">
                  <li><a href="article-display.html" className="text-black">Nike</a></li>
                  <li><a href="article-display.html" className="text-black">Oakley</a></li>
                  <li><a href="article-display.html" className="text-black">Ralph Lauren</a></li>
                  <li><a href="article-display.html" className="text-black">Rhude</a></li>
                  <li><a href="article-display.html" className="text-black">Salomon</a></li>
                  <li><a href="article-display.html" className="text-black">Sandro</a></li>
                  <li><a href="article-display.html" className="text-black">Saucony</a></li>
                </ul>
                <ul className="space-y-2 text-[12px]">
                  <li><a href="article-display.html" className="text-black">Stone Islands</a></li>
                  <li><a href="article-display.html" className="text-black">Supreme</a></li>
                  <li><a href="article-display.html" className="text-black">The North Face</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;