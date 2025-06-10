import React from 'react';

export default function Footer() { // Ou renommez-le Breadcrumb ou ProductBreadcrumb
  return (
    <nav className="justify-between px-4 py-3 text-black sm:flex sm:px-5 bg-gray-50 " aria-label="Breadcrumb">
      <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
        <li>
          <div className="flex items-center">
            {/* Changé font-medium à font-normal */}
            <a href="#" className="ms-1 text-[12px] font-normal text-black hover:text-[#a0a0a0] md:ms-2">Vêtements</a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            {/* Changé font-medium à font-normal */}
            <a href="#" className="ms-1 text-[12px] font-normal text-black hover:text-[#a0a0a0] md:ms-2">T-shirts</a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            {/* Changé font-medium à font-normal */}
            <a href="#" className="ms-1 text-[12px] font-normal text-black hover:text-[#a0a0a0] md:ms-2">ID of Article</a>
          </div>
        </li>
      </ol>
    </nav>
  );
}