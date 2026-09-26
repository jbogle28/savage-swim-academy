import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in <span className="text-sky-600">Touch</span>
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Ready to master the water? Reach out directly or book your lesson using the form below.
          </p>
        </div>

        {/* Media Showcase Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">Connect With Our Academy</h3>
            <p className="text-slate-600 text-sm">Experience the coaching atmosphere at our facility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/instructing.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/swimming-7.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-200">
              <img src="/pictures/kids-treat.png" alt="Kids Treat" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-200">
              <img src="/pictures/kids-treat-2.png" alt="Kids Treat 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Info & Hours */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Academy Information</h2>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-1">Location</strong>
                  <p>UWI Bowl Pool, Jamaica</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Operating Hours</strong>
                  <p>Monday – Sunday: 9:00 AM – 5:00 PM</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Direct Contact</strong>
                  <p>Phone: +1 (876) 555-SWIM</p>
                  <p>Email: info@savageswimjm.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-3xl h-64 flex items-center justify-center border border-slate-300 text-slate-500 font-medium">
              <span>Interactive Map Placeholder (UWI Bowl Pool)</span>
            </div>
          </div>

          {/* Right Column: Inquiry / Booking Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-600 text-sm mb-6">Thank you for reaching out. Our team will contact you shortly to confirm your booking details.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-sky-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-sky-600 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Book a Lesson / Inquiry</h2>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (876) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white">
                    <option>Private 1-on-1 Lessons</option>
                    <option>Group Classes</option>
                    <option>Stroke Refinement & Technique</option>
                    <option>Toddler & Youth Swim Safety</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Notes</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your skill level or scheduling preferences..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}