import React from "react";
import { Card, CardContent, ratingClasses } from "@mui/material";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { motion } from "framer-motion";

// Local demo data
const demoFavorites = [
  {
    id: 1,
    name: "Cozy Corner Café",
    images: ["https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"],
    cuisine: "Cafe",
    rating: 4.2,
    address: "42 Peace Ave, Hilltown",
  },
  {
    id: 2,
    name: "Dragon Bowl",
    images: ["https://images.pexels.com/photos/858496/pexels-photo-858496.jpeg"],
    cuisine: "Asian Fusion",
    rating: 4.8,
    address: "88 Dragon Street, Chinatown",
  },
  {
    id: 3,
    name: "La Fiesta Mexicana",
    images: ["https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg"],
    cuisine: "Mexican",
    rating: 4.5,
    address: "15 Sunset Blvd, Southside",
  },
   {
    id: 4,
    name: "Pasta Perfection",
    images: ["https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Italian",
    rating: 4.7,
    address: "77 Pasta Lane, Downtown",
  },
  {
    id: 5,
    name: "Spice Symphony",
    images:["https://images.pexels.com/photos/13063314/pexels-photo-13063314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Indian",
    rating: 4.6,
    address: "23 Curry Road, Eastside",
  },
  {
    id: 6,
    name: "Burger Haven",
    images:["https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "American",
    rating: 4.3,
    address: "99 Burger Street, Westside",
  },
  {
    id: 7,
    name: "Sushi Sensation",
    images: ["https://images.pexels.com/photos/4828151/pexels-photo-4828151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Japanese",
    rating: 4.9,
    address: "30 Sushi Way, Uptown",
  },
  {
    id: 8,
    name: "Vegan Vibes",
    images:["https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Vegan",
    rating: 4.4,
    address: "60 Green Road, Eco City",
  },
  {
    id: 9,
    name: "Dessert Dreams",
    images: ["https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Desserts",
    rating: 4.1,
    address: "10 Sweet Street, Candyland",
  },
  {
    id: 10,
    name: "Grill Masters",
    images: ["https://images.pexels.com/photos/8250362/pexels-photo-8250362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Barbecue",
    rating: 4.0,
    address: "55 Grill Road, Smoky Town",
  },
  {
    id: 11,
    name: "Coffee Craze",
    images:["https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Cafe",
    rating: 4.3,
    address: "20 Coffee Lane, Brew City",
  },
  {
    id: 12,
    name: "Taco Fiesta",
    images:["https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=600"],
    cuisine: "Mexican",
    rating: 4.6,
    address: "45 Taco Street, Fiesta Town",
    status: "Open"
  },
  {
    id: 13,
    name: "Pizzeria Paradise",
    images: ["https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    cuisine: "Italian",
    rating: 4.8,
    address: "80 Pizza Avenue, Slice City",
  },
  {
    id: 14,
    name: "Curry Corner",
    images:["https://images.pexels.com/photos/28125427/pexels-photo-28125427/free-photo-of-naan-roti-tarkari-everest-tandoori-kitchen.jpeg?auto=compress&cs=tinysrgb&w=600"],
    cuisine: "Indian",
    rating: "4.5",
    address: "35 Curry Lane, Spice Town",
  },
  {
    id: 15,
    name: "Noodle Nirvana",
    images:["https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"],
    cuisine: "Asian Fusion",
    rating: 4.7,
    address: "90 Noodle Street, Wok City",
  }
  // ...add more items as needed
];

const Favourites = () => {
  return (
    <Card className="max-w-6xl mx-auto mt-12 px-6 py-10 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <CardContent>
        {/* Animated Gradient Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
        >
          Favourites
        </motion.h1>

        {demoFavorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {demoFavorites.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <RestaurantCard item={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400"
          >
            <img
              src="/images/empty.gif"
              alt="No favorites"
              className="w-40 mx-auto mb-4"
            />
            <p>No favorite restaurants added yet.</p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default Favourites;