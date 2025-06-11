import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export const RestaurantDashboard = () => {
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
  ];

  const trendingItems = [
    { name: "Paneer Tikka", orders: 524 },
    { name: "Butter Chicken", orders: 316 },
    { name: "Chicken Biryani", orders: 210 },
  ];

  const orderData = [
    { month: "Jan", orders: 300 },
    { month: "Feb", orders: 450 },
    { month: "Mar", orders: 600 },
    { month: "Apr", orders: 750 },
    { month: "May", orders: 500 },
    { month: "Jun", orders: 700 }
  ];

  const foodItems = [
    { name: "Orange Mojito", price: "₹120", img: "https://images.pexels.com/photos/2767875/pexels-photo-2767875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Chicken Biryani", price: "₹180", img: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Paneer Tikka", price: "₹150", img: "https://images.pexels.com/photos/30858402/pexels-photo-30858402/free-photo-of-delicious-paneer-tikka-masala-dish-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Choco Shake", price: "₹90", img: "https://images.pexels.com/photos/6413577/pexels-photo-6413577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-lg w-64 text-white placeholder-gray-400"
          />
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders Table */}
          <div className="col-span-2 bg-gray-800 rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-400 border-b border-gray-700">
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
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

          {/* Trending Items */}
          <div className="bg-gray-800 rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Trending Items</h2>
            <ul className="space-y-3">
              {trendingItems.map((item, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{i + 1}. {item.name}</span>
                  <span className="font-medium text-blue-400">{item.orders}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Trend Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Order Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={orderData}>
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#4b5563', color: '#fff' }} />
              <Line type="monotone" dataKey="orders" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Food Card Slider */}
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Most Favourite Items</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {foodItems.map((item, i) => (
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
