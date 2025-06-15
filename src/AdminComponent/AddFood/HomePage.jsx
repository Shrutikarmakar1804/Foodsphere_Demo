
import DishCard from './DishCard';
import { demoDish } from './MockData';


const HomePage = () => {
  return (
    <div>
      <h2>Popular Dishes</h2>
      <div>
        {demoDish.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
