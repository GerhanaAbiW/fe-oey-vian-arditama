import Image from "next/image";
import React from "react";
import { NavbarProps } from "./type";

const Navbar: React.FC<NavbarProps> = ({
  style,
  height = "64px",
  logo,
  buttons,
}) => {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 shadow-md"
      style={{ height, ...style }}
    >
      <div className="flex items-center">
        {logo ? (
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            No Image
          </div>
        )}
      </div>

      <div className="flex gap-4">
        {buttons.map((btn) => (
          <button
            key={btn.text}
            onClick={btn.onClick}
            className="px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:opacity-90 transition-all shadow-md"
          >
            {btn.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
