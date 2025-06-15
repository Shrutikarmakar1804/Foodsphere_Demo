import React from 'react';

const CarouselItem = ({ image, title, onClick }) => {
  return (
    <div
      className='flex flex-col justify-center items-center'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        className='w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center transition-transform duration-300 hover:scale-105'
        src={image}
        alt={title}
      />
      <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
    </div>
  );
};

export default CarouselItem;
