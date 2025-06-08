// Same imports
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const MOCK_FOOD_DATA = [
  {
    name: "Pizza",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Pizza Palace"
  },
  {
    name: "Cheeseburger",
    image: "https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Burger Joint"
  },
  {
    name: "Spaghetti Pasta",
    image:"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    restaurant: "Pasta Point"
  },
  {
    name: "Green Salad",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Healthy Bites"
  },
  {
    name: "Sushi Platter",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Tokyo Dine"
  },
  {
    name: "Vanilla Ice Cream",
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Frosty Treats"
  },
  {
    name: "Chocolate Cake",
    image: "https://images.pexels.com/photos/2067436/pexels-photo-2067436.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Sweet Tooth"
  },
  {
    name: "Tacos",
    image: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Taco Bell"
  },
  {
    name: "Grilled Chicken",
    image: "https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Grill House"
  },
  {
    name: "Fish and Chips",
    image: "https://images.pexels.com/photos/2034899/pexels-photo-2034899.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Seafood Shack"  
  },
  {
    name: "Caesar Salad",
    image: "https://images.pexels.com/photos/12557595/pexels-photo-12557595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",  
    restaurant: "Salad Bar"
  },
  {
    name: "Pancakes",
    image: "https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Breakfast Club" 
  },
  {
    name: "BBQ Ribs",
    image: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "BBQ Haven"
  },
  {
    name: "Falafel Wrap",
    image: "https://images.pexels.com/photos/29850814/pexels-photo-29850814/free-photo-of-falafel-shawarma-wrap-with-fries-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",  
    restaurant: "Middle Eastern Delights"
  },
  {
    name: "Fruit Smoothie",  
    image: "https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Smoothie Bar"
  },
  {
    name: "Stuffed Peppers",
    image: "https://images.pexels.com/photos/5975429/pexels-photo-5975429.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Vegetarian Kitchen" 
  },
  {
    name: "Chocolate Chip Cookies",
    image: "https://images.pexels.com/photos/3186743/pexels-photo-3186743.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Cookie Corner"
  },
  {
    name: "Greek Yogurt Parfait",
    image: "https://images.pexels.com/photos/4006347/pexels-photo-4006347.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Healthy Delights"
  },
  {
    name: "Chicken Curry",
    image: "https://images.pexels.com/photos/6113813/pexels-photo-6113813.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Curry House"
  },
  {
    name: "Vegetable Stir Fry",
    image: "https://images.pexels.com/photos/27039845/pexels-photo-27039845/free-photo-of-traditional-stir-fry-dish-with-vegetables-and-meat.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Asian Fusion"
  },
  {
    name: "Biryani",
    image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Indian Spice Route"
  },
  {
    name: "Chicken Tikka Masala",
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Tandoori Nights"
  },
  {
    name: "Pav Bhaji",
    image: "https://images.pexels.com/photos/17433352/pexels-photo-17433352/free-photo-of-combination-plate-with-maharstrian-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Street Food Junction"
  },
  {
    name: "Paneer Butter Masala",
    image: "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Indian Spice Route"
  },
  {
    name: "Chocolate Mousse",
    image: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    restaurant: "Sweet Indulgence"
  },
  {
        name:"Pizza",
        image:"https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
       restaurant: "Pizza Palace"
    },
    {

      image:"https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Chicken",
      restaurant: "Burger Joint"
    },
    {
        image:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Pasta",
        restaurant: "Pasta Point"
    },
    {
        image:"https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Italian",
        restaurant: "Healthy Bites"
    },
    {
        image:"https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Dessert",
        restaurant: "Tokyo Dine"

    },
    {
        image:"https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg",
        name:"South Indian Dosa",
        restaurant: "Frosty Treats"
    },
    {
        image:"https://cdn.pixabay.com/photo/2017/09/09/12/09/india-2731817_1280.jpg",
        name:"Indian Food",
        restaurant: "Sweet Tooth"
    },
    {
        image:"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Coffee",
        restaurant: "Taco Bell"
    },
    {
        image:"https://images.pexels.com/photos/36756/food-pizza-roll-baked.jpg?auto=compress&cs=tinysrgb&w=600",
        name:"Snacks",
        restaurant: "Grill House"
    },
    {
        image:"https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"SandWiches",
        restaurant: "Seafood Shack"
    },
    {
        image:"https://images.pexels.com/photos/688802/pexels-photo-688802.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Soup",
        restaurant: "Salad Bar"
    },
    {
        image:"https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Biriyani",  
        restaurant: "Breakfast Club"
    },
    {
        image:"https://i0.wp.com/imgmedia.lbb.in/media/2021/06/60db4b6bc1d9472dfcc1c083_1624984427168.jpg?ssl=1",
        name:"Bengali-Food",
        restaurant: "BBQ Haven"
    },
    {
        image:"https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Burgers",
        restaurant: "Middle Eastern Delights"
    },
    {
        image:"https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Drinks",
        restaurant: "Smoothie Bar"
    },
];
 function Search() {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Pizza", "Burger", "Ice Cream"]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const result = MOCK_FOOD_DATA.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(result);
    };

    const timeout = setTimeout(() => {
      if (query.trim()) fetchData();
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleClearRecent = () => setRecentSearches([]);
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches.slice(0, 5)]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-2xl px-4 py-3 shadow-lg transition-all duration-300">
        <FaSearch className="text-gray-400 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Search for restaurant, item or more..."
          className="bg-transparent outline-none flex-1 text-lg placeholder-gray-500"
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Recent Searches</h2>
            <button onClick={handleClearRecent} className="text-green-400 hover:text-green-300 text-sm">Clear</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {recentSearches.map((item, index) => (
              <div key={index} className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {query && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-5">Search Results</h2>
          {filteredItems.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">From {item.restaurant}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-center mt-10">
              <p className="text-lg">No items matched your search. Try something else!</p>
            </div>
          )}
        </div>
      )}

      {/* Trending Section */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Trending in Your City</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {["Chicken", "Ice Cream", "Smoothie", "BBQ", "Chocolate Chip Cookies", "Salad", "Biryani", "Sushi", "Cake"].map((item, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(item)}
              className="bg-gray-700 hover:bg-green-500 hover:text-white transition-all p-3 rounded-xl text-center text-sm font-medium shadow-md"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Search;