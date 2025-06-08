import React, { useEffect } from 'react';
import "./Home.css";
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantAction } from '../State/Restaurant/Action';
import { useNavigate } from 'react-router-dom';
import MultiItemCarousel from './MultiItemCarousel';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
 const restaurants = useSelector((state) => state.user); 

  useEffect(() => {
    if (!jwt) {
      navigate("/"); // 🔐 if no JWT, send to login
    } else {
      dispatch(getAllRestaurantAction(jwt));
    }
  }, [jwt]);

  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>FoodSphere</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>The Ultimate Comfortable Tasty Foods for Every moods</p>
        </div>
        <div className='cover absolute top-0 left-0 right-0'></div>
        <div className='fadout'></div>
      </section>

      <section className='p-10 lg:py-10 lg:px-20'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>What's on your mind?</p>
        <MultiItemCarousel />
      </section>

      <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favourites</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {restaurants?.map((item) => <RestaurantCard item={item} key={item.id} />)}
        </div>
      </section>
    </div>
  );
};

export default Home;
