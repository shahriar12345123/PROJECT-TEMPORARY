import React, { useState } from "react";
import { FaEnvelopeOpenText, FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-purple-600/20 border border-purple-500 rounded-2xl flex items-center justify-center">
              <FaEnvelopeOpenText size={26} className="text-purple-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay Ahead with <span className="text-purple-500">SaaS Insights</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Join thousands of founders, developers, and builders receiving weekly insights, growth strategies, and AI-powered updates.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
            <span>🚀 Weekly Updates</span>
            <span>🤖 AI Trends</span>
            <span>📈 Growth Hacks</span>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why Join Our Newsletter?</h2>

            <div className="space-y-4 text-gray-400">
              <p>✔ Real-world SaaS strategies used by startups</p>
              <p>✔ AI tools & automation workflows</p>
              <p>✔ Product growth case studies</p>
              <p>✔ Exclusive founder resources</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
              <p className="text-sm text-gray-400">
                “This newsletter helped me scale my SaaS from $0 to first 1K users.”
              </p>
              <p className="text-purple-400 mt-2 text-sm">— Verified Founder</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
                >
                  Join Free Newsletter
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No spam. Cancel anytime.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4 py-10">
                <FaCheckCircle className="text-green-400 text-4xl mx-auto" />
                <h2 className="text-2xl font-bold">You're In! 🎉</h2>
                <p className="text-gray-400">
                  Welcome aboard. Check your inbox for the first update.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl text-center">
            <h3 className="font-semibold">Founder Insights</h3>
            <p className="text-sm text-gray-400 mt-2">Real startup growth stories</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl text-center">
            <h3 className="font-semibold">AI Automation</h3>
            <p className="text-sm text-gray-400 mt-2">Modern AI workflows</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl text-center">
            <h3 className="font-semibold">Growth System</h3>
            <p className="text-sm text-gray-400 mt-2">Scale SaaS efficiently</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Newsletter;