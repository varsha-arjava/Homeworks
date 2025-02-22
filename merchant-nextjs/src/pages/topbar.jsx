import { FaSignOutAlt, FaUser } from "react-icons/fa";

export default function Topbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-light-blue text-white p-2">
        {/* Left Spacer */}
        <div className="flex items-center w-1"></div>

        <div className="flex items-center justify-center w-1/2">
          <img src="./assets/logo.png" alt="Logo" className="h-10 w-30 mr-2" />
        </div>

        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <div className="flex">
            <span>User</span>
            <FaUser className="h-5 w-6 cursor-pointer" />
          </div>

          {/* Logout Icon */}
          <FaSignOutAlt
            className="h-5 w-10 cursor-pointer pr-5"
            onClick={() => alert("Logging out...")}
          />
        </div>
      </div>
    </>
  );
}
