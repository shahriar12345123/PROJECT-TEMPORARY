import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6 py-4 flex justify-between items-center relative">

      {/* 🔷 Logo */}
      <div className="text-xl md:text-2xl font-bold text-blue-600">
        Project temporary
      </div>

      {/* 🖥️ Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/realestate" className="hover:text-blue-600">Real Estate</Link></li>
        <li><Link to="/vacation" className="hover:text-blue-600">Vacation</Link></li>
        <li><Link to="/luxury" className="hover:text-blue-600">Luxury </Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>

      {/* 🖥️ Desktop CTA */}
      <div className="hidden md:flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Signup
        </Link>
      </div>

      {/* 📱 Mobile Menu Button */}
      <button
        className="md:hidden z-30"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* 📱 Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 z-20
        ${open ? "max-h-[500px] py-6" : "max-h-0 overflow-hidden"}
      `}>

        <ul className="flex flex-col items-center gap-5 text-gray-700 font-medium">
          <li><Link onClick={() => setOpen(false)} to="/home">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/realestate">Real Estate</Link></li>

          <li><Link onClick={() => setOpen(false)} to="/vacation">Vacation</Link></li>  
          <li><Link onClick={() => setOpen(false)} to="/luxury">Luxury</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
        </ul>

        {/* CTA Mobile */}
        <div className="flex flex-col items-center gap-3 mt-6 px-6">
          <Link
            onClick={() => setOpen(false)}
            to="/login"
            className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/signup"
            className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Signup
          </Link>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;