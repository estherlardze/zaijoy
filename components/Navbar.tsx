"use client";

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { GrCart } from "react-icons/gr";
import Buyticket from "./Buyticket";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = usePathname();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const isActive = (path: string) => {
    return router === path ? "text-pink" : "text-white";
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="bg-black/80 text-white fixed lg:absolute top-0 left-0 right-0 lg:top-7 w-full overflow-hidden transition-all duration-300 z-20">
      <section className="flex justify-between py-5 px-8 items-center">
        <Image src={logo} alt="logo" width={100} />
        <div className="hidden lg:flex gap-8">
          <Link href="/" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/about-us" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/about-us")}`}>
            About
          </Link>
          <Link href="/services" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/services")}`}>
            Services
          </Link>
          <Link href="/adventure" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/adventure")}`}>
            Adventures
          </Link>
          <Link href="/pricing" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/pricing")}`}>
            Pricing
          </Link>
          <Link href="/teams" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/teams")}`}>
            Teams
          </Link>
          <Link href="/contact" className={`text-[17px] font-semibold cursor-pointer hover:text-pink transition-all ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <Link href="/" className="text-white border-2 font-semibold border-white rounded-full p-2 relative">
            <GrCart size={18} />
            <div className="absolute -top-1 -right-2 w-5 h-5 p-1 rounded-full bg-pink text-white flex justify-center items-center">
              0
            </div>
          </Link>
          <div className="hidden sm:block">
            <Buyticket color={"#e90e70"} textColor={"#fff"} />
          </div>
          <div className="lg:hidden" onClick={handleMenu}>
            {menu ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
          </div>
        </div>
      </section>

      {menu && (
        <div className="w-full bg-black z-50 text-white fixed lg:hidden top-[70px] left-0 right-0 justify-center items-center transition-all duration-700">
          <div className="flex justify-center items-left pl-6 py-8 flex-col h-fit text-lg sm:text-xl gap-y-4">
            <Link href="/" className={`font-semibold cursor-pointer ${isActive("/")}`} onClick={handleCloseMenu}>
              Home
            </Link>
            <Link href="/about-us" className={`font-semibold cursor-pointer ${isActive("/about-us")}`} onClick={handleCloseMenu}>
              About
            </Link>
            <Link href="/services" className={`font-semibold cursor-pointer ${isActive("/services")}`} onClick={handleCloseMenu}>
              Services
            </Link>
            <Link href="/adventure" className={`font-semibold cursor-pointer ${isActive("/adventure")}`} onClick={handleCloseMenu}>
              Adventures
            </Link>
            <Link href="/pricing" className={`font-semibold cursor-pointer ${isActive("/pricing")}`} onClick={handleCloseMenu}>
              Pricing
            </Link>
            <Link href="/teams" className={`font-semibold cursor-pointer ${isActive("/teams")}`} onClick={handleCloseMenu}>
              Teams
            </Link>
            <Link href="/contact" className={`font-semibold cursor-pointer ${isActive("/contact")}`} onClick={handleCloseMenu}>
              Contact
            </Link>
            <button className="button sm:hidden"></button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
