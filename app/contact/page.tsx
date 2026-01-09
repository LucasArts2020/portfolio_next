"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    areas: [] as string[],
    budget: "",
    message: "",
  });

  const areas = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Web Development",
    "Illustration",
    "Logo Design",
    "Graphic Design",
  ];

  const budgets = ["$5 - 10k", "$10 - 20k", "$20 - 30k", "$30 - 50k", "+50k"];

  const toggleArea = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Adicione sua lógica de envio aqui
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="text-white">Say Hi!</span>{" "}
          <span className="text-gray-400">and tell me about your idea</span>
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Have a nice works? Reach out and let's chat.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Hello..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Where can I reply?"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Your company or website?"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition"
            />
          </div>

          {/* What's in your mind? */}
          <div>
            <label className="block text-sm font-medium mb-3">
              What's in your mind?<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleArea(area)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    formData.areas.includes(area)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm font-medium mb-3">
              How much your budget range?<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget })}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    formData.budget === budget
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="I want to build some..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none resize-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2"
            >
              Submit →
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
