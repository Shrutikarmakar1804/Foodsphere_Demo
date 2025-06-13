// utils/api.js
export const getRestaurantByOwner = async () => {
  const restaurant = localStorage.getItem('restaurant');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ restaurant: restaurant ? JSON.parse(restaurant) : null });
    }, 500);
  });
};
