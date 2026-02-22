import React, { useState } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "Is Rasoi Sanjeevani Garam Masala 100% organic?",
    answer:
      "Yes, our masala is made using carefully selected natural ingredients without harmful additives or preservatives.",
  },
  {
    question: "Is this masala suitable for daily cooking?",
    answer:
      "Absolutely! It is crafted for everyday use to enhance flavor while supporting a healthy lifestyle.",
  },
  {
    question: "Does it help improve immunity?",
    answer:
      "Our blend includes traditional Indian spices known for supporting digestion and overall wellness.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;