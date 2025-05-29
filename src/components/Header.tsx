
import { MapPin, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-red-600">Foodio</h1>
            <div className="hidden md:flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">New York, NY</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
