import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Help Center</h1>

        <div className="space-y-8">
          {/* FAQs Section */}
          <div className="p-6 bg-gray-100 rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">FAQs</h2>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Q:</span> How can I place an order?</p>
              <p><span className="font-medium">A:</span> Browse items, add to cart, and proceed to checkout.</p>
              <p><span className="font-medium">Q:</span> What payment methods do you accept?</p>
              <p><span className="font-medium">A:</span> We accept credit/debit cards, PayPal, and cash on delivery.</p>
              <p><span className="font-medium">Q:</span> How can I track my order?</p>
              <p><span className="font-medium">A:</span> You can track your order status in the "My Orders" section of your account.</p>
              <p><span className="font-medium">Q:</span> What is your refund policy?</p>
              <p><span className="font-medium">A:</span> We offer a full refund for items returned within 30 days of delivery.</p>
              <p><span className="font-medium">Q:</span> How can I contact customer support?</p>
              <p><span className="font-medium">A:</span> You can reach us via the "Contact Support" button below or email us at.</p>
              <p><span className="font-medium">Q:</span> What should I do if I receive a damaged item?</p>
              <p><span className="font-medium">A:</span> Please contact our support team within 48 hours of delivery for assistance.</p>
              <p><span className="font-medium">Q:</span> Can I change my delivery address after placing an order?</p>
              <p><span className="font-medium">A:</span> Yes, you can update your delivery address in the "My Orders" section before the order is shipped.</p>
              <p><span className="font-medium">Q:</span> Do you offer same-day delivery?</p>
              <p><span className="font-medium">A:</span> Yes, we offer same-day delivery for select items in certain areas.</p>
              <p><span className="font-medium">Q:</span> How can I provide feedback about my experience?</p>
              <p><span className="font-medium">A:</span> We value your feedback! You can leave a review on our website or contact us directly.</p>
              <p><span className="font-medium">Q:</span> What should I do if I forgot my password?</p>
              <p><span className="font-medium">A:</span> Click on "Forgot Password" on the login page to reset your password.</p>
              <p><span className="font-medium">Q:</span> How can I unsubscribe from promotional emails?</p>
              <p><span className="font-medium">A:</span> You can unsubscribe by clicking the link at the bottom of our emails.</p>
              <p><span className="font-medium">Q:</span> Do you have a mobile app?</p>
              <p><span className="font-medium">A:</span> Yes, our mobile app is available for download on iOS and Android.</p>
              <p><span className="font-medium">Q:</span> Can I schedule a delivery for a specific time?</p>
              <p><span className="font-medium">A:</span> Yes, you can choose a delivery time during checkout.</p>
              <p><span className="font-medium">Q:</span> What should I do if my order is late?</p>
              <p><span className="font-medium">A:</span> Please check your order status in the "My Orders" section or contact our support team.</p>
              <p><span className="font-medium">Q:</span> How can I update my account information?</p>
              <p><span className="font-medium">A:</span> You can update your account information in the "My Profile" section of your account.</p>
              <p><span className="font-medium">Q:</span> Do you offer gift cards?</p>
              <p><span className="font-medium">A:</span> Yes, we offer gift cards that can be purchased on our website.</p>
              <p><span className="font-medium">Q:</span> How can I report a problem with my order?</p>
              <p><span className="font-medium">A:</span> Please contact our support team with your order details for assistance.</p>
              <p><span className="font-medium">Q:</span> Can I change my order after placing it?</p>
              <p><span className="font-medium">A:</span> You can modify your order within 30 minutes of placing it by contacting our support team.</p>
            </div>
          </div>

          {/* Terms Section */}
          <div className="p-6 bg-gray-100 rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Terms & Conditions</h2>
            <p className="text-gray-600">
              Please read our policies carefully before placing an order. By purchasing, you agree to our terms of service and refund policies.
            </p>
            <p className="text-gray-600 mt-2">
              For more details, please visit our <Link to="/terms" className="text-indigo-500 underline">Terms and Conditions</Link> page.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-6 bg-gray-100 rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Need More Help?</h2>
            {/* <p className="text-gray-600">
              Contact our support team at <a href="mailto:support@example.com" className="text-indigo-500 underline">foodsphere@gmail.com</a> or call us at <span className="font-medium">+1 234 567 890</span>.
            </p> */}
            <Link to="/contact">
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
