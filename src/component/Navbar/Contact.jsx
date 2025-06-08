import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-50 to-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl shadow-2xl">

        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Customer Support</h1>
            
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Find us on</h2>
            <div className="flex space-x-4">
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/instagram-new.png" className="w-6" alt="Instagram Icon" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/facebook-new.png" className="w-6" alt="Facebook Icon" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/twitter.png" className="w-6" alt="Twitter Icon" /></a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Corporate Office</h2>
            <p className="text-gray-600">
              123 Food Street, Food City, FC 12345
            </p>
            <p className="text-gray-600">
              Phone: <span className="text-pink-600 font-semibold">+91 9867574422</span>
            </p>
            <p className="text-gray-600">
              Whatsapp: <span className="text-pink-600 font-semibold">+91 73456891</span>
            </p>
            <p className="text-gray-600">
              Email: <span className="text-pink-600 font-semibold">foodsphere@gmail.com</span>
            </p>

            <button className="mt-4 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg">
              Get Directions
            </button>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in touch</h2>

          {/* ✅ Form starts */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 bg-gray-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
              />
              {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-gray-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
              />
              {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 bg-gray-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm resize-none"
              />
              {errors.message && <span className="text-sm text-red-500 mt-1">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="w-32 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full self-center mt-4"
            >
              Submit
            </button>
          </form>
          {/* ✅ Form ends */}

          <p className="text-xs text-gray-500 mt-6 text-center">
            By contacting us you agree to the{' '}
            <span className="text-pink-600 font-semibold">Terms and Conditions</span> and{' '}
            <span className="text-pink-600 font-semibold">Privacy Policy</span>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
