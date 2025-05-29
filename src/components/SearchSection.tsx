
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchSection = ({ searchQuery, setSearchQuery }: SearchSectionProps) => {
  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Discover great food & restaurants
        </h2>
        <p className="text-gray-600">
          Find the best restaurants, cafes and bars near you
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for restaurants, cuisine, or dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-red-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default SearchSection;
