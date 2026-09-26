import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Close mobile menu whenever the page changes
    setIsOpen(false);

    // Non-home pages always show the navbar
    if (!isHomePage) {
      setShowNav(true);
      return;
    }

    // Home page starts with navbar hidden
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, location.pathname]);

  const handleNavigation = () => {
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? 'text-sky-400 font-semibold'
        : 'text-white hover:text-sky-400'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-slate-900/95 backdrop-blur-md text-white shadow-lg ${
        showNav || isOpen || !isHomePage
          ? 'translate-y-0'
          : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleNavigation}
          className="flex items-center space-x-3"
        >
          <img
            src="/logo.PNG"
            alt="Savage Swim Academy Logo"
            className="h-10 md:h-12 w-auto"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium items-center">

          <NavLink
            to="/"
            end
            onClick={handleNavigation}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={handleNavigation}
            className={navLinkClass}
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavigation}
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/merchandise"
            onClick={handleNavigation}
            className={navLinkClass}
          >
            Merchandise
          </NavLink>

          <NavLink
            to="/bookings"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold shadow transition ${
                isActive
                  ? 'bg-sky-600 text-white ring-2 ring-sky-300'
                  : 'bg-sky-500 hover:bg-sky-600 text-white'
              }`
            }
          >
            Book Lesson
          </NavLink>

        </div>

        {/* Mobile Hamburger & Quick Book Button */}
        <div className="flex items-center space-x-3 md:hidden">

          <NavLink
            to="/bookings"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow transition ${
                isActive
                  ? 'bg-sky-600 ring-2 ring-sky-300'
                  : 'bg-sky-500 hover:bg-sky-600'
              }`
            }
          >
            Book
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 font-medium">

          <NavLink
            to="/"
            end
            onClick={handleNavigation}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-lg transition ${
                isActive
                  ? 'bg-slate-900 text-sky-400'
                  : 'hover:bg-slate-900 hover:text-sky-400'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-lg transition ${
                isActive
                  ? 'bg-slate-900 text-sky-400'
                  : 'hover:bg-slate-900 hover:text-sky-400'
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-lg transition ${
                isActive
                  ? 'bg-slate-900 text-sky-400'
                  : 'hover:bg-slate-900 hover:text-sky-400'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/merchandise"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-lg transition ${
                isActive
                  ? 'bg-slate-900 text-sky-400'
                  : 'hover:bg-slate-900 hover:text-sky-400'
              }`
            }
          >
            Merchandise
          </NavLink>

          <div className="pt-2">
            <NavLink
              to="/bookings"
              onClick={handleNavigation}
              className={({ isActive }) =>
                `block w-full text-center text-white py-2.5 rounded-xl text-sm font-bold shadow transition ${
                  isActive
                    ? 'bg-sky-600 ring-2 ring-sky-300'
                    : 'bg-sky-500 hover:bg-sky-600'
                }`
              }
            >
              Book a Lesson
            </NavLink>
          </div>

        </div>
      )}
    </nav>
  );
}
