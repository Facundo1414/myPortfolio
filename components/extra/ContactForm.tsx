'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICE_ID || 'service_mvj7bsk';
    const templateId = process.env.REACT_APP_TEMPLATE_ID || 'template_f52kkx8';
    const userId = process.env.REACT_APP_USER_ID || 'gQFCgGSPgXBUPaknW';

    if (form.current) {
      // Validar campos requeridos
      if (!form.current.checkValidity()) {
        return;
      }

      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSubmitMessage('¡El envío del formulario fue exitoso!');
            setFormSubmitted(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.error('FAILED...', error.text);
            setSubmitMessage('¡Ups! Algo salió mal.');
          }
        );
    } else {
      console.error('Form reference is null.');
    }
  };

  return (
    <div className='ContactForm min-w-full max-w-3xl mx-auto p-4'>
      <h1 className="text-3xl font-bold text-center text-white mb-8">Contactame</h1>
      {!formSubmitted && (
        <form ref={form} onSubmit={sendEmail} noValidate className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <input
                type='text'
                name='user_name'
                required
                maxLength={30}
                className='w-full p-2 border border-gray-400 rounded bg-gray-200 text-black'
                placeholder='Name'
              />
            </div>
            <div>
              <input
                type='email'
                name='user_email'
                required
                className='w-full p-2 border border-gray-400 rounded bg-gray-200 text-black'
                placeholder='Email address'
              />
            </div>
          </div>
          <div>
            <textarea
              name='message'
              required
              rows={3}
              className='w-full p-2 border border-gray-400 rounded bg-gray-200 text-black'
              placeholder='Message'
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
            >
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                Enviar email
              </span>
            </button>
          </div>
        </form>
      )}
      {submitMessage && (
        <div className='text-center mt-4 text-white'>{submitMessage}</div>
      )}
    </div>
  );
};

export default ContactForm;
