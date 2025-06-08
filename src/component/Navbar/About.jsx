import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";



export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-50 to-white flex items-center justify-center p-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-bold text-pink-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
              <AiFillCheckCircle className="inline-block mr-2" />
            <i>About Me!</i>

          </motion.h1>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At FoodSphere, we believe that food is not just a necessity; it's an experience. Our platform is designed to help you discover the best dining experiences, whether you're looking for a cozy cafe, a fine dining restaurant, or a hidden gem in your city.
          </motion.p>
          
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm a passionate food lover and tech enthusiast. I enjoy exploring new cuisines and sharing my culinary adventures with others. My goal is to create a platform that connects food lovers and helps them discover the best dining experiences.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I believe that food is not just about sustenance; it's about culture, community, and connection. Through this platform, I aim to bring people together over their shared love for food.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            When I'm not exploring new restaurants or trying out new recipes, you can find me reading about the latest tech trends or working on my next big project.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            If you have any questions or just want to chat about food, feel free to reach out!
          </motion.p>
        </motion.div>
      </div>

      <div className="p-8">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Help-Line
        </motion.h1>
        <motion.ul
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <li>
            <a href="/help" className="text-pink-600 hover:underline text-lg">
              <FaHandsHelping className="inline-block mr-2" />
              Help
            </a>
          </li>
          <li>
            <a href="/contact" className="text-pink-600 hover:underline text-lg">
              <IoIosCall className="inline-block mr-2" />
              Contact Us
            </a>
          </li>
        </motion.ul>
      </div>
    </>
  );
}
