import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
          <div className="flex w-full">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-[#303030] bg-[#1f1f1f] text-[#e5e5e5] placeholder:text-gray-500 rounded-l-full focus:border-[#e50914] focus:ring-2 focus:ring-[#e50914]/40 focus:outline-none"
              />
            </div>
            <button className="px-6 py-2 bg-[#1f1f1f] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#262626] transition-colors">
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <button className="ml-2 p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg
              className="w-6 h-6 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>
        </div>
    );
};

export default SearchBar;