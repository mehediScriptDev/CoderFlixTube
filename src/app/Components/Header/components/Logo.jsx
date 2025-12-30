import React from 'react';

const Logo = () => {
    return (
        <div class="flex items-center gap-4">
          <button class="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <a href="/" class="flex items-center gap-1">
            <img src="./assets/Logo.svg" class="h-12" />
            <span class="text-xl font-medium hidden sm:inline">CoderFlix</span>
          </a>
        </div>
    );
};

export default Logo;