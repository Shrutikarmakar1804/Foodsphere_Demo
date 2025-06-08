
export const RestaurantDashboard = () => {
  const stats = [
    { label: "Total Orders", value: 1245 },
    { label: "Active Menu Items", value: 32 },
    { label: "Today's Revenue", value: "₹18,430" },
    { label: "Pending Deliveries", value: 6 },
  ];

  const recentOrders = [
    { id: "#ORD1021", customer: "Ankit Sharma", total: "₹450", status: "Preparing" },
    { id: "#ORD1022", customer: "Sneha Roy", total: "₹980", status: "Delivered" },
    { id: "#ORD1023", customer: "Rahul Verma", total: "₹320", status: "Cancelled" },
  ];

  const handleCreateOrder = () => {
    alert("Redirect to create order form (or open modal)");
    Navigate("/admin/restaurants/create-order");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Welcome to Restaurant Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-center">
            <p className="text-sm text-gray-500 dark:text-gray-300">{stat.label}</p>
            <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <button
            onClick={handleCreateOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow"
          >
            + Create Order
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 dark:text-gray-300 text-sm">
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr
                  key={i}
                  className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">{order.total}</td>
                  <td className="py-2 px-4 border-b">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
