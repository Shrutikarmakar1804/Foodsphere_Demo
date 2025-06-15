import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import CarouselItem from './CarouselItem';
import topMeals from './Data/topMeals';


const MultiItemCarousel = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/food/${item.id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Faster transition speed (in ms)
    slidesToShow: 5,
    slidesToScroll: 1, // Scroll one at a time for smoother effect
    autoplay: true,
    autoplaySpeed: 0, // No delay between slides
    cssEase: "linear", // Smooth continuous scroll
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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
