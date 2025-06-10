import React, { useState } from 'react';
import acnejeanjacket from '../ASSETS/images/vesteenjeanoversizeacne.webp';
// Importez d'autres images si nécessaire pour la variété
import { Head, Link } from '@inertiajs/react';

// Le composant pour une carte d'article reste le même, c'est une bonne pratique.
const ArticleCard = ({ article }) => (
  <div className="outline-2 outline-transparent hover:outline-black outline-offset-[-2px] transition-all duration-0">
    <Link href={`/articles/${article.id}`} className="h-160 w-full flex flex-col">
      <img src={article.imageUrl} alt={article.name} className="w-full h-full object-cover" />
      <div className="flex flex-row justify-between px-3 pb-3 pt-2">
        <p className="text-[#3c55f7] text-[12px] font-normal">{article.name}</p>
        <p className="text-black text-[12px] font-normal">{article.price}€</p>
      </div>
    </Link>
  </div>
);

// Simulez une base de données complète avec beaucoup d'articles.
// Dans une vraie application, vous n'auriez que les 12 premiers, et demanderiez les 12 suivants à votre API.
const allArticles = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  name: `ARTICLE NUMÉRO ${index + 1}`,
  price: 100 + (index * 5), // Prix variable pour l'exemple
  imageUrl: acnejeanjacket,
}));

const ARTICLES_PER_PAGE = 12;

export default function GridExample() {
  // Initialisez l'état avec les 12 premiers articles
  const [displayedArticles, setDisplayedArticles] = useState(
    allArticles.slice(0, ARTICLES_PER_PAGE)
  );

  // Fonction pour charger les 12 articles suivants
  const loadMoreArticles = () => {
    const currentCount = displayedArticles.length;
    const nextArticles = allArticles.slice(
      currentCount,
      currentCount + ARTICLES_PER_PAGE
    );
    setDisplayedArticles(prevArticles => [...prevArticles, ...nextArticles]);
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-0 text-[12px] text-black">
        {/* On affiche uniquement les articles de notre état `displayedArticles` */}
        {displayedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="flex justify-center py-8">
        {/* Le bouton s'affiche seulement s'il reste des articles à charger */}
        {displayedArticles.length < allArticles.length && (
          <button
            onClick={loadMoreArticles}
            className="bg-black text-white px-6 py-3 text-[12px] font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            CHARGER PLUS 
          </button>
        )}
      </div>
    </div>
  );
}