import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const faqs = [
  {
    q: 'What is Kaamigo and how does it help freelancers?',
    a: 'Kaamigo is a platform connecting freelancers and clients, especially in Tier 2/3 India, using voice-first and reels-powered features.'
  },
  {
    q: 'What is the difference between Free Plan and Kaamigo Pro?',
    a: 'Kaamigo Pro offers advanced features and more visibility for freelancers and clients compared to the Free Plan.'
  },
  {
    q: 'How can I partner with Kaamigo?',
    a: 'You can reach out via the contact form or email us directly at support@kaamigo.com for partnership opportunities.'
  },
  {
    q: 'Is my data secure with Kaamigo?',
    a: 'Yes, we take data security seriously and use industry-standard practices to protect your information.'
  },
  {
    q: 'How do I download the Kaamigo app?',
    a: 'You can download the app from the Google Play Store or Apple App Store (coming soon).'
  },
  {
    q: 'What makes Kaamigo different from other platforms?',
    a: 'Kaamigo focuses on voice-first, reels-powered connections and Tier 2/3 India, making it unique.'
  }
];

const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="min-h-screen bg-[#fdf6f6] text-gray-800">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-orange-500 py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Let's Connect & Build Together!</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">Whether you have questions about our services, need support, or want to explore partnership opportunities, we're here to help. Reach out to us, and let's start a conversation.</p>
      </div>

      {/* Main Card Section */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-8 px-4 z-10 relative min-h-[500px]">
        {/* Contact Form Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-between border border-purple-100 animate-fade-in min-h-[500px]">
          <div className="flex items-center mb-6 mt-2">
            <span className="text-3xl mr-2">
              {/* Colorful Email icon */}
              <FaEnvelope aria-label="Email" title="Email" />
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
          </div>
          <form className="space-y-4 flex-grow mt-2">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Your Name</label>
                <input type="text" className="w-full border-2 border-purple-100 rounded-lg px-3 py-2 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" placeholder="John Doe" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Your Email</label>
                <input type="email" className="w-full border-2 border-purple-100 rounded-lg px-3 py-2 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input type="text" className="w-full border-2 border-purple-100 rounded-lg px-3 py-2 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" placeholder="Inquiry about Kaamigo Pro" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Message</label>
              <textarea className="w-full border-2 border-purple-100 rounded-lg px-3 py-2 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" rows="4" placeholder="Please describe your query or feedback here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-2">
              {/* Message icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4.28 1.07a1 1 0 01-1.22-1.22l1.07-4.28A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 border border-orange-100 flex flex-col gap-6 animate-fade-in min-h-[500px]">
          <div className="flex items-center mb-4 mt-2">
            <span className="text-3xl mr-2">
              {/* Colorful Phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8"><rect width="24" height="24" rx="6" fill="#ff914d"/><path d="M7 17c2.5-1.5 4.5-3.5 6-6l2-2c.5-.5 1.5-.5 2 0l2 2c.5.5.5 1.5 0 2l-2 2c-1.5 1.5-3.5 3.5-6 6l-2-2c-.5-.5-.5-1.5 0-2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
          </div>
          <div className="space-y-4 flex-grow mt-2">
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg p-4 min-h-[70px]">
              <span className="text-2xl mr-3">
                {/* Colorful Email icon */}
                <FaEnvelope aria-label="Email" title="Email" />
              </span>
              <div>
                <div className="font-semibold text-sm text-purple-700">Email</div>
                <a href="mailto:support@kaamigo.com" className="text-purple-600 hover:underline text-base">support@kaamigo.com</a>
              </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-4 min-h-[70px]">
              <span className="text-2xl mr-3">
                {/* Colorful Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><rect width="24" height="24" rx="6" fill="#ff914d"/><path d="M7 17c2.5-1.5 4.5-3.5 6-6l2-2c.5-.5 1.5-.5 2 0l2 2c.5.5.5 1.5 0 2l-2 2c-1.5 1.5-3.5 3.5-6 6l-2-2c-.5-.5-.5-1.5 0-2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-semibold text-sm text-orange-600">Phone</div>
                <a href="tel:+1234567890" className="text-orange-500 hover:underline text-base">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg p-4 min-h-[70px]">
              <span className="text-2xl mr-3">
                {/* Colorful Location icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><rect width="24" height="24" rx="6" fill="#ff4d6d"/><path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v2a2 2 0 002 2h12a2 2 0 002-2v-2c0-2.761-3.582-5-8-5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-semibold text-sm text-purple-700">Office</div>
                <div className="text-gray-700 text-base">123 Kaamigo Street, Digital City, DC 98765</div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.93.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C18.36 20.06 22 16.41 22 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg>
              Connect With Us
            </div>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-7 h-7" viewBox="0 0 24 24"><path fill="#1877F3" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.995 10.125 11.854v-8.385H7.078V12.07h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.263h3.328l-.532 3.472h-2.796v8.385C19.612 23.068 24 18.092 24 12.073z"/><path fill="#fff" d="M16.671 15.542l.532-3.472h-3.328v-2.263c0-.948.462-1.874 1.953-1.874h1.513V5.98s-1.374-.235-2.686-.235c-2.741 0-4.533 1.661-4.533 4.668v2.657H7.078v3.399h3.047v8.385a12.07 12.07 0 002.875 0v-8.385h2.796z"/></svg>
              </a>
              <a href="https://www.instagram.com/ntsnihonglobal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-7 h-7" viewBox="0 0 24 24"><radialGradient id="insta-gradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fdf497"/><stop offset="60%" stopColor="#fd5949"/><stop offset="90%" stopColor="#d6249f"/><stop offset="100%" stopColor="#285AEB"/></radialGradient><path fill="url(#insta-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 0 1 7.838 12 4.162 4.162 0 0 1 12 7.838 4.162 4.162 0 0 1 16.162 12 4.162 4.162 0 0 1 12 16.162zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
              </a>
              <a href="https://x.com/ntsnihon" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg className="w-7 h-7" viewBox="0 0 24 24"><path fill="#000" d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324C23.178 24 24 23.178 24 22.162V1.838C24 .822 23.178 0 22.162 0zM7.95 20.452H4.548V9.548H7.95v10.904zm-1.701-12.41c-1.09 0-1.97-.88-1.97-1.97 0-1.09.88-1.97 1.97-1.97 1.09 0 1.97.88 1.97 1.97 0 1.09-.88 1.97-1.97 1.97zm14.201 12.41h-3.401v-5.604c0-1.336-.025-3.057-1.863-3.057-1.864 0-2.15 1.454-2.15 2.957v5.704h-3.401V9.548h3.267v1.493h.047c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.949z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/nts-nihon-global/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-7 h-7" viewBox="0 0 24 24"><path fill="#0077B5" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-16 px-4 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 mb-8">Find answers to common questions about Kaamigo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-r from-purple-50 to-orange-50 p-4 shadow hover:shadow-lg border border-purple-100 transition-all duration-300">
              <button
                type="button"
                className="w-full text-left font-semibold flex items-center text-lg text-purple-700 focus:outline-none transition-colors duration-300"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="mr-2 text-xl">▶</span>
                {faq.q}
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <p className="mt-2 text-gray-700 animate-fade-in-slow">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#181B23] py-10 text-center text-gray-300 mt-16">
        <div className="text-3xl font-bold text-purple-400 mb-2">Kaamigo</div>
        <div className="mb-2">Connecting talent with opportunities through voice-first innovation</div>
        <div className="text-xs text-gray-500">© 2024 Kaamigo. All rights reserved.</div>
      </footer>
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-slow { animation: fadeIn 1.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default ContactUs; 