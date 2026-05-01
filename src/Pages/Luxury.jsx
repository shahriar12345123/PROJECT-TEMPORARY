import React, { useState } from "react";
import { useNavigate } from "react-router";
import data from "../Pages/luxury.json";

const Luxury = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

        <input
          type="text"
          placeholder="Search luxury items..."
          className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat} className="text-black">
              {cat}
            </option>
          ))}
        </select>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            {/* IMAGE SAFE */}
            <img
              src={item.images?.[0] || "https://via.placeholder.com/400"}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">

              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-sm text-gray-400">
                {item.location}
              </p>

              <p className="text-sm mt-2 text-gray-300">
                {item.shortDescription}
              </p>

              <div className="flex justify-between items-center mt-4">

                <span className="text-yellow-400 font-bold">
                  ${item.price}
                </span>

                <button
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
                >
                  View
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Luxury;