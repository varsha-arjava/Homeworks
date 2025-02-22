import React, { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { FaUpload, FaTrash } from "react-icons/fa";
import "../app/css/productdetails.css";

export default function Productdetails() {


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
                Product Details
              </h1>
              <form className="grid grid-cols-2 gap-4 font-jakarta">
                {/* Left Column */}
                <div className="relative pro-group">
                  <input
                    type="text"
                    placeholder=""
                  />
                  <label className="floating-label">
                    Name<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative pro-group">
                  <input
                    type="text"
                    placeholder=""
                  />
                  <label className="floating-label">
                    Appearance<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative pro-group">
                  <textarea
                    placeholder=""
                    rows={3}
                  />
                  <label className="floating-label">
                    Description<span className="text-red-500">*</span>
                  </label>
                </div>
                <div>
                  <div className="relative pro-group pb-4">
                    <input
                      type="text"
                      placeholder=""
                    />
                    <label className="floating-label">
                      Diet<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative pro-group">
                    <input
                      type="text"
                      placeholder=""
                    />
                    <label className="floating-label">
                      Nutritional Value<span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative pro-group pb-4">
                    {/* <div className="flex items-center">
                      <span className="p-2 border border-gray-300 bg-gray-100 text-light-blue rounded-l-md">
                        Dollar$
                      </span> */}
                    <input
                      type="number"
                      placeholder=""
                    />
                    <label className="floating-label">
                      Rate $<span className="text-red-500">*</span>
                    </label>
                    {/* </div> */}
                  </div>
                  <div className="relative pro-group pb-4">
                    <select>
                      <option value=""></option>
                      <option value="Per Unit">Per Unit</option>
                      <option value="Per Kg">Per Kg</option>
                    </select>
                    <label className="floating-label">
                      Measurement<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative pro-group">
                    <input
                      type="number"
                      placeholder=""
                    />
                    <label className="floating-label">
                      Unit<span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <div className="relative pro-group pb-4 border border-gray-300 rounded-md p-4">
                  <label className="upload-file floating-label">
                    Upload Photos<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="text-light-blue px-4 py-2 rounded-md cursor-pointer"
                    >
                      <FaUpload className="inline mr-2" /> Upload
                    </label>
                    <button
                      type="button"
                      className="text-gray px-4 py-2 rounded-md"
                    >
                      <FaTrash className="inline mr-2" /> Clear
                    </button>
                  </div>
                 
                </div>
              </form>
              <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex justify-end space-x-4 shadow-custom-heavy">
                <button
                  type="button"
                  className="text-light-blue border border-light-blue px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-dark-blue text-white px-4 py-2 rounded-md hover:bg-light-blue"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
