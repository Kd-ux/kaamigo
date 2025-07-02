import React from 'react';
import { Navbar } from './landingpage.jsx';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      {/* Header */}
      <div className="bg-blue-100 p-8 rounded-lg shadow mb-8 mt-6 mx-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Let's Connect and Build Together!</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you have a question about our services, need support, or want to explore partnership opportunities, we're here to help. Reach out to us, and let's start a conversation.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 mx-4">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 mb-8">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" placeholder="john@doeexample.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="Inquiry about Kaamigo Pro" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Message</label>
              <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Please describe your query or feedback here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit Message</button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 mb-8 max-w-md">
          <h2 className="text-xl font-semibold mb-4">Direct Contact</h2>
          <div className="mb-4">
            <div className="flex items-center mb-2"><span className="material-icons mr-2">email</span> <span>support@kaamigo.com</span></div>
            <div className="flex items-center mb-2"><span className="material-icons mr-2">call</span> <span>+1 234 567 890</span></div>
            <div className="flex items-center mb-2"><span className="material-icons mr-2">location_on</span> <span>123 Kaamigo Street, Digital City, DC 98765</span></div>
          </div>
          <div>
            <span className="block mb-2 font-medium">Connect With Us</span>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow p-6 mx-4 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="divide-y">
          <details className="py-4">
            <summary className="font-medium cursor-pointer">What is Kaamigo and how does it help freelancers?</summary>
            <p className="mt-2 text-gray-600">Kaamigo is a platform connecting freelancers and clients, especially in Tier 2/3 India, using voice-first and reels-powered features.</p>
          </details>
          <details className="py-4">
            <summary className="font-medium cursor-pointer">What is the difference between the Free Plan and Kaamigo Pro?</summary>
            <p className="mt-2 text-gray-600">Kaamigo Pro offers advanced features and more visibility for freelancers and clients compared to the Free Plan.</p>
          </details>
          <details className="py-4">
            <summary className="font-medium cursor-pointer">How can I partner with Kaamigo?</summary>
            <p className="mt-2 text-gray-600">You can reach out via the contact form or email us directly at support@kaamigo.com for partnership opportunities.</p>
          </details>
          <details className="py-4">
            <summary className="font-medium cursor-pointer">Is my data secure with Kaamigo?</summary>
            <p className="mt-2 text-gray-600">Yes, we take data security seriously and use industry-standard practices to protect your information.</p>
          </details>
          <details className="py-4">
            <summary className="font-medium cursor-pointer">How do I download the Kaamigo app?</summary>
            <p className="mt-2 text-gray-600">You can download the app from the Google Play Store or Apple App Store (coming soon).</p>
          </details>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        <div className="mb-2">Kaamigo</div>
        <div>Stay updated with Kaamigo
          <form className="inline-block ml-2">
            <input type="email" placeholder="Your email address" className="border rounded px-2 py-1 text-sm" />
            <button className="bg-blue-600 text-white px-3 py-1 rounded ml-2 text-sm">Subscribe</button>
          </form>
        </div>
        <div className="mt-2">© 2023 Kaamigo.</div>
      </footer>
    </div>
  );
};

export default ContactUs; 