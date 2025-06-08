import { useState } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";

 function Subscription() {
  const [showConfirm, setShowConfirm] = useState(false);
  const plan = {
    name: "Premium",
    price: "$9.99/month",
    renewalDate: "June 10, 2025",
    status: "Active",
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Your Subscription</h2>
        <p className="text-gray-500 dark:text-gray-400">Manage your current plan and billing.</p>
      </div>

      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
        <p className="text-lg">
          Plan: <strong>{plan.name}</strong>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{plan.price}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Renews on: {plan.renewalDate}</p>
        <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
          <CheckCircle className="w-4 h-4" /> {plan.status}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={() => alert("Redirect to change plan page")}
        >
          Change Plan
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          onClick={() => setShowConfirm(true)}
        >
          Cancel Subscription
        </button>
      </div>

      {showConfirm && (
        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg space-y-2 border border-red-300 dark:border-red-700">
          <p className="flex items-center text-red-700 dark:text-red-200 font-medium">
            <AlertCircle className="w-5 h-5 mr-2" />
            Are you sure you want to cancel your subscription?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              No, keep it
            </button>
            <button
              onClick={() => {
                setShowConfirm(false);
                alert("Subscription cancelled");
              }}
              className="px-3 py-1 rounded bg-red-600 text-white"
            >
              Yes, cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Subscription;