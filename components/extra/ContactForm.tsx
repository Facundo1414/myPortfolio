"use client"
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import SocialCard from './SocialCard';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  useEffect(() => {
    if (formSubmitted) {
      // Mostrar mensaje de éxito cuando se envía el formulario
      setSubmitMessage('¡El envío del formulario fue exitoso!');
    }
  }, [formSubmitted]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICE_ID || 'service_mvj7bsk';
    const templateId = process.env.REACT_APP_TEMPLATE_ID || 'template_f52kkx8';
    const userId = process.env.REACT_APP_USER_ID || 'gQFCgGSPgXBUPaknW';

    if (form.current) {
      if (!form.current.checkValidity()) {
        return;
      }

      setSendingMessage(true);

      // Cambiar el texto del botón y deshabilitarlo durante el envío
      const submitButton = form.current.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.innerHTML = 'Enviando...';
      }

      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSubmitMessage('¡El envío del formulario fue exitoso!');
            setFormSubmitted(true);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setSubmitMessage('¡Ups! Algo salió mal.');
          }
        )
        .finally(() => {
          setSendingMessage(false);

          // Restaurar el texto y habilitar el botón después del envío
          if (submitButton) {
            submitButton.innerHTML = 'Enviar email';
          }
        });
    } else {
      console.error('Form reference is null.');
    }
  };

  return (
    <div className="ContactForm min-w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-white">Contactame</h1>
      {!formSubmitted && (
        <div className="w-[400px] bg-[linear-gradient(#212121,#212121)_padding-box,linear-gradient(145deg,transparent_35%,#e81cff,#40c9ff)_border-box] border-2 border-transparent p-8 text-sm font-inherit text-white flex flex-col gap-5 box-border rounded-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} noValidate className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="block mb-1 text- font-semibold text-base text-white">
                Tu Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full p-3.5 rounded-lg text-white bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50"
                placeholder="tuEmail@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="textarea" className="block mb-1 font-semibold text-base text-white">
                Tu mensaje
              </label>
              <textarea
                name="message"
                id="textarea"
                rows={10}
                required
                className="w-full p-3.5 rounded-lg resize-none text-white h-24 border border-[#414141] bg-transparent focus:outline-none focus:border-[#e81cff] font-inherit"
                placeholder="Hola! Mi nombre es..."
              />
            </div>
            <div className="flex justify-center relative">
              <button
                type="submit"
                className="flex items-center justify-center self-start font-inherit text-white font-semibold w-2/5 bg-indigo-600 border border-[#414141] p-3.5 text-sm gap-2 mt-2 cursor-pointer rounded-md transition-transform transform active:scale-95 hover:bg-indigo-800 hover:border-white"
                disabled={sendingMessage}
              >
                Enviar email
              </button>
            </div>
          </form>
        </div>
      )}
      {formSubmitted && (
        <div className="mt-4">
          <SocialCard submitMessage={submitMessage} />
        </div>
      )}
    </div>
  );
};

export default ContactForm;
