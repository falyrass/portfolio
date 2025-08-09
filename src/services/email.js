import emailjs from '@emailjs/browser'

export async function sendContactEmail({ name, email, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS non configuré. Renseignez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY')
  }

  const templateParams = { from_name: name, reply_to: email, message }
  return emailjs.send(serviceId, templateId, templateParams, { publicKey })
}
