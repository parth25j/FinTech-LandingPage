import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

// const navItems = ["Solution", "About Us", "Pricing"];

const navItems = [
  {
    item: "Solution",
    link: "#solution",
  },
  {
    item: "About Us",
    link: "#about",
  },
  {
    item: "Pricing",
    link: "#pricing",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="h-full  p-2 flex justify-between items-center relative z-50 ">
      <div className="flex gap-2 ">
        <span className="text-secondary font-semibold">₹</span>
        <h1 className="text-primary font-semibold font-fancy tracking-wide ">
          Fintech Co.
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-6 ">
          {/* {navItems.map((ele) => ( <a href="">
              <li className="text-sm font-medium text-gray-500 " key={ele}>
                {ele}
              </li>
            </a>
          ))} */}

          {
            navItems.map((ele)=>{
              return <a href={ele.link}>
              <li className="text-sm font-medium text-gray-500 " key={ele.item}>
                {ele.item}
              </li>
            </a>
            })
          }
        </ul>
      </div>
      <div className="md:flex gap-4 hidden">
        <button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary-light text-primary-dark cursor-pointer hover:bg-purple-100 hover:text-gray-500">
          Contact Sales
        </button>
        <button className="px-4 py-2 text-xs font-bold rounded-lg bg-secondary text-textP cursor-pointer hover:bg-primary-light hover:text-gray-500">
          Get Started
        </button>
      </div>

      {/* //collapsed */}

      <div className="md:hidden">
        {!toggle ? (
          <GiHamburgerMenu onClick={() => setToggle(!toggle)} color="#D946EF" />
        ) : (
          <IoCloseOutline
            onClick={() => setToggle(!toggle)}
            color="#D946EF"
            fontSize="24px"
            fontWeight=""
          />
        )}
      </div>

      {toggle ? (
        <div className=" absolute w-full top-12 p-2 flex flex-col gap-6 items-center justify-center bg-white left-0 w-screen overflow-hidden">
          <ul className="flex flex-col gap-4 mt-6">
            {navItems.map((ele) => (
            <a href={ele.link}>  <li className="text-sm font-medium text-gray-500" key={ele.item}>
            {ele.item}
          </li></a>
            ))}
          </ul>

          <div className="flex gap-4 ">
            <button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary-light text-primary-dark cursor-pointer hover:bg-purple-100 hover:text-gray-500">
              Contact Sales
            </button>
            <button className="px-4 py-2 text-xs font-bold rounded-lg bg-secondary text-textP cursor-pointer hover:bg-primary-light hover:text-gray-500">
              Get Started
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
