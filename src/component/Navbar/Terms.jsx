import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
            <p>
              You must use the service responsibly. Any fraudulent, abusive, or otherwise illegal activity is strictly prohibited and may be grounds for termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Payment & Billing</h2>
            <p>
              All payments must be made through our secure payment gateway. Refunds, if applicable, will be processed as per our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Shipping & Delivery</h2>
            <p>
              Delivery times may vary depending on your location. We are not responsible for delays caused by unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at our
              <Link to="/contact" className="text-indigo-500 underline">  Contact Page</Link>.
            </p>
          </section>
        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Terms;
