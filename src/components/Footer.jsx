import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Footer() {
  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? 'text-sky-400 font-semibold'
        : 'text-slate-400 hover:text-sky-400'
    }`;

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Academy */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3 text-sky-400">
            Savage Swim Academy
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            Professional swimming instruction focused on water safety,
            confidence, technique, and long-term development.
          </p>

          <div className="space-y-1 text-sm">
            <p>
              <span className="text-slate-300 font-medium">Phone:</span>{' '}
              <a
                href="tel:+18764884917"
                className="hover:text-sky-400 transition"
              >
                1 (876) 488-4917
              </a>
            </p>

            <p>
              <span className="text-slate-300 font-medium">Email:</span>{' '}
              <a
                href="mailto:savageswimacademy876@gmail.com"
                className="hover:text-sky-400 transition break-all"
              >
                savageswimacademy876@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Pool Locations
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-slate-300 font-medium">
                UWI Mona Swimming Pool
              </p>
              <p>
                UWI Mona Campus, Kingston 7, Jamaica
              </p>
            </div>

            <div>
              <p className="text-slate-300 font-medium">
                UWI Visitors' Lodge Pool
              </p>
              <p>
                2 Garden Lane, Mona Campus, St. Andrew, Jamaica
              </p>
            </div>

            <div>
              <p className="text-slate-300 font-medium">
                Kingston YMCA
              </p>
              <p>
                21 Hope Road, Kingston 10, Jamaica
              </p>
            </div>

            <div>
              <p className="text-slate-300 font-medium">
                Jamaican National Aquatic Centre
              </p>
              <p>
                Statue Road, Independence Park, Kingston 6, Jamaica
              </p>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Operating Hours
          </h3>

          <p className="text-sm">
            Monday – Sunday
          </p>

          <p className="text-sm text-sky-400 font-medium mb-5">
            9:00 AM – 5:00 PM
          </p>

          <h3 className="text-white font-bold text-lg mb-3">
            Contact
          </h3>

          <p className="text-sm">
            <a
              href="tel:+18764884917"
              className="hover:text-sky-400 transition"
            >
              1 (876) 488-4917
            </a>
          </p>

          <p className="text-sm break-all">
            <a
              href="mailto:savageswimacademy876@gmail.com"
              className="hover:text-sky-400 transition"
            >
              savageswimacademy876@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                end
                onClick={handleNavigation}
                className={linkClass}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={handleNavigation}
                className={linkClass}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={handleNavigation}
                className={linkClass}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/merchandise"
                onClick={handleNavigation}
                className={linkClass}
              >
                Merchandise
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/bookings"
                onClick={handleNavigation}
                className={linkClass}
              >
                Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 text-center text-xs">
        &copy; {new Date().getFullYear()} Savage Swim Academy. All rights reserved.
      </div>
    </footer>
  );
}
