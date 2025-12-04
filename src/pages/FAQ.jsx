import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I create an account?",
    a: "Simply click on the Sign Up button in the navigation bar and fill out the required information to get started.",
  },
  {
    q: "Is my personal data secure?",
    a: "Yes! We use industry-standard encryption and security measures to protect your personal information.",
  },
  {
    q: "How can I contact support?",
    a: "You can contact our support team through the Support page, available in the navigation bar.",
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds are available for eligible purchases. Visit our Refund Policy page for detailed information.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-800 mb-10 max-w-xl mx-auto">
          Find answers to the most common questions our users ask.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-indigo-50 shadow-md hover:shadow-lg transition rounded-xl p-5 border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.q}
                </span>

                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Section */}
              <div
                className={`mt-3 text-gray-700 leading-relaxed transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
