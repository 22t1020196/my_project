import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center py-12">
      <img
        src="avatar.jpg"   
        alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
      />
      <h1 className="text-4xl font-bold font-poppins">Đoàn Thị Mỹ Linh</h1>
      <p className="text-lg mt-2">Trường Đại học Khoa học - Đại học Huế</p>
      <p className="text-md">Khoa: Công nghệ Thông tin</p>
      <p className="mt-1">MSV: 22T1020196 | Lớp: K46J</p>
    </header>
  );
};

export default Header;
