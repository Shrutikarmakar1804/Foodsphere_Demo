// EventCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, description, discount, imageUrl, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <img src={imageUrl} alt="Offer" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-pink-600 font-semibold text-lg">{discount}</div>
      </div>
    </div>
  );
};

export default EventCard;
