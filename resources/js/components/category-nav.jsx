import React from 'react';

export default function CategoryNav() {
  const categories = [
    { name: 'Tout', current: true },
    { name: 'Jeans', current: false },
    { name: 'Manteaux et vestes', current: false },
    { name: 'Sweatshirts', current: false },
    { name: 'Pantalon', current: false },
    { name: 'Maille', current: false },
    { name: 'T-shirts', current: false },
    { name: 'Chemises', current: false },
    { name: 'Vestes de costume', current: false },
    { name: 'Shorts', current: false },
  ];

  return (
    <nav className="bg-white shadow-sm">
      {/* Removed max-w-full and mx-auto from here to allow left alignment */}
      <div className="px-4 sm:px-6 lg:px-8"> 
        {/* Changed justify-between to justify-start */}
        <div className="flex justify-start h-12"> 
          <div className="flex">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#" // Replace with actual category links
                className={`
                  ${category.current
                    ? 'border-black text-black'
                    : 'text-gray-700 hover:text-gray-900 hover:border-gray-300'}
                  inline-flex items-center px-4 pt-1 text-[12px] font-medium
                `}
                aria-current={category.current ? 'page' : undefined}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}