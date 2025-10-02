import React from "react";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 mt-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
        <FaTools /> Kỹ năng
      </h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React, TailwindCSS</li>
        <li>Node.js, Express</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Skills;
