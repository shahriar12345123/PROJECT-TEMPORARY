import React from 'react';
import { useParams, useNavigate } from "react-router";
import data from "../Pages/luxury.json";

const LuxuryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = data.find((p) => p.id === id);

  if (!item) {
    return (
      <div className="text-white p-10">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/*  BACK BUTTON (TOP LEFT) */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* IMAGE */}
      <img
        src={item.images?.[0]}
        alt={item.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* CONTENT */}
      <div className="mt-6">

        <h1 className="text-3xl font-bold">{item.title}</h1>

        <p className="text-gray-400 mt-2">{item.location}</p>

        <p className="mt-4 text-gray-300">
          {item.description}
        </p>

        <div className="mt-6 text-yellow-400 text-2xl font-bold">
          ${item.price}
        </div>

        {/* BOOK BUTTON */}
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Book Now
        </button>

      </div>
    </div>
  );
};

export default LuxuryDetails;