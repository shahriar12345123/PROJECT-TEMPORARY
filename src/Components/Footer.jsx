import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                p
              </div>
              <span className="text-xl font-bold text-white">PROJECT TEMPORARY</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering developers with next-generation SaaS tools. Build faster, scale smarter, deploy globally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">

              <a href="#" className="text-[#1DA1F2] hover:scale-110 transition">
                <FaTwitter size={20} />
              </a>

              <a href="#" className="text-[#1877F2] hover:scale-110 transition">
                <FaFacebook size={20} />
              </a>

              <a href="#" className="text-[#E4405F] hover:scale-110 transition">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="text-white hover:text-gray-400 hover:scale-110 transition">
                <FaGithub size={20} />
              </a>

              <a href="#" className="text-[#0A66C2] hover:scale-110 transition">
                <FaLinkedin size={20} />
              </a>

              <a href="#" className="text-[#5865F2] hover:scale-110 transition">
                <FaDiscord size={20} />
              </a>

            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="hover:text-white transition" to="/features">Features</Link>
              <Link className="hover:text-white transition" to="/integrations">Integrations</Link>
              <Link className="hover:text-white transition" to="/pricing">Pricing</Link>
              <Link className="hover:text-white transition" to="/indus">Industries</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="hover:text-white transition" to="/about">About</Link>
              <Link className="hover:text-white transition" to="/contact">Contact</Link>
              <Link className="hover:text-white transition" to="/newsletter">Newsletter

              </Link>
              <a className="hover:text-white transition" href="#">Careers</a>
            </div>
          </div>

          {/* Get More Updates Form */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get for more updates</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected with our latest insights and news.
            </p>

            <div className="space-y-3">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none text-sm text-white"
              />

              {/* Phone Number with Country Code */}
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none text-sm text-white"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none text-sm text-white"
              />

              {/* Message Box */}
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none text-sm text-white resize-none"
              ></textarea>

              <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-md text-white font-medium">
                Submit Request
              </button>
            </div>
          </div>


          {/* Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">

            <p>© {new Date().getFullYear()} SaaSNode. All rights reserved.</p>

            <div className="flex gap-5">
              <a className="hover:text-white transition">Privacy</a>
              <a className="hover:text-white transition">Terms</a>
              <a className="hover:text-white transition">Cookies</a>
            </div>

          </div>

        </div>
        </div>
    </footer>
  );
};

export default Footer;