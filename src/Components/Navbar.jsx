import { NavLink } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const navItemClass = ({ isActive }) =>
    `relative transition duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md px-4 md:px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-blue-600">
        Project temporary
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium">

        <li>
          <NavLink to="/home" className={navItemClass}>
            Home
          </NavLink>
        </li>

        {/* Real Estate */}
        <li
          className="relative"
          onMouseEnter={() => setDropdown("realestate")}
          onMouseLeave={() => setDropdown(null)}
        >
          <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600">
            Real Estate <ChevronDown size={16} />
          </div>

          <div
            className={`absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-40 transition-all duration-300 ${
              dropdown === "realestate"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <NavLink to="/realestate/buy" className="block px-4 py-2 hover:bg-gray-100">
              Buy
            </NavLink>
            <NavLink to="/realestate/sell" className="block px-4 py-2 hover:bg-gray-100">
              Sell
            </NavLink>
          </div>
        </li>

        {/* Vacation */}
        <li
          className="relative"
          onMouseEnter={() => setDropdown("vacation")}
          onMouseLeave={() => setDropdown(null)}
        >
          <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600">
            Vacation <ChevronDown size={16} />
          </div>

          <div
            className={`absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-44 transition-all duration-300 ${
              dropdown === "vacation"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <NavLink to="/vacation/booking" className="block px-4 py-2 hover:bg-gray-100">
              Booking
            </NavLink>
            <NavLink to="/vacation/destination" className="block px-4 py-2 hover:bg-gray-100">
              Destination
            </NavLink>
          </div>
        </li>

        <li><NavLink to="/luxury" className={navItemClass}>Luxury</NavLink></li>
        <li><NavLink to="/about" className={navItemClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={navItemClass}>Contact</NavLink></li>
      </ul>

      {/* ✅ Desktop CTA */}
      <div className="hidden md:flex gap-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-4 py-2 border rounded-lg transition ${
              isActive
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`
          }
        >
          Signup
        </NavLink>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ✅ Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 z-40
        ${open ? "max-h-[600px] py-6" : "max-h-0 overflow-hidden"}
      `}
      >
        <ul className="flex flex-col items-center gap-5 font-medium">

          <NavLink onClick={()=>setOpen(false)} to="/home">Home</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/realestate/buy">Buy</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/realestate/sell">Sell</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/vacation/booking">Booking</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/vacation/destination">Destination</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/luxury">Luxury</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/contact">Contact</NavLink>

        </ul>

        {/* Mobile CTA */}
        <div className="flex flex-col items-center gap-3 mt-6 px-6">
          <NavLink
            to="/login"
            onClick={()=>setOpen(false)}
            className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            onClick={()=>setOpen(false)}
            className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Signup
          </NavLink>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;