import React from 'react';

// Testimonials for the carousel
const testimonials = [
  {
    quote: "Kaamigo's collaborative approach has significantly amplified our reach in rural communities. Their solutions are truly transformative.",
    name: 'Dr. Anya Sharma',
    title: 'Director of Programs, Rural Impact Foundation',
  },
  {
    quote: "The investment in Kaamigo has not only yielded promising financial returns but also a profound social impact we are proud to support.",
    name: 'Mr. Vikram Singh',
    title: 'Lead Investor, Global Development Capital',
  },
  {
    quote: "Working with Kaamigo has empowered our SHG members with new skills and sustainable income opportunities. It's been a game-changer.",
    name: 'Mrs. Kavita Devi',
    title: 'SHG Federation Lead, Unity & Progress SHG',
  },
];

const Partners = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-orange-100 text-gray-800 animate-fade-in">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-200 to-orange-200 p-10 text-center rounded-b-3xl shadow mb-10 animate-fade-in">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Partner with Kaamigo: Empower Communities, Drive Growth</h1>
      <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">Join our mission to connect talent with opportunity. Collaborate with us to unlock new markets, empower local communities, and drive business growth.</p>
      <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">Become a Partner</button>
    </div>

    {/* Why Partner With Us */}
    <section className="max-w-6xl mx-auto py-10 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Why Partner With Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">🌐</div>
          <h3 className="font-semibold mb-2 text-purple-700">Expand Your Reach</h3>
          <p className="text-gray-600">Access new markets and connect with a diverse talent pool across India.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">🤝</div>
          <h3 className="font-semibold mb-2 text-purple-700">Collaborate for Impact</h3>
          <p className="text-gray-600">Work with us to empower local communities and drive positive change.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="font-semibold mb-2 text-purple-700">Accelerate Growth</h3>
          <p className="text-gray-600">Leverage our platform to scale your business and achieve your goals faster.</p>
        </div>
      </div>
    </section>

    {/* Go-To-Market Strategies */}
    <section className="max-w-6xl mx-auto py-10 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">Our Go-To-Market Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <div className="text-3xl mb-2">📢</div>
          <h3 className="font-semibold mb-2 text-orange-600">Co-Branded Campaigns</h3>
          <p className="text-gray-600">Launch joint marketing campaigns to maximize visibility and engagement.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-semibold mb-2 text-orange-600">Skill Development</h3>
          <p className="text-gray-600">Empower communities with training and upskilling programs.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <div className="text-3xl mb-2">💡</div>
          <h3 className="font-semibold mb-2 text-orange-600">Innovation Labs</h3>
          <p className="text-gray-600">Collaborate on new solutions to address market needs and challenges.</p>
        </div>
      </div>
    </section>

    {/* Impact & Metrics */}
    <section className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-8 items-center animate-fade-in">
      <div className="flex-1 flex flex-col items-center">
        <div className="w-40 h-40 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <span className="text-5xl font-bold text-blue-700">75%</span>
        </div>
        <div className="text-center text-gray-600">Community Engagement Rate</div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-2 text-purple-700">Our Impact at Scale</h3>
        <p className="text-gray-600 mb-2">We have empowered thousands of freelancers and businesses, driving economic growth and social impact in emerging markets.</p>
        <div className="bg-blue-50 rounded p-4 text-sm text-blue-700 animate-fade-in-slow">"Partnering with Kaamigo helped us reach new audiences and create meaningful change."</div>
      </div>
    </section>

    {/* Why Partner Section */}
    <section className="max-w-6xl mx-auto py-10 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Why Partner with Kaamigo?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">🔒</div>
          <h3 className="font-semibold mb-2 text-purple-700">Trusted Platform</h3>
          <p className="text-gray-600">Secure, reliable, and built for scale.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">📈</div>
          <h3 className="font-semibold mb-2 text-purple-700">Proven Results</h3>
          <p className="text-gray-600">Demonstrated success in driving growth and engagement.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-100 hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <div className="text-3xl mb-2">🤗</div>
          <h3 className="font-semibold mb-2 text-purple-700">Supportive Team</h3>
          <p className="text-gray-600">Dedicated support to ensure partnership success.</p>
        </div>
      </div>
    </section>

    {/* What Our Partners Say - Infinite Carousel */}
    <section className="max-w-6xl mx-auto py-16 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Partners Say</h2>
      <div className="relative overflow-x-hidden">
        <div className="flex w-max animate-carousel gap-8">
          {Array(2).fill(testimonials).flat().map((t, i) => (
            <div key={i} className="min-w-[350px] max-w-xs bg-white rounded-2xl shadow-xl p-6 mx-2 border border-purple-100 flex flex-col justify-between">
              <div className="text-gray-700 mb-4">"{t.quote}"</div>
              <div className="font-bold text-purple-700 text-sm">{t.name}</div>
              <div className="text-xs text-gray-500">{t.title}</div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes carousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-carousel {
            animation: carousel 30s linear infinite;
          }
        `}</style>
      </div>
    </section>

    {/* Platform Features */}
    <section className="max-w-6xl mx-auto py-10 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">What Our Platform Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <h3 className="font-semibold mb-2 text-orange-600">Custom Integrations</h3>
          <p className="text-gray-600">Seamlessly integrate with your existing systems and workflows.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <h3 className="font-semibold mb-2 text-orange-600">Analytics & Insights</h3>
          <p className="text-gray-600">Access real-time data to measure impact and optimize strategies.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-100 hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <h3 className="font-semibold mb-2 text-orange-600">Scalable Solutions</h3>
          <p className="text-gray-600">Grow with confidence using our robust, scalable platform.</p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="max-w-2xl mx-auto py-10 text-center animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Ready to Make a Difference?</h2>
      <p className="mb-6 text-gray-700">Contact us to explore partnership opportunities and start your journey with Kaamigo.</p>
      <form className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 items-center border-2 border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-in">
        <input type="text" placeholder="Your Name" className="border-2 border-purple-100 rounded px-4 py-2 w-full max-w-md focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" />
        <input type="email" placeholder="Your Email" className="border-2 border-purple-100 rounded px-4 py-2 w-full max-w-md focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" />
        <textarea placeholder="How would you like to partner?" className="border-2 border-purple-100 rounded px-4 py-2 w-full max-w-md focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300" rows={3}></textarea>
        <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-8 py-2 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">Submit</button>
      </form>
    </section>
    <footer className="bg-[#181B23] py-10 text-center text-gray-300 mt-16 animate-fade-in">
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

export default Partners; 