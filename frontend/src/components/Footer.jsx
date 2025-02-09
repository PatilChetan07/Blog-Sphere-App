import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  DhiWise vs Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  DhiWise vs Appsmith
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-800 hover:text-blue">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 hover:text-blue">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-blue">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          <Link to="/">
            Blog<span className="text-blue-500"> Sphere 🌍</span>
          </Link>
        </div>
        <div className="text-blue-800 font-bold text-sm hidden md:flex">
          <a href="https://github.com/PatilChetan07">
            <p>&copy; 2025 Blog Application ~ Chetan Patil</p>
          </a>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
