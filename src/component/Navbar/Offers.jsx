// Offers.js
import React from 'react';
import EventCard from '../Profile/EventCard';


const offerList = [
  {
    title: "Domino's Pizza",
    description: "Get 20% off on all medium pizzas. Valid till weekend!",
    discount: "20% OFF",
    imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/restaurant/dominos"
  },
  {
    title: "Starbucks",
    description: "Buy 1 Get 1 Free on all Frappuccinos every Friday!",
    discount: "BOGO Offer",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    link: "/restaurant/starbucks"
  },
  {
    title: "McDonald's",
    description: "Flat ₹100 OFF on orders above ₹499.",
    discount: "₹100 OFF",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    link: "/restaurant/mcdonalds"
  },
  {
    title: "Subway",
    description: "Free Cookie with every 12-inch Sub purchase!",
    discount: "Free Cookie 🍪",
    imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/230630103357-subway-beast-sandwich.jpg?c=original",
    link: "/restaurant/subway"
  },
  {
    title: "KFC",
    description: "Zinger Burgers at just ₹99. Limited Period Offer!",
    discount: "₹99 Only",
    imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    link: "/restaurant/kfc"
  },
  {
    title: "Baskin Robbins",
    description: "Enjoy 30% OFF on Family Packs this weekend.",
    discount: "30% OFF",
    imageUrl: "https://baskinrobbinsindia.com/cdn/shop/articles/mount-everst-sundae-cropped-1653647615_04bae524-fa77-495a-bb54-8a65aa3b0ed1_x260_crop_center@2x.jpg?v=1659946040",
    link: "/restaurant/baskinrobbins"
  }
];



const Offers = () => {
  return (
    <div className="p-8 bg-black-50 min-h-screen">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">Current Offers 🎉</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerList.map((offer, index) => (
          <EventCard
            key={index}
            title={offer.title}
            description={offer.description}
            discount={offer.discount}
            imageUrl={offer.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
