"use client";

import { menuData } from "@/lib/data";
import { X } from "lucide-react"; // Importing X icon from lucide-react
import React, { useState, useEffect, useRef } from "react";

// Sample data for the dropdown menus

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // State to track which menu item is currently hovered, null if none
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const searchRef = useRef(null); // Ref for the search container to detect outside clicks
  // Ref for the main navigation content container, to detect clicks outside the menu
  const navContainerRef = useRef(null);
  // To manage hover timeouts for smooth menu opening/closing without flickering
  const timeoutRef = useRef(null);

  // Function to handle mouse entering a menu item or the dropdown itself
  const handleMouseEnter = (item) => {
    // Clear any existing timeout to prevent premature closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredMenuItem(item); // Set the currently hovered menu item
  };

  // Function to handle mouse leaving a menu item or the dropdown itself
  const handleMouseLeave = () => {
    // Set a timeout to close the menu after a short delay,
    // allowing mouse to move between menu items and the dropdown content
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredMenuItem(null);
    }, 150); // 150ms delay before closing
  };

  // Effect to handle clicks outside the navbar and Escape key press
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close search if open and click is outside search bar
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
      // Close hover menu if open and click is outside the main navigation container
      if (
        hoveredMenuItem &&
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        setHoveredMenuItem(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        // Close search if open
        if (isSearchOpen) {
          setIsSearchOpen(false);
        }
        // Close hover menu if open
        if (hoveredMenuItem) {
          setHoveredMenuItem(null);
        }
      }
    };

    // Add event listeners when the component mounts or when relevant states change
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      // Clear any pending timeouts on unmount to prevent memory leaks
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isSearchOpen, hoveredMenuItem]); // Rerun effect when these states change

  return (
    // Navbar container
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-sans">
      {/* Main navigation container, now relative for absolute positioning of the dropdown */}
      <div
        ref={navContainerRef}
        className="mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="flex justify-between h-12 items-center">
          {/* Left Menu Section (hidden when search is open) */}
          {!isSearchOpen && (
            <div className="flex space-x-6">
              {["WOMEN", "MEN", "TEEN", "KIDS"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 rounded-md text-sm uppercase"
                  // Use custom handlers for smooth hover effect
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Logo Section (hidden when search is open) */}
          {!isSearchOpen && (
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800 tracking-widest">
                MANGO
              </h1>
            </div>
          )}

          {/* Search and Right Section */}
          <div
            ref={searchRef}
            className={`flex items-center ${
              isSearchOpen ? "w-full" : ""
            } justify-end`}
          >
            {isSearchOpen ? (
              // Search input field when search is open
              <div className="relative flex-grow flex items-center mr-4">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="w-full pl-3 pr-10 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-gray-300 text-gray-700 text-sm placeholder-gray-500"
                  autoFocus // Automatically focus when search opens
                />
                {/* Close button (X) inside the input bar */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none rounded-full cursor-pointer"
                  aria-label="Close search"
                >
                  <X size={20} /> {/* Lucide React X icon */}
                </button>
              </div>
            ) : (
              // Search text/icon when search is closed
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2 rounded-md text-sm uppercase mr-4 focus:outline-none cursor-pointer"
                aria-label="Open search"
              >
                SEARCH
              </button>
            )}

            {/* Right Section (always visible) */}
            <div className="flex space-x-4">
              {["LOGIN", "WISHLIST", "BAG (0)"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 rounded-md text-sm uppercase"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* The single, full-width dropdown menu, positioned relative to navContainerRef */}
        {/* Only renders if a menu item is hovered and has data */}
        {hoveredMenuItem && menuData[hoveredMenuItem] && (
          <div
            className="absolute top-12 right-0 w-full bg-white border border-gray-200 shadow-lg p-6 grid grid-cols-4 gap-6 z-40"
            onMouseEnter={() => handleMouseEnter(hoveredMenuItem)} // Keep menu open if mouse moves over dropdown
            onMouseLeave={handleMouseLeave} // Close menu when mouse leaves dropdown
          >
            {Object.entries(menuData[hoveredMenuItem]).map(
              ([category, subItems]) => (
                <div key={category}>
                  <h3 className="font-bold text-gray-800 mb-3 uppercase text-sm">
                    {category}
                  </h3>
                  <ul>
                    {subItems.map((subItem) => (
                      <li key={subItem} className="mb-2">
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
                        >
                          {/* Placeholder for icon - you can use real icons or Lucide React icons here */}
                          <svg
                            className="w-4 h-4 mr-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {subItem}
                        </a>
                      </li>
                    ))}
                    {/* "SHOP ALL" button for categories with many items */}
                    {["LAB GROWN DIAMONDS", "MOISSANITE", "GEMSTONES"].includes(
                      category
                    ) && (
                      <li className="mt-2">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          SHOP ALL
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )
            )}
            {/* "DESIGN YOUR OWN ENGAGEMENT RING" section, specifically for WOMEN menu */}
            {hoveredMenuItem === "WOMEN" && (
              <div className="col-span-4 border-t border-gray-200 pt-4 mt-4 flex justify-center items-center text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer">
                {/* Placeholder for ring icon */}
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm4 0a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                DESIGN YOUR OWN ENGAGEMENT RING
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
