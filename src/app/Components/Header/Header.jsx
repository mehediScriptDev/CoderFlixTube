import React from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import SearchiMobile from "./components/SearchiMobile";
import RightSection from "./components/RightSection";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#141414] border-b border-[#262626]">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* <!-- Logo --> */}
        <Logo />

        {/* <!-- Search Bar --> */}
        <SearchBar />

        {/* <!-- Search Icon (Mobile) --> */}
        <SearchiMobile />

        {/* <!-- Right Section --> */}
        <RightSection />
      </div>
    </header>
  );
};

export default Header;
