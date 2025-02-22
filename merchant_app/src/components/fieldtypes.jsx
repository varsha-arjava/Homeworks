import Sidebar from "./sidebar";
import Topbar from "./topbar";
import React, { useState } from "react";
import "../css/fieldtype.css";

export default function Fieldtypes() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ["List item 1", "List item 2", "List item 3", "List item 4"];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  return (
    <>
      <div className="flex font-jakarta">
        <Sidebar />
        <div className="h-screen flex-1 flex flex-col">
          {/* Top Bar */}
          <Topbar />
          <div className="flex justify-center items-center">
            <div className="rounded-md w-full max-w-3xl p-4">
              <h1 className="text-2xl font-bold text-center text-black-600 mb-6">
                Input Field Types
              </h1>
              <form className="grid grid-cols-1 gap-4 font-jakarta">
                <div>
                  <label htmlFor="radio">Radio types</label> <br />
                  <input
                    type="radio"
                    name="radio-btn-checked"
                    id="radio-btn-checked"
                    className="custom-radio checked-default m-4"
                    checked
                  />
                  <input
                    type="radio"
                    name="radio-btn-default"
                    id="radio-btn-default"
                    className="custom-radio m-4 border checked-border"
                  />
                  <input
                    type="radio"
                    name="radio-btn-disabled"
                    id="radio-btn-disabled"
                    className="custom-radio m-4 checked-default-disabled"
                    checked
                    disabled
                  />
                  <input
                    type="radio"
                    name="radio-btn-disabled-default"
                    id="radio-btn-disabled-default"
                    className="custom-radio m-4 default-disabled"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="radio">Checkbox types</label> <br />
                  <input
                    type="checkbox"
                    name="checkbox-btn-checked"
                    id="checkbox-btn-checked"
                    className="custom-checkbox m-4 checkbox-default"
                    checked
                  />
                  <input
                    type="checkbox"
                    name="checkbox-btn-default"
                    id="checkbox-btn-default"
                    className="custom-checkbox m-4 checkbox-border"
                  />
                  <input
                    type="checkbox"
                    name="checkbox-btn-disabled"
                    id="checkbox-btn-disabled"
                    className="custom-checkbox m-4 checkbox-default-disabled"
                    checked
                    disabled
                  />
                  <input
                    type="checkbox"
                    name="checkbox-btn-disabled-default"
                    id="checkbox-btn-disabled-default"
                    className="custom-checkbox m-4 default-disabled-checkbox"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="Toggle">Toggle types</label> <br />
                  <div className="flex mt-3">
                    <div
                      onClick={handleToggle}
                      className={`w-10 h-6 flex items-center rounded-full cursor-pointer p-1 mr-3 ${
                        isToggled ? "bg-light-blue" : "border border-gray-toggle bg-white"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          isToggled ? "bg-white translate-x-4" : "bg-gray-toggle-circle translate-x-0"
                        }`}
                      ></div>
                    </div>
                    <div className="w-10 h-6 flex items-center rounded-full cursor-pointer border border-gray-toggle p-1 mr-3">
                      <div className="w-4 h-4 bg-gray-toggle-circle rounded-full shadow-md transform transition-transform translate-x-0"></div>
                    </div>
                    <div className="w-10 h-6 flex items-center rounded-full cursor-pointer p-1 mr-3 bg-gray-toggle">
                      <div className="w-4 h-4 border-lightgray-toggle-circle rounded-full shadow-md transform transition-transform translate-x-4"></div>
                    </div>
                    <div className="w-10 h-6 flex items-center rounded-full cursor-pointer p-1 mr-3 border border-lightgray-toggle bg-white">
                      <div className="w-4 h-4 border-lightgray-toggle-circle rounded-full shadow-md transform transition-transform translate-x-0"></div>
                    </div>
                  </div>
                </div>
                <div className="relative w-64">
                  {/* Dropdown Header */}
                  <div
                    className="border border-gray-300 p-2 flex justify-between items-center cursor-pointer bg-blue-50"
                    onClick={toggleDropdown}
                  >
                    <div className="flex flex-wrap gap-1 items-center">
                      {selectedItems.map((sitem, index) => (
                        <span
                          key={index}
                          className="text-white bg-light-blue rounded-full px-2 py-1 text-sm"
                        >
                          {sitem}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleClear();
                      }}
                      className="text-gray-500 hover:text-red-500 ml-2"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Dropdown Body */}
                  {isOpen && (
                    <div className="absolute z-10 w-full border border-gray-300 bg-blue-50 shadow-md">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => handleSelect(item)}
                        >
                          <span>{item}</span>
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item)}
                            onChange={() => handleSelect(item)}
                            className="cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
