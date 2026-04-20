import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        Project temporary
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/features" className="hover:text-blue-600">Features</Link></li>
        <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
        <li><Link to="/integrations" className="hover:text-blue-600">Integrations</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex gap-4">
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

    </nav>
  );
};

export default Navbar;