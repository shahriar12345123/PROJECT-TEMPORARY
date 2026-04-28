import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-10">

      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Login to continue your SaaS journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Email */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition text-sm sm:text-base"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>

    </div>
  );
};

export default Login;