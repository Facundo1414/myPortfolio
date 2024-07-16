import React from 'react';
import ContactForm from './extra/ContactForm';

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="relative h-full rounded-2xl overflow-hidden mt-14 w-2/4"
      style={{
        boxShadow:
          "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
      }}
    >
      <div className="max-w-3xl mx-auto p-4 py-12 relative z-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
