import React from 'react';
import "./Home.css";
import RestaurantCard from '../Restaurant/RestaurantCard';
import MultiItemCarousel from './MultiItemCarousel';
import Footer from '../Footer';
import TopDishes from '../TopDishes';

// Demo restaurant data
const demoRestaurants = [
  {
    id: 1,
    name: "The Grill House",
    description: "Juicy grilled meals with spices",
    images: ["https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    open: true,
    address: { city: "delhi" }
  },
  {
    id: 2,
    name: "Biryani Kingdom",
    description: "Authentic Hyderabadi biryani",
    images: ["https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    open: true,
    address: { city: "hyderabad" }
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Pure veg meals and snacks",
    images: ["https://images.pexels.com/photos/23286188/pexels-photo-23286188/free-photo-of-popular-indian-and-pakistani-snack-chicken-and-beef-samosa-desi-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    open: false,
    address: { city: "mumbai" }
  },
  {
    id: "4",
    name: "Spice Route",
    description: "Explore the flavors of India",
    city: "mumbai",
    open: true,
    categories: ["Starters", "Main Course", "Desserts"],
    images: [
      "https://images.pexels.com/photos/32449863/pexels-photo-32449863/free-photo-of-delicious-brazilian-chicken-parmigiana-with-chips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/32500429/pexels-photo-32500429/free-photo-of-variety-of-appetizers-on-a-table-for-party.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   ]
  },
  {
    id: "5",
    name: "Sweet Tooth",
    description: "Desserts and sweets from around the world",
    city: "chennai",
    open: true,
    categories: ["Desserts", "Drinks"],
    images: [
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "6",
    name: "Pasta Paradise",
    description: "Italian pasta dishes with a twist",
    city: "pune",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://images.pexels.com/photos/31064159/pexels-photo-31064159/free-photo-of-delicious-chicken-pasta-with-fresh-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/16988260/pexels-photo-16988260/free-photo-of-pasta-made-from-semolina-and-shaped-in-the-form-of-slender-tubes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "7",
    name: "Sushi Station",
    description: "Fresh sushi and Japanese cuisine",
    city: "jaipur",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://images.pexels.com/photos/32482535/pexels-photo-32482535/free-photo-of-fresh-salmon-nigiri-sushi-on-bamboo-mat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "8",
    name: "Tandoori Treats",
    description: "Authentic tandoori dishes and more",
    city: "kolkata",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://images.pexels.com/photos/17050759/pexels-photo-17050759/free-photo-of-curry-meat-based-dishes-served-on-white-plates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "9",
    name: "Healthy Haven",
    description: "Wholesome meals for a healthy lifestyle",
    city: "gurgaon",
    open: true,
    categories: ["Salads", "Smoothies", "Bowls"],
    images: [
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "10",
    name: "Café Corner",
    description: "Cozy café with coffee and snacks",
    city: "noida",
    open: true,
    categories: ["Coffee", "Snacks", "Desserts"],
    images: [
      "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "11",
    name: "Barbecue Bliss",
    description: "Smoky barbecue dishes and sides",
    city: "chandigarh",
    open: false,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "12",
    name: "Fusion Flavors",
    description: "Innovative dishes with global influences",
    city: "ahmedabad",
    open: true,
    categories: ["Starters", "Main Course", "Desserts"],
    images: [
      "https://images.pexels.com/photos/8951556/pexels-photo-8951556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "13",
    name: "Curry House",
    description: "Rich and flavorful curries from India",
    city: "surat",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "14",
    name: "Pizza Palace",
    description: "Delicious pizzas with fresh toppings",
    city: "coimbatore",
    open: true,
    categories: ["Pizzas", "Pastas", "Drinks"],
    images: [
      "https://images.pexels.com/photos/32524109/pexels-photo-32524109/free-photo-of-delicious-assortment-of-fast-food-dishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "15",
    name: "Burger Barn",
    description: "Juicy burgers and crispy fries",
    city: "indore",
    open: false,
    categories: ["Burgers", "Sides", "Drinks"],
    images: [
      "https://images.pexels.com/photos/17369176/pexels-photo-17369176/free-photo-of-tasty-burger-on-black-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "16",
    name: "Noodle Nook",
    description: "Asian noodles and stir-fry dishes",
    city: "lucknow",
    open: true,
    categories: ["Noodles", "Stir-Fry", "Drinks"],
    images: [
      "https://images.pexels.com/photos/8588501/pexels-photo-8588501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "17",
    name: "Taco Town",
    description: "Spicy tacos and Mexican delights",
    city: "jaipur",
    open: true,
    categories: ["Tacos", "Burritos", "Drinks"],
    images: [
      "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "18",
    name: "Samosa Station",
    description: "Crispy samosas and Indian snacks",
    city: "pune",
    open: false,
    categories: ["Snacks", "Chaat", "Drinks"],
    images: [
      "https://images.pexels.com/photos/9027521/pexels-photo-9027521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "19",
    name: "Pancake Paradise",
    description: "Fluffy pancakes and breakfast delights",
    city: "mumbai",
    open: true,
    categories: ["Breakfast", "Pancakes", "Drinks"],
    images: [
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   
     ]
  },
  {
    id: "20",
    name: "Ice Cream Island",
    description: "Cool down with our ice creams and sundaes",
    city: "chennai",
    open: false,
    categories: ["Ice Cream", "Sundaes", "Drinks"],
    images: [
      "https://images.pexels.com/photos/32518693/pexels-photo-32518693/free-photo-of-gourmet-ice-cream-bar-on-elegant-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
];

const explorerestaurants=[
  {
    id: "21",
    name: "Sushi Spot",
    description: "Fresh sushi and sashimi",
    city: "delhi",
    open: true,
    categories: ["Sushi", "Sashimi", "Drinks"],
    images: [
      "https://images.pexels.com/photos/32500429/pexels-photo-32500429/free-photo-of-variety-of-appetizers-on-a-table-for-party.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "22",
    name: "Vegan Vibes",
    description: "Plant-based meals and smoothies",
    city: "bangalore",
    open: true,
    categories: ["Salads", "Smoothies", "Bowls"],
    images: [
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
]

const Home = () => {
  return (
    <div className=''>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[80vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>FoodSphere</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>The Ultimate Comfortable Tasty Foods for Every Mood</p>
        </div>
        <div className='cover absolute top-0 left-0 right-0'></div>
        <div className='fadout'></div>
      </section>

      <section className='p-10 lg:py-10 lg:px-20'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>What's on your mind?</p>
        <MultiItemCarousel />
      </section>

      <TopDishes />

      <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favourites</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {demoRestaurants.map((item) => (
            <RestaurantCard item={item} key={item.id} />
          ))}
        </div>
      </section>
     
      <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Explore More Restaurants</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {explorerestaurants.map((item) => (
            <RestaurantCard item={item} key={item.id} />
          ))}
        </div>
      </section>
      <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Discover New Flavours</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {demoRestaurants.map((item) => (
            <RestaurantCard item={item} key={item.id} />
          ))}
        </div>
      </section>
          <Footer/>
    </div>
  );
};

export default Home;