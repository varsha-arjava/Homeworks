import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import "../css/sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown

  const Menus = [
    { title: "Dashboard", src: "Dashboard" },
    { title: "Products", src: "Products" },
    {
      title: "Orders",
      src: "Orders",
      dropdown: ["Order List", "Pending Orders", "Completed Orders"], // Add dropdown items here
    },
    { title: "Customer ", src: "Customer" },
  ];

  return (
    <>
     
        {/* Sidebar */}
        <div className="bar">
          <div
            className={`${
              open ? "w-64" : "w-20"
            } bg-light-blue h-screen p-5 pt-8 relative`}
            onMouseEnter={() => setOpen(!open)}
          >
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex flex-col rounded-md p-2 cursor-pointer hover:bg-light-white hover:text-white text-gray-300 text-sm items-start gap-x-4 
              ${Menu.gap ? "mt-20" : "mt-2"} ${
                    index === 0 && "bg-light-white text-white"
                  }`}
                  onClick={() =>
                    Menu.dropdown && setShowDropdown(!showDropdown)
                  }
                >
                  <div className="flex items-center w-full">
                    <img
                      className={`${open && "img-w"}`}
                      src={`assets/${Menu.src}.png`}
                    />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                    {Menu.dropdown && open && (
                      <span className="ml-auto">
                        {showDropdown ? <FaArrowDown /> : <FaArrowUp />}
                      </span>
                    )}
                  </div>
                  {Menu.dropdown && showDropdown && open && (
                    <ul className="pl-8 mt-2">
                      {Menu.dropdown.map((item, id) => (
                        <li
                          key={id}
                          className="text-gray-300 hover:text-white text-sm cursor-pointer mt-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

    </>
  );
}
