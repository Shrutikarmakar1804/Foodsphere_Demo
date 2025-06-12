import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const RestaurantDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filteredTrending, setFilteredTrending] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);

  const stats = [
    { label: "Total Orders", value: "1,245" },
    { label: "Active Menu Items", value: "32" },
    { label: "Today's Revenue", value: "₹18,430" },
    { label: "Pending Deliveries", value: "6" },
  ];

  const recentOrders = [
    { id: "#ORD1021", customer: "Ankit Sharma", total: "₹450", status: "Preparing" },
    { id: "#ORD1022", customer: "Sneha Roy", total: "₹980", status: "Delivered" },
    { id: "#ORD1023", customer: "Rahul Verma", total: "₹320", status: "Cancelled" },
    { id: "#ORD1024", customer: "Priya Singh", total: "₹600", status: "Preparing" },
    { id: "#ORD1025", customer: "Vikas Gupta", total: "₹750", status: "Delivered" },
    { id: "#ORD1026", customer: "Neha Patel", total: "₹400", status: "Preparing" },
    { id: "#ORD1027", customer: "Rohit Mehta", total: "₹520", status: "Delivered" },
    { id: "#ORD1028", customer: "Aisha Khan", total: "₹360", status: "Cancelled" },
    { id: "#ORD1029", customer: "Suresh Yadav", total: "₹480", status: "Preparing" },
    { id: "#ORD1030", customer: "Meera Joshi", total: "₹540", status: "Delivered" },
    { id: "#ORD1031", customer: "Karan Desai", total: "₹620", status: "Preparing" },
    { id: "#ORD1032", customer: "Riya Kapoor", total: "₹700", status: "Delivered" },
    { id: "#ORD1033", customer: "Amit Singh", total: "₹550", status: "Cancelled" },
    { id: "#ORD1034", customer: "Tina Sharma", total: "₹430", status: "Preparing" },
    { id: "#ORD1035", customer: "Rajesh Kumar", total: "₹490", status: "Delivered" },
    { id: "#ORD1036", customer: "Sonia Gupta", total: "₹370", status: "Preparing" },
    { id: "#ORD1037", customer: "Vikram Reddy", total: "₹610", status: "Delivered" }
  ];

  const trendingItems = [
    { name: "Paneer Tikka", orders: 524 },
    { name: "Butter Chicken", orders: 316 },
    { name: "Chicken Biryani", orders: 210 },
  ];

  const foodItems = [
    { name: "Orange Mojito", price: "₹120", img: "https://images.pexels.com/photos/2767875/pexels-photo-2767875.jpeg" },
    { name: "Chicken Biryani", price: "₹180", img: "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg" },
    { name: "Paneer Tikka", price: "₹150", img: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg" },
    { name: "Choco Shake", price: "₹90", img: "https://images.pexels.com/photos/6413577/pexels-photo-6413577.jpeg" },
  ];

  const orderData = [
    { month: "Jan", orders: 300 },
    { month: "Feb", orders: 450 },
    { month: "Mar", orders: 600 },
    { month: "Apr", orders: 750 },
    { month: "May", orders: 500 },
    { month: "Jun", orders: 700 }
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setFilteredOrders([]);
      setFilteredTrending([]);
      setFilteredFoodItems([]);
      return;
    }

    setFilteredOrders(recentOrders.filter(order =>
      order.id.toLowerCase().includes(query) ||
      order.customer.toLowerCase().includes(query) ||
      order.total.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query)
    ));

    setFilteredTrending(trendingItems.filter(item =>
      item.name.toLowerCase().includes(query)
    ));

    setFilteredFoodItems(foodItems.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query)
    ));
  };

  const displayedOrders = filteredOrders.length ? filteredOrders : recentOrders;
  const displayedTrending = filteredTrending.length ? filteredTrending : trendingItems;
  const displayedFoods = filteredFoodItems.length ? filteredFoodItems : foodItems;

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search anything..."
              className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-lg w-64 text-white placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg"
            >
              Search
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Recent Orders + Trending Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-800 rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-400">
                  <th className="py-2 border-b border-gray-700">Order ID</th>
                  <th className="py-2 border-b border-gray-700">Customer</th>
                  <th className="py-2 border-b border-gray-700">Total</th>
                  <th className="py-2 border-b border-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {displayedOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customer}</td>
                    <td className="py-2">{order.total}</td>
                    <td className="py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-800 rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Trending Items</h2>
            <ul className="space-y-3">
              {displayedTrending.map((item, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{i + 1}. {item.name}</span>
                  <span className="font-medium text-blue-400">{item.orders}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Order Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={orderData}>
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Favorite Items */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Most Favourite Items</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {displayedFoods.map((item, i) => (
              <div key={i} className="min-w-[150px] bg-gray-700 p-3 rounded-xl text-center shadow-sm">
                <img src={item.img} alt={item.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-sm text-gray-400">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
