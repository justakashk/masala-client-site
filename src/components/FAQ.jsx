import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>FAQs</h2>

      <div className="faq-item">
        <div onClick={() => toggle(1)} className="faq-question">
          Is Rasoi Sanjeevani Garam Masala 100% organic?
        </div>
        {open === 1 && (
          <div className="faq-answer">
            Yes, it is made from carefully selected natural ingredients.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div onClick={() => toggle(2)} className="faq-question">
          Is this masala suitable for daily cooking?
        </div>
        {open === 2 && (
          <div className="faq-answer">
            Absolutely! It is designed for everyday healthy cooking.
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;