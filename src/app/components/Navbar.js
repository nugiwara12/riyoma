"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdFlagCircle } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import { IoMdArrowDropright } from "react-icons/io";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // State to track active dropdown

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleAdminClick = (event) => {
    // Check if the clicked element is IoIosNotifications or MdFlagCircle
    if (event.target.tagName === "svg" || event.target.tagName === "path") {
      return; // Do nothing, don't toggle dropdown
    }
    toggleDropdown("admin");
  };

  const handleContactClick = (index) => {
    toggleDropdown(index);
  };

  const navlinks = [
    {
      label: "User",
      link: "/user",
    },
    {
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      label: "Men",
      link: "/men",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
      icon: IoMdArrowDropright,
      dropdown: [
        {
          label: "Option 1",
          link: "#",
        },
        {
          label: "Option 2",
          link: "#",
        },
      ],
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-4 lg:px-8 items-center py-4 bg-slate-200">
        <div className="flex items-center gap-4">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/dashboard"} className="text-4xl font-mono">
              <Image
                width={80}
                height={80}
                src="/genie-logo.svg"
                alt="avatar-img"
              />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <div key={i} className="relative">
              <a
                className="hidden lg:block text-gray-400 hover:text-black"
                href={d.link}
                onClick={() => toggleDropdown(i)} // Toggle active dropdown index
              >
                {d.label}
              </a>
              {d.icon && (
                <d.icon
                  className={`hidden md:inline absolute top-1 left-16 transform w-5 h-4 ${
                    activeDropdown === i && "rotate-90"
                  } transition-all duration-200`}
                />
              )}
              {d.dropdown && activeDropdown === i && (
                // Conditionally render dropdown
                <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg mt-2 py-2 w-40">
                  {d.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>

        {/* Admin section */}
        <div className="relative">
          <section
            className="flex items-center gap-1 cursor-pointer "
            onClick={handleAdminClick}
          >
            {/* Icon section */}
            <IoIosNotifications className="text-3xl mr-5 cursor-pointer" />
            <MdFlagCircle className="text-3xl mr-5 cursor-pointer" />
            <Image
              width={40}
              height={40}
              className="h-8 w-8 rounded-full"
              src="/logo.jpg"
              alt="avatar-img"
            />
            <h1>Admin</h1>
            {/* avtar img */}
            {/* Dropdown icon */}
            <IoMdArrowDropright
              className={`transform w-4 h-5 ${
                activeDropdown === "admin" && "rotate-90"
              } transition-all duration-200`}
            />
          </section>
          {/* Dropdown */}
          {activeDropdown === "admin" && (
            <div className="absolute top-full right-0 mt-4 w-[120px] text-center bg-white border border-gray-200 rounded shadow-lg">
              {/* Dropdown content */}
              <ul>
                <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer hover:text-sky-700">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer hover:text-sky-700">
                  About
                </li>
                <Link href="./auth">
                  <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer hover:text-sky-700">
                    Log out
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <hr className="" />
    </main>
  );
}
