import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import about from "../public/images/about-1.png";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-award bg-cover bg-no-repeat bg-enter text-white py-6">
      <section className="border-b-2  border-dashed border-pink grid grid-cols-6 gap-8  items-center w-[90%] mx-[5%] justify-between py-6">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <Image src={logo} alt="logo" />
          <p className="my-6">Here Joyful Play Sparks Lifelong Memories.</p>
          <div className="flex gap-4">
            <FaFacebookF size={34}  className="bg-gray-500 p-2 rounded-full hover:bg-pink transition-all"/>
            <FaTwitter size={34}  className="bg-gray-500 p-2 rounded-full hover:bg-pink transition-all"/>
            <FaInstagram size={34}  className="bg-gray-500 p-2 rounded-full hover:bg-pink transition-all"/>
            <FaYoutube size={34}  className="bg-gray-500 p-2 rounded-full hover:bg-pink transition-all"/>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <Image src={about} alt="about" />
        </div>

        <div className="flex flex-col col-span-6 sm:col-span-3 lg:col-span-2">
          <h1 className="font-bold text-2xl">Subscribe to Our Newsletter</h1>
          <p className="my-6">
            Be part of the 50K+ community thriving with Zaijoy!
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="enter email address"
              className="py-2 px-4 rounded-md"
            />
            <button className="py-2 px-4 bg-pink rounded-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <div className="w-[90%] mx-[5%] grid grid-cols-4 gap-8 pt-6">
        <div className="sm:border-r-2  border-dashed border-pink col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Services Us
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:border-r-2  border-dashed border-pink col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Adventure
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Team
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:border-r-2 border-dashed border-pink col-span-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-pink">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <h1 className="text-2xl font-bold mb-4">Contact Info</h1>
          <div className="flex gap-4 items-center">
            <LuPhoneCall size={24} className="text-green-600" />
            <p>(01) 2345-6789</p>
          </div>
          <div className="flex gap-4 items-center my-4">
            <MdAlternateEmail size={24} className="text-orange-600" />
            <p>email@zaijoy.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <GrLocation size={24} className="text-green-600" />
            <p>BT5 Building, Silver Road, London, England</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
