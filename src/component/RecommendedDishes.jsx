// src/components/RecommendedDishes.jsx
import DishCard from './DishCard';

const RecommendedDishes = ({ dishes }) => (
  <div>
    <h3>Recommended for you</h3>
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  </div>
);

export default RecommendedDishes;
