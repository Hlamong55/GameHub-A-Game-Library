import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, HelpCircle, Shield, Wallet, User } from "lucide-react";

const Support = () => {
  const categories = [
    {
      title: "Account Support",
      desc: "Recover account, reset password, login issues.",
      icon: <User className="w-6 h-6 text-purple-600" />,
      link: "/support/account",
    },
    {
      title: "Game Issues",
      desc: "Bug reports, game crashes, lag or performance issues.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      link: "/support/game",
    },
    {
      title: "Payments & Billing",
      desc: "Refunds, purchase problems, subscription issues.",
      icon: <Wallet className="w-6 h-6 text-green-600" />,
      link: "/support/billing",
    },
    {
      title: "General Help",
      desc: "Find answers to common questions (FAQ).",
      icon: <HelpCircle className="w-6 h-6 text-orange-600" />,
      link: "/support/faq",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 pb-20">
      {/* HERO SECTION */}
      <div className=" py-16 text-center">
        <h1 className="text-5xl font-extrabold">Support Center</h1>
        <p className="text-lg font-semibold mt-3 opacity-90 max-w-2xl mx-auto">
          We’re here to help! Get assistance with account issues, gameplay problems, billing, and more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">
        
        {/* SUPPORT CATEGORIES */}
        <h2 className="text-2xl font-bold mb-6">Support Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Link
              to={cat.link}
              key={idx}
              className="bg-indigo-50 shadow-md p-6 rounded-xl border hover:border-purple-500 hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {cat.icon}
                <div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CREATE TICKET */}
        <div className="bg-indigo-50 shadow-md rounded-xl p-8 mt-12 border">
          <h2 className="text-2xl font-bold mb-4">Create Support Ticket</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Submit a ticket and our team will respond as soon as possible.
          </p>

          <Link
            to="/support/ticket"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Submit Ticket
          </Link>
        </div>

        {/* CONTACT BOX */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mt-12">
          <h3 className="text-xl font-bold ">Need urgent support?</h3>
          <p className=" mt-2">
            Our support team is available 24/7. Reach out anytime!
          </p>

          <div className="mt-4 space-y-2 text-purple-900">
            <p><strong>Email:</strong> support@gamehub.com</p>
            <p><strong>Live Chat:</strong> 24/7 Gamehub-Bot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
