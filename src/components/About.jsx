import { 
  FaBirthdayCake, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaMusic, 
  FaBook, 
  FaPlane, 
  FaLaptopCode 
} from "react-icons/fa";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto p-6 text-center bg-white/30 rounded-xl shadow-lg backdrop-blur-md"
    >
      {/* Giới thiệu */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-4 text-purple-700"
      >
        Giới thiệu
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-700 mb-6"
      >
        Xin chào! Mình là <b>Đoàn Thị Mỹ Linh</b>, sinh viên năm 4 khoa Công nghệ Thông tin - chuyên ngành Công nghệ phần mềm. 
        Mình đam mê lập trình web và mong muốn phát triển kỹ năng trong <b>React, Node.js</b> và <b>Front-end</b>.
      </motion.p>

      {/* Sở thích */}
      <motion.h3 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-xl font-semibold text-purple-700 mb-3"
      >
        Sở thích
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-6 text-gray-700 mb-3">
        {[
          { icon: <FaMusic className="text-indigo-500 text-2xl mb-1" />, text: "Nghe nhạc" },
          { icon: <FaBook className="text-emerald-500 text-2xl mb-1" />, text: "Đọc sách" },
          { icon: <FaPlane className="text-pink-500 text-2xl mb-1" />, text: "Du lịch" },
          { icon: <FaLaptopCode className="text-orange-500 text-2xl mb-1" />, text: "Lập trình" },
        ].map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex flex-col items-center cursor-pointer"
          >
            {item.icon}
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Thông tin cá nhân */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 mb-6">
        {[
          { icon: <FaBirthdayCake className="text-pink-500" />, text: "01/06/2004" },
          { icon: <FaEnvelope className="text-blue-500" />, text: "22t1020196@husc.edu.vn" },
          { icon: <FaPhoneAlt className="text-green-500" />, text: "+84 942 830 159" },
          { icon: <FaMapMarkerAlt className="text-red-500" />, text: "Quảng Trị, Việt Nam" },
          { 
            icon: <FaGithub className="text-gray-800" />, 
            text: <a 
              href="https://github.com/22t1020196" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline text-purple-600"
            >
              github.com/22t1020196
            </a> 
          },
        ].map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center gap-2"
          >
            {item.icon}
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
