const demoRestaurants = [
    {
        id: 1,
        name: "Salad Palace",
        description: "Authentic Indian Cuisine with rich flavors",
        rating: 4.5,
        location: "Kolkata",
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 2,
        name: "Biryani House",
        description: "Best Dum Biryani in town",
        rating: 4.7,
        location: "Hyderabad",
        image:
            "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 800
    },
    {
        id: 3,
        name: "Tandoori Flames",
        description: "Hot and spicy North Indian dishes",
        rating: 4.3,
        location: "Delhi",
        image:
            "https://images.pexels.com/photos/17050759/pexels-photo-17050759/free-photo-of-curry-meat-based-dishes-served-on-white-plates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 4,
        name: "Curry Corner",
        description: "Delicious curries and breads",
        rating: 4.6,
        location: "Mumbai",
        image:
            "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 5,
        name: "Masala Magic",
        description: "A blend of spices and tradition",
        rating: 4.4,
        location: "Chennai",
        image:
            "https://images.pexels.com/photos/30700761/pexels-photo-30700761/free-photo-of-delicious-japanese-curry-dish-with-rice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 6,
        name: "Veggie Delight",
        description: "Pure vegetarian Indian dishes",
        rating: 4.2,
        location: "Bangalore",
        image:
            "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 7,
        name: "Seafood Haven",
        description: "Fresh seafood with Indian spices",
        rating: 4.8,
        location: "Kochi",
        image:
            "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 800
    },
    {
        id: 8,
        name: "Sweet Treats",
        description: "Indian sweets and desserts",
        rating: 4.9,
        location: "Ahmedabad",
        image:
            "https://images.pexels.com/photos/32551700/pexels-photo-32551700/free-photo-of-chocolate-and-raspberry-dessert-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 9,
        name: "Spice Route",
        description: "Exploring the spices of India",
        rating: 4.5,
        location: "Pune",
        image:
            "https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 10,
        name: "Heritage Kitchen",
        description: "Traditional Indian recipes with a twist",
        rating: 4.6,
        location: "Jaipur",
        image:
            "https://images.pexels.com/photos/19834446/pexels-photo-19834446/free-photo-of-soup-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 11,
        name: "Royal Feast",
        description: "A royal dining experience with Indian flavors",
        rating: 4.7,
        location: "Lucknow",
        image:
            "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 800
    },
    {
        id: 12,
        name: "Fusion Flavors",
        description: "Modern Indian cuisine with global influences",
        rating: 4.8,
        location: "Goa",
        image:
            "https://images.pexels.com/photos/8818667/pexels-photo-8818667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 800
    },
    {
        id: 13,
        name: "Street Spice",
        description: "Street food with a gourmet touch",
        rating: 4.4,
        location: "Varanasi",
        image:
            "https://images.pexels.com/photos/13063307/pexels-photo-13063307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 14,
        name: "Herbal Kitchen",
        description: "Healthy Indian dishes with herbs and spices",
        rating: 4.3,
        location: "Dehradun",
        image:
            "https://images.pexels.com/photos/15082977/pexels-photo-15082977/free-photo-of-two-glasses-of-milk-with-cinnamon-and-nuts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 15,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.5,
        location: "Chandigarh",
        image:
            "https://images.pexels.com/photos/5695615/pexels-photo-5695615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 16,
        name: "Taste of India",
        description: "A journey through India's culinary heritage",
        rating: 4.6,
        location: "Mysore",
        image:
            "https://images.pexels.com/photos/9809033/pexels-photo-9809033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 17,
        name: "Curry Culture",
        description: "Exploring the diverse curry culture of India",
        rating: 4.7,
        location: "Indore",
        image:
            "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 18,
        name: "Spice Bazaar",
        description: "A marketplace of spices and flavors",
        rating: 4.8,
        location: "Surat",
        image:
            "https://images.pexels.com/photos/28125427/pexels-photo-28125427/free-photo-of-naan-roti-tarkari-everest-tandoori-kitchen.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 19,
        name: "Heritage Spice",
        description: "Heritage recipes with a modern twist",
        rating: 4.5,
        location: "Agra",
        image:
            "https://images.pexels.com/photos/9609843/pexels-photo-9609843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 20,
        name: "Spice Junction",
        description: "Where spices meet tradition",
        rating: 4.6,
        location: "Vadodara",
        image:
            "https://images.pexels.com/photos/27254878/pexels-photo-27254878/free-photo-of-vegan-curry-masala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 21,
        name: "Spice Route",
        description: "A culinary journey through India's spice route",
        rating: 4.7,
        location: "Ranchi",
        image:
            "https://images.pexels.com/photos/18510422/pexels-photo-18510422/free-photo-of-a-yellow-bowl-filled-with-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 22,
        name: "Spice Haven",
        description: "A haven for spice lovers",
        rating: 4.8,
        location: "Bhubaneswar",
        image:
            "https://images.pexels.com/photos/5827620/pexels-photo-5827620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 23,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.4,
        location: "Patna",
        image:
            "https://images.pexels.com/photos/28674705/pexels-photo-28674705/free-photo-of-indian-dal-and-rice-in-traditional-utensils.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 24,
        name: "Spice Symphony",
        description: "A symphony of spices in every bite",
        rating: 4.5,
        location: "Guwahati",
        image:
            "https://images.pexels.com/photos/20408465/pexels-photo-20408465/free-photo-of-bowl-of-food-and-spices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 25,
        name: "Spice Affair",
        description: "An affair with spices and flavors",
        rating: 4.6,
        location: "Shillong",
        image:
            "https://images.pexels.com/photos/31653131/pexels-photo-31653131/free-photo-of-delicious-japanese-curry-with-white-rice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 26,
        name: "Spice Odyssey",
        description: "An odyssey through the world of spices",
        rating: 4.7,
        location: "Imphal",
        image:
            "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 27,
        name: "Spice Haven",
        description: "A haven for spice enthusiasts",
        rating: 4.8,
        location: "Aizawl",
        image:
            "https://images.pexels.com/photos/5827620/pexels-photo-5827620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 28,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.5,
        location: "Gangtok",
        image:
            "https://images.pexels.com/photos/20408465/pexels-photo-20408465/free-photo-of-bowl-of-food-and-spices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 29,
        name: "Spicy Haven",
        description: "A haven for spice lovers",
        rating: 4.6,
        location: "Kohima",
        image:
            "https://images.pexels.com/photos/20408465/pexels-photo-20408465/free-photo-of-bowl-of-food-and-spices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: 30,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.7,
        location: "Itanagar",
        image:
            "https://images.pexels.com/photos/28674705/pexels-photo-28674705/free-photo-of-indian-dal-and-rice-in-traditional-utensils.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 200
    },
    {
        id: 31,
        name: "Spice Affair",
        description: "An affair with spices and flavors",
        rating: 4.8,
        location: "Agartala",
        image:
            "https://images.pexels.com/photos/1640805/pexels-photo-1640805.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 32,
        name: "Spice Odyssey",
        description: "An odyssey through the world of spices",
        rating: 4.9,
        location: "Dimapur",
        image:
            "https://images.pexels.com/photos/1640806/pexels-photo-1640806.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 33,
        name: "Spice Haven",
        description: "A haven for spice enthusiasts",
        rating: 4.5,
        location: "Kohima",
        image:
            "https://images.pexels.com/photos/1640807/pexels-photo-1640807.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 34,
        name: "Spice Symphony",
        description: "A symphony of spices in every dish",
        rating: 4.6,
        location: "Gangtok",
        image:
            "https://images.pexels.com/photos/1640808/pexels-photo-1640808.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 35,
        name: "Spice Haven",
        description: "A haven for spice lovers",
        rating: 4.7,
        location: "Aizawl",
        image:
            "https://images.pexels.com/photos/1640809/pexels-photo-1640809.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400
    },
    {
        id: 36,
        name: "Spice Delight",
        description: "Delightful dishes with a spicy twist",
        rating: 4.8,
        location: "Imphal",
        image:
            "https://images.pexels.com/photos/1640810/pexels-photo-1640810.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 200
    },
];

export default demoRestaurants