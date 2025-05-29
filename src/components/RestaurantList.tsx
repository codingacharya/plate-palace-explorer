
import { useState, useMemo } from 'react';
import RestaurantCard from './RestaurantCard';

interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  tags: string[];
  category: string;
}

interface RestaurantListProps {
  searchQuery: string;
  selectedCategory: string;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tony's Italian Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    tags: ["Pizza", "Pasta", "Vegetarian"],
    category: "pizza"
  },
  {
    id: 2,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    tags: ["Burgers", "Fries", "Shakes"],
    category: "burger"
  },
  {
    id: 3,
    name: "Sakura Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "30-45 min",
    deliveryFee: "$3.99",
    tags: ["Sushi", "Ramen", "Fresh Fish"],
    category: "sushi"
  },
  {
    id: 4,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    cuisine: "Indian",
    rating: 4.4,
    deliveryTime: "35-45 min",
    deliveryFee: "$2.49",
    tags: ["Curry", "Biryani", "Vegetarian"],
    category: "indian"
  },
  {
    id: 5,
    name: "Dragon Express",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
    cuisine: "Chinese",
    rating: 4.2,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    tags: ["Noodles", "Dumplings", "Stir Fry"],
    category: "chinese"
  },
  {
    id: 6,
    name: "Casa Mexico",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    tags: ["Tacos", "Burritos", "Guacamole"],
    category: "mexican"
  },
  {
    id: 7,
    name: "Sweet Dreams Bakery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    cuisine: "Desserts",
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.49",
    tags: ["Cakes", "Pastries", "Ice Cream"],
    category: "dessert"
  },
  {
    id: 8,
    name: "Mediterranean Delight",
    image: "https://images.unsplash.com/photo-1544467831-a84fb9c8b7ee?w=400&h=300&fit=crop",
    cuisine: "Mediterranean",
    rating: 4.5,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    tags: ["Hummus", "Falafel", "Healthy"],
    category: "all"
  }
];

const RestaurantList = ({ searchQuery, selectedCategory, favorites, toggleFavorite }: RestaurantListProps) => {
  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(restaurant => restaurant.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {filteredRestaurants.length} restaurants found
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            isFavorite={favorites.includes(restaurant.id)}
            toggleFavorite={() => toggleFavorite(restaurant.id)}
          />
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No restaurants found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </section>
  );
};

export default RestaurantList;
