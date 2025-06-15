import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/restaurant/${item.id}`)}
      className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm text-gray-500">
          ⭐ {item.rating} • 📍 {item.location}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;