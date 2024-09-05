import React from "react";
import { Link } from "react-router-dom";

import { IoIosHeartEmpty } from "react-icons/io";

import {
  IoCartOutline,
  // IoCloseSharp,
  // IoMenu,
  // IoSearchOutline,
} from "react-icons/io5";
const Header = () => {
  return (
    <div className=" relative right-[-7rem]">
      <div className="mx-w-6xl mx-auto items-center justify-between mt-8 gap-6 relative">
        <div className="max-w-2xl flex items-center justify-between flex-1">
          <div className="text-2xl font-bold tracking-wide hover:text-#FF7E1B">
            Sneaker
          </div>
          <nav className="hidden md:block">
            <ul className="flex md:gap-4 lg:gap-12 text-base">
              <li className="whitespace-nowwrap hover:text-#FF7E1B">
                <Link to="/">Home</Link>
              </li>

              <li className="whitespace-nowwrap hover:text-#FF7E1B ">
                .<Link to="/about">About</Link>
              </li>

              <li className="whitespace-nowwrap hover:text-#FF7E1B">
                <Link to="/">Contact</Link>
              </li>
              <li className="whitespace-nowwrap hover:text-#FF7E1B">
                <Link to="/tasks">Members</Link>
              </li>
              <li className="whitespace-nowwrap hover:text-#FF7E1B">
                <Link to="/Login">Login</Link>
              </li>

              <li className="whitespace-nowwrap hover:text-#FF7E1B">
                <Link to="/">Account</Link>
              </li>
            </ul>
          </nav>

          <div className="text-xl flex  gap-2 absolute right-64 sm:gap-4 hover:text-#FF7E1B">
            {/* gap-2 sm:gap-4 */}
            <IoIosHeartEmpty />
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
