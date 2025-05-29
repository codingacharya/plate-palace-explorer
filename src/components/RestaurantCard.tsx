
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  tags: string[];
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const RestaurantCard = ({ restaurant, isFavorite, toggleFavorite }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite 
              ? 'bg-red-600 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
          {restaurant.deliveryTime}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800 leading-tight">
            {restaurant.name}
          </h3>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded-full ml-2">
            <Star className="h-3 w-3 text-green-600 fill-current mr-1" />
            <span className="text-sm font-medium text-green-700">
              {restaurant.rating}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {restaurant.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Delivery: <span className="font-medium">{restaurant.deliveryFee}</span>
          </span>
          <Button 
            size="sm" 
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4"
          >
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
