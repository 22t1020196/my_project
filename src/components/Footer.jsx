import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-center py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-inner"
    >
      <motion.p
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        © 2025 Đoàn Thị Mỹ Linh - CV Online
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
