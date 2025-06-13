import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const RestaurantDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filteredTrending, setFilteredTrending] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);

  const stats = [
    { label: "Total Orders", value: "1,245" },
    { label: "Active Menu Items", value: "32" },
    { label: "Today's Revenue", value: "₹10,430" },
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
    { id: "#ORD1030", customer: "Meera Joshi", total: "₹540", status: "Delivered" }
  ];

  const trendingItems = [
    { name: "Paneer Tikka", orders: 524 },
    { name: "Butter Chicken", orders: 316 },
    { name: "Chicken Biryani", orders: 210 },
    { name: "Veg Pizza", orders: 198 },
    { name: "Chocolate Cake", orders: 175 },
    { name: "Caesar Salad", orders: 150 },
    { name: "Orange Mojito", orders: 130 }
  ];

  const foodItems = [
    { name: "Orange Mojito", price: "₹120", img: "https://images.pexels.com/photos/2767875/pexels-photo-2767875.jpeg" },
    { name: "Chicken Biryani", price: "₹180", img: "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg" },
    { name: "Paneer Tikka", price: "₹150", img: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg" },
    { name: "Choco Shake", price: "₹90", img: "https://images.pexels.com/photos/2340204/pexels-photo-2340204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Veg Pizza", price: "₹220", img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Caesar Salad", price: "₹130", img: "https://images.pexels.com/photos/32474564/pexels-photo-32474564/free-photo-of-delicious-seafood-squid-salad-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Butter Chicken", price: "₹250", img: "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  const multiLineData = [
    { day: "Mon", dineIn: 120, online: 90, takeaway: 60 },
    { day: "Tue", dineIn: 150, online: 100, takeaway: 80 },
    { day: "Wed", dineIn: 170, online: 130, takeaway: 100 },
    { day: "Thu", dineIn: 140, online: 120, takeaway: 110 },
    { day: "Fri", dineIn: 200, online: 180, takeaway: 140 },
    { day: "Sat", dineIn: 240, online: 200, takeaway: 160 },
    { day: "Sun", dineIn: 220, online: 170, takeaway: 150 },
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
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden w-full">
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

        {/* Orders + Trending */}
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

        {/* Multi-Line Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Weekly Order Trend (Category-wise)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={multiLineData}>
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="dineIn" stroke="#3b82f6" strokeWidth={2} name="Dine-In" />
              <Line type="monotone" dataKey="online" stroke="#f97316" strokeWidth={2} name="Online" />
              <Line type="monotone" dataKey="takeaway" stroke="#10b981" strokeWidth={2} name="Takeaway" />
            </LineChart>
          </ResponsiveContainer>
        </div>

         {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Weekly Order Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={trendingItems.map(item => ({ day: item.name, orders: item.orders }))}>
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="orders" fill="#34d399" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Favorite Items */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Most Favourite Items</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600">
            {displayedFoods.map((item, i) => (
              <div key={i} className="w-36 bg-gray-700 p-3 rounded-xl text-center shadow-sm flex-shrink-0">
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
