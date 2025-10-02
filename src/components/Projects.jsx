import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 mt-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
        <FaProjectDiagram /> Dự án
      </h2>
      <div className="space-y-4 text-gray-700">
        <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
          <h3 className="font-semibold text-lg">Website CV cá nhân</h3>
          <p>Website giới thiệu bản thân, kỹ năng và các dự án cá nhân.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
          <h3 className="font-semibold text-lg">Kỹ nghệ phần mềm</h3>
          <p>Xây dựng hệ thống quản lý thư viện.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
          <h3 className="font-semibold text-lg">Đồ án công nghệ phần mềm</h3>
          <p>Hệ thống quản lý phòng khám nha khoa.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
