
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', emoji: '🍽️' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'burger', name: 'Burgers', emoji: '🍔' },
  { id: 'sushi', name: 'Sushi', emoji: '🍣' },
  { id: 'indian', name: 'Indian', emoji: '🍛' },
  { id: 'chinese', name: 'Chinese', emoji: '🥢' },
  { id: 'mexican', name: 'Mexican', emoji: '🌮' },
  { id: 'dessert', name: 'Desserts', emoji: '🍰' },
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Browse by cuisine</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.id)}
            className={`rounded-full px-6 py-3 transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'hover:bg-red-50 hover:border-red-300'
            }`}
          >
            <span className="mr-2">{category.emoji}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
