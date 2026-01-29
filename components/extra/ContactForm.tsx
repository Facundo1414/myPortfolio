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
    <div className="ContactForm w-full max-w-lg mx-auto p-4 md:p-6">
      {!formSubmitted && (
        <div className="w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 p-5 md:p-6 text-sm text-white flex flex-col gap-4 rounded-xl">
          <div className="text-center mb-1">
            <h3 className="text-lg font-semibold text-white mb-1">Envíame un mensaje</h3>
            <p className="text-neutral-400 text-xs">Respondo en menos de 24 horas</p>
          </div>
          <form ref={form} onSubmit={sendEmail} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="block font-medium text-sm text-neutral-300">
                Tu Email *
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full p-3 rounded-lg text-white text-sm bg-gray-800/70 border border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500 transition-all"
                placeholder="tuEmail@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="textarea" className="block font-medium text-sm text-neutral-300">
                Tu mensaje *
              </label>
              <textarea
                name="message"
                id="textarea"
                rows={4}
                required
                className="w-full p-3 rounded-lg resize-none text-white text-sm border border-gray-600 bg-gray-800/70 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500 transition-all"
                placeholder="Hola! Me gustaría hablar sobre..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 font-medium text-white text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 p-3 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={sendingMessage}
            >
              {sendingMessage ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
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
