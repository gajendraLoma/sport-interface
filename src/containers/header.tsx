"use client";
import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

interface HeaderProps {
  contentRef: React.RefObject<HTMLElement>;
}

function Header({ contentRef }: HeaderProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  useEffect(() => {
    themeChange(false);
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setCurrentTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); 
  };

  
  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md z-50">
      {/* Menu toggle for mobile view or small screen */}
      <div className="flex-1">
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Bars3Icon className="h-5 inline-block w-5" />
        </label>
       
  <div className="container mx-auto px-4">
  <div className="hidden md:block">
    <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700 w-full max-w-[600px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        className="grow bg-transparent focus:outline-none"
        placeholder="Type to search..."
      />
    </label>
  </div>
</div>


      </div>

      <div className="flex-none">
        {/* Premium Button - Desktop Only */}
        <div className="hidden md:block mr-4">
          <button className="btn bg-[#5742A9] hover:bg-[#5742A9] dark:bg-[#F5C451] dark:hover:bg-[#F5C451] text-white dark:text-black border-0">
            Go Premium
          </button>
        </div>

        {/* Cart Dropdown */}
        <div className="hidden md:block">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Notification icon */}
        <button className="btn btn-ghost mr-4 ml-2 btn-circle">
          <div className="indicator">
            <BellIcon className="h-6 w-6" />
            <span className="indicator-item badge badge-secondary badge-sm">
              15
            </span>
          </div>
        </button>

        {/* Light and dark theme selection toggle */}
        <label className="swap mr-4">
          <input
            type="checkbox"
            checked={currentTheme === "dark"}
            onChange={toggleTheme}
          />
          <SunIcon
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              currentTheme === "dark" ? "swap-on" : "swap-off"
            }`}
          />
          <MoonIcon
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              currentTheme === "light" ? "swap-on" : "swap-off"
            }`}
          />
        </label>

        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </button>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
