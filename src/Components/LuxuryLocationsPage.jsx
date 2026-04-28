import { useState } from "react";

const propertyTypes = [
    "Hotels",
    "Houses",
    "Islands",
    "Land",
    "Mansions",
    "Penthouses",
    "Residential",
    "Villas",
];

export default function LuxuryLocationsPage() {
    const [search, setSearch] = useState("");

    return (
        <section className="min-h-screen bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* 🔝 Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Find Your Ideal Luxury Property
                </h1>

                <p className="text-gray-400 max-w-2xl mb-12">
                    Explore exclusive penthouses, villas, castles and private islands
                    across the world's most prestigious destinations.
                </p>

                {/* 🏠 Property Types */}
                <h2 className="text-2xl font-semibold mb-6">Property Types</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {propertyTypes.map((type, i) => (
                        <div
                            key={i}
                            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition cursor-pointer text-center"
                        >
                            {type}
                        </div>
                    ))}
                </div>

               

                {/* 📍 Empty State */}
                <div className="text-gray-500 text-center mt-10">
                    No locations available
                </div>

            </div>
        </section>
    );
}