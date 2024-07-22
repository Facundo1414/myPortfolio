import React from 'react';
import ContactForm from './extra/ContactForm';

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="relative h-full rounded-2xl overflow-hidden mt-14 w-2/4"

    >
      <div className="max-w-3xl mx-auto p-4 py-12 relative z-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
