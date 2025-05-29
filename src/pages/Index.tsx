
import { useState } from 'react';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';
import SearchSection from '../components/SearchSection';
import CategoryFilter from '../components/CategoryFilter';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (restaurantId: number) => {
    setFavorites(prev => 
      prev.includes(restaurantId) 
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <SearchSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RestaurantList 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
};

export default Index;
