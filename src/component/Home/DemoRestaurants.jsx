const demoRestaurants = [
  {
    id: 1,
    name: "Spicy Palace",
    description: "Authentic Indian Cuisine with rich flavors",
    rating: 4.5,
    location: "Kolkata",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Biryani House",
    description: "Best Dum Biryani in town",
    rating: 4.7,
    location: "Hyderabad",
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Tandoori Flames",
    description: "Hot and spicy North Indian dishes",
    rating: 4.3,
    location: "Delhi",
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
    {
        id: 4,
        name: "Curry Corner",
        description: "Delicious curries and breads",
        rating: 4.6,
        location: "Mumbai",
        image:
        "https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 5,
        name: "Masala Magic",
        description: "A blend of spices and tradition",
        rating: 4.4,
        location: "Chennai",
        image:
        "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 6,
        name: "Veggie Delight",
        description: "Pure vegetarian Indian dishes",
        rating: 4.2,
        location: "Bangalore",
        image:
        "https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 7,
        name: "Seafood Haven",
        description: "Fresh seafood with Indian spices",
        rating: 4.8,
        location: "Kochi",
        image:
        "https://images.pexels.com/photos/1640781/pexels-photo-1640781.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 8,
        name: "Sweet Treats",
        description: "Indian sweets and desserts",
        rating: 4.9,
        location: "Ahmedabad",
        image:
        "https://images.pexels.com/photos/1640782/pexels-photo-1640782.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 9,
        name: "Spice Route",
        description: "Exploring the spices of India",
        rating: 4.5,
        location: "Pune",
        image:
        "https://images.pexels.com/photos/1640783/pexels-photo-1640783.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 10,
        name: "Heritage Kitchen",
        description: "Traditional Indian recipes with a twist",
        rating: 4.6,
        location: "Jaipur",
        image:
        "https://images.pexels.com/photos/1640784/pexels-photo-1640784.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 11,
        name: "Royal Feast",
        description: "A royal dining experience with Indian flavors",
        rating: 4.7,
        location: "Lucknow",
        image:
        "https://images.pexels.com/photos/1640785/pexels-photo-1640785.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 12,
        name: "Fusion Flavors",
        description: "Modern Indian cuisine with global influences",
        rating: 4.8,
        location: "Goa",
        image:
        "https://images.pexels.com/photos/1640786/pexels-photo-1640786.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 13,
        name: "Street Spice",
        description: "Street food with a gourmet touch",
        rating: 4.4,
        location: "Varanasi",
        image:
        "https://images.pexels.com/photos/1640787/pexels-photo-1640787.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 14,
        name: "Herbal Kitchen",
        description: "Healthy Indian dishes with herbs and spices",
        rating: 4.3,
        location: "Dehradun",
        image:
        "https://images.pexels.com/photos/1640788/pexels-photo-1640788.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 15,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.5,
        location: "Chandigarh",
        image:
        "https://images.pexels.com/photos/1640789/pexels-photo-1640789.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 16,
        name: "Taste of India",
        description: "A journey through India's culinary heritage",
        rating: 4.6,
        location: "Mysore",
        image:
        "https://images.pexels.com/photos/1640790/pexels-photo-1640790.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 17,
        name: "Curry Culture",
        description: "Exploring the diverse curry culture of India",
        rating: 4.7,
        location: "Indore",
        image:
        "https://images.pexels.com/photos/1640791/pexels-photo-1640791.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 18,
        name: "Spice Bazaar",
        description: "A marketplace of spices and flavors",
        rating: 4.8,
        location: "Surat",
        image:
        "https://images.pexels.com/photos/1640792/pexels-photo-1640792.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 19,
        name: "Heritage Spice",
        description: "Heritage recipes with a modern twist",
        rating: 4.5,
        location: "Agra",
        image:
        "https://images.pexels.com/photos/1640793/pexels-photo-1640793.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 20,
        name: "Spice Junction",
        description: "Where spices meet tradition",
        rating: 4.6,
        location: "Vadodara",
        image:
        "https://images.pexels.com/photos/1640794/pexels-photo-1640794.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 21,
        name: "Spice Route",
        description: "A culinary journey through India's spice route",
        rating: 4.7,
        location: "Ranchi",
        image:
        "https://images.pexels.com/photos/1640795/pexels-photo-1640795.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 22,
        name: "Spice Haven",
        description: "A haven for spice lovers",
        rating: 4.8,
        location: "Bhubaneswar",
        image:
        "https://images.pexels.com/photos/1640796/pexels-photo-1640796.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 23,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.4,
        location: "Patna",
        image:
        "https://images.pexels.com/photos/1640797/pexels-photo-1640797.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 24,
        name: "Spice Symphony",
        description: "A symphony of spices in every bite",
        rating: 4.5,
        location: "Guwahati",
        image:
        "https://images.pexels.com/photos/1640798/pexels-photo-1640798.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 25,
        name: "Spice Affair",
        description: "An affair with spices and flavors",
        rating: 4.6,
        location: "Shillong",
        image:
        "https://images.pexels.com/photos/1640799/pexels-photo-1640799.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 26,
        name: "Spice Odyssey",
        description: "An odyssey through the world of spices",
        rating: 4.7,
        location: "Imphal",
        image:
        "https://images.pexels.com/photos/1640800/pexels-photo-1640800.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 27,
        name: "Spice Haven",
        description: "A haven for spice enthusiasts",
        rating: 4.8,
        location: "Aizawl",
        image:
        "https://images.pexels.com/photos/1640801/pexels-photo-1640801.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 28,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.5,
        location: "Gangtok",
        image:
        "https://images.pexels.com/photos/1640802/pexels-photo-1640802.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 29,
        name: "Spice Haven",
        description: "A haven for spice lovers",
        rating: 4.6,
        location: "Kohima",
        image:
        "https://images.pexels.com/photos/1640803/pexels-photo-1640803.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 30,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.7,
        location: "Itanagar",
        image:
        "https://images.pexels.com/photos/1640804/pexels-photo-1640804.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 31,
        name: "Spice Affair",
        description: "An affair with spices and flavors",
        rating: 4.8,
        location: "Agartala",
        image:
        "https://images.pexels.com/photos/1640805/pexels-photo-1640805.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 32,
        name: "Spice Odyssey",
        description: "An odyssey through the world of spices",
        rating: 4.9,
        location: "Dimapur",
        image:
        "https://images.pexels.com/photos/1640806/pexels-photo-1640806.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 33,
        name: "Spice Haven",
        description: "A haven for spice enthusiasts",
        rating: 4.5,
        location: "Kohima",
        image:
        "https://images.pexels.com/photos/1640807/pexels-photo-1640807.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 34,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.6,
        location: "Gangtok",
        image:
        "https://images.pexels.com/photos/1640808/pexels-photo-1640808.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 35,
        name: "Spice Haven",
        description: "A haven for spice lovers",
        rating: 4.7,
        location: "Aizawl",
        image:
        "https://images.pexels.com/photos/1640809/pexels-photo-1640809.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 36,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.8,
        location: "Imphal",
        image:
        "https://images.pexels.com/photos/1640810/pexels-photo-1640810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

export default demoRestaurants