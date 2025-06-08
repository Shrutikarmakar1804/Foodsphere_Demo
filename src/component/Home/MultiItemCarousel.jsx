import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { topMeals } from './topMeals';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/restaurants/${item.city}/${item.id}/${item.name}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 20000,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {topMeals.map((item) => (
        <CarouselItem
          key={item.id}
          image={item.image}
          title={item.title}
          onClick={() => handleClick(item)}
        />
      ))}
    </Slider>
  );
};

export default MultiItemCarousel;
