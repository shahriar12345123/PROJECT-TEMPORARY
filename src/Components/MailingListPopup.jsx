import React from "react";
import { X } from "lucide-react";

export default function MailingListPopup({ onClose }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // চাইলে এখানে API call করতে পারো

    onClose(); // popup বন্ধ
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      
      {/* Popup Container */}
      <div className="relative w-full max-w-full bg-[#e9e2d8] rounded-t-[300px] rounded-b-2xl pt-16 pb-10 text-center shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          <X size={18} className="text-gray-600" />
        </button>

        {/* Logo */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-wide text-[#2f4f5f]">
            SERV
          </h1>
          <p className="text-[10px] tracking-[3px] text-gray-500 mt-1">
            INTERNATIONAL
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2f4f5f] mb-3">
          Join Our Mailing List!
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
          Updates, stories from the field, and ways to pray and get involved—delivered straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full max-w-md px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full max-w-md bg-[#e6792e] hover:bg-[#d96d25] text-white font-semibold py-3 rounded"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}