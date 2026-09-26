import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { label: "Certified Instructors", value: "Expert Coaching" },
    { label: "All Ages Welcome", value: "Toddlers to Adults" },
    { label: "Professional Facilities", value: "Kingston, Jamaica" }
  ];

  const featuredServices = [
    {
      title: "Private 1-on-1 Lessons",
      description:
        "Personalized attention tailored to individual goals, from beginners to advanced racers.",
      link: "/services"
    },
    {
      title: "Group Classes",
      description:
        "Fun, structured classes grouped by age and skill level for collaborative learning.",
      link: "/services"
    },
    {
      title: "Stroke Correction",
      description:
        "Focused training for competitive swimmers looking to optimize efficiency and speed.",
      link: "/services"
    }
  ];

  const swimLocations = [
    {
      name: "UWI Mona Swimming Pool",
      address: "UWI Mona Campus, Kingston 7, Jamaica"
    },
    {
      name: "UWI Visitors' Lodge Pool",
      address: "2 Garden Lane, Mona Campus, St. Andrew, Jamaica"
    },
    {
      name: "Kingston YMCA",
      address: "21 Hope Road, Kingston 10, Jamaica"
    },
    {
      name: "Jamaican National Aquatic Centre",
      address: "Statue Road, Independence Park, Kingston 6, Jamaica"
    }
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-900">

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-screen overflow-hidden flex items-center justify-center m-0 p-0">

        {/* Looped Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Blue Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-sky-950/40 to-slate-950/80"></div>

        {/* Content Centered on Top */}
        <div className="relative z-10 text-center px-4 max-w-xl mx-auto flex flex-col items-center">

          <img
            src="/logo.PNG"
            alt="Savage Swim Academy"
            className="w-72 h-30 md:w-80 md:h-30 object-contain mb-5"
          />

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-1">
            Swim The Savage Way
          </h1>

          <span className="font-extrabold text-lg text-sky-400 mb-2">
            CERTIFIED COACHING
          </span>

          <p className="text-slate-200 text-sm md:text-base mb-8 max-w-md">
            Professional aquatic training located at the UWI Bowl pool, Jamaica.
            Built for all skill levels, from beginners to competitive swimmers.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4 justify-center">
            <Link
              to="/bookings"
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform active:scale-95 text-center"
            >
              Book a Lesson
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-3 px-8 rounded-full transition transform active:scale-95 text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats / Trust Bar */}
      <section className="bg-slate-900 py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-3 gap-2 sm:gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-3 sm:p-6 bg-slate-950/50 rounded-xl sm:rounded-2xl border border-slate-800/80 shadow-sm flex flex-col justify-center"
            >
              <h3 className="text-sky-400 font-extrabold text-xs sm:text-lg mb-1 leading-tight">
                {stat.label}
              </h3>

              <p className="text-slate-300 text-[10px] sm:text-sm font-medium leading-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">

          <div className="text-center mb-12">
            <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full">
              Our Core Programs
            </span>

            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-3">
              Swimming Lessons & Training in Kingston
            </h2>

            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Explore our swimming classes designed to build water safety,
              confidence, technique, and speed for swimmers of different ages
              and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-md border border-slate-200 flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-sky-100 text-sky-600 font-bold rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-lg mb-2 sm:mb-4">
                    0{index + 1}
                  </div>

                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 hidden sm:block">
                    {service.description}
                  </p>
                </div>

                <Link
                  to={service.link}
                  className="text-sky-600 hover:text-sky-700 text-[10px] sm:text-sm font-bold inline-flex items-center"
                >
                  <span className="hidden sm:inline">
                    Learn More &rarr;
                  </span>

                  <span className="inline sm:hidden">
                    More &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Academy in Action */}
          <div className="mb-16">

            <div className="text-center mb-10">
              <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full">
                Inside the Academy
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-3">
                Academy in Action
              </h3>

              <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                See what swimming lessons and training look like at Savage Swim
                Academy in Kingston, Jamaica.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-8">

              {/* Swimming Lesson Video */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <div className="grid grid-cols-2 items-stretch">

                  <div className="relative min-h-[180px] sm:min-h-[280px] bg-slate-900">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source
                        src="/videos/swimming-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className="flex flex-col justify-center p-4 sm:p-8 md:p-10">
                    <span className="text-sky-600 font-bold uppercase tracking-wider text-[9px] sm:text-xs mb-2 sm:mb-3">
                      Swimming Lessons
                    </span>

                    <h4 className="text-sm sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-4 leading-tight">
                      Learn to Swim With Confidence
                    </h4>

                    <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-relaxed">
                      Build essential swimming skills through structured
                      instruction designed for beginners and developing
                      swimmers. Our lessons focus on water confidence, safety,
                      technique, and steady progression.
                    </p>

                    <Link
                      to="/services"
                      className="mt-3 sm:mt-6 text-sky-600 hover:text-sky-700 font-bold text-[10px] sm:text-sm"
                    >
                      Explore Swimming Lessons &rarr;
                    </Link>
                  </div>

                </div>
              </div>

              {/* Treading Video */}
              <div className="bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                <div className="grid grid-cols-2 items-stretch">

                  <div className="flex flex-col justify-center p-4 sm:p-8 md:p-10 text-white order-1">
                    <span className="text-sky-400 font-bold uppercase tracking-wider text-[9px] sm:text-xs mb-2 sm:mb-3">
                      Water Skills
                    </span>

                    <h4 className="text-sm sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-4 leading-tight">
                      Build Water Confidence
                    </h4>

                    <p className="text-[10px] sm:text-sm md:text-base text-slate-300 leading-relaxed">
                      Treading water is an important survival and swimming
                      skill. Our instructors help swimmers develop control,
                      endurance, breathing, and confidence in the water.
                    </p>

                    <Link
                      to="/services"
                      className="mt-3 sm:mt-6 text-sky-400 hover:text-sky-300 font-bold text-[10px] sm:text-sm"
                    >
                      View Our Programs &rarr;
                    </Link>
                  </div>

                  <div className="relative min-h-[180px] sm:min-h-[280px] bg-black order-2">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source
                        src="/videos/Treading.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                </div>
              </div>

              {/* Adult Swimming */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <div className="grid grid-cols-2 items-stretch">

                  <div className="relative min-h-[180px] sm:min-h-[280px] bg-slate-200">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source
                        src="/pictures/adult-swim.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className="flex flex-col justify-center p-4 sm:p-8 md:p-10">
                    <span className="text-sky-600 font-bold uppercase tracking-wider text-[9px] sm:text-xs mb-2 sm:mb-3">
                      Adults
                    </span>

                    <h4 className="text-sm sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-4 leading-tight">
                      Swimming Classes for Adults
                    </h4>

                    <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-relaxed">
                      Whether you're learning to swim for the first time,
                      returning to the water, or improving your technique,
                      Savage Swim Academy provides supportive instruction
                      designed around your individual goals.
                    </p>

                    <Link
                      to="/services"
                      className="mt-3 sm:mt-6 text-sky-600 hover:text-sky-700 font-bold text-[10px] sm:text-sm"
                    >
                      Learn More &rarr;
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full shadow transition text-sm"
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* Swimming Locations */}
      <section className="bg-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-10">
            <span className="text-sky-100 font-bold uppercase tracking-wider text-xs">
              Where We Swim
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-3">
              Swimming Lesson Locations in Kingston
            </h2>

            <p className="text-sky-100 text-sm max-w-2xl mx-auto">
              Savage Swim Academy provides swimming instruction at several
              convenient aquatic facilities in Kingston and St. Andrew,
              Jamaica.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {swimLocations.map((location, index) => (
              <div
                key={index}
                className="bg-sky-700/60 backdrop-blur-md rounded-xl sm:rounded-2xl border border-sky-400/30 p-4 sm:p-6"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-sky-100 font-extrabold text-xs sm:text-sm">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight mb-2">
                  {location.name}
                </h3>

                <p className="text-[10px] sm:text-xs text-sky-100 leading-relaxed">
                  {location.address}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action with Media */}
      <section className="bg-slate-950 text-white px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-2 items-stretch rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">

            {/* Kids Swim Image */}
            <div className="relative min-h-[240px] sm:min-h-[360px] bg-slate-900">
              <img
                src="/pictures/kids-swim-day.png"
                alt="Children learning swimming skills at Savage Swim Academy in Kingston Jamaica"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* CTA Content */}
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">

              <span className="text-sky-400 font-bold uppercase tracking-wider text-[9px] sm:text-xs mb-2 sm:mb-3">
                Start Your Journey
              </span>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-5 leading-tight">
                Ready to Learn to Swim?
              </h2>

              <p className="text-slate-400 text-[10px] sm:text-sm md:text-base leading-relaxed max-w-lg">
                Whether you're looking for swimming lessons for yourself,
                your child, or your family, Savage Swim Academy offers
                structured swim classes in Kingston, Jamaica, for different
                ages and skill levels.
              </p>

              <div className="pt-4 sm:pt-7">
                <Link
                  to="/bookings"
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 sm:py-4 px-5 sm:px-10 rounded-full shadow-lg transition transform active:scale-95 text-[10px] sm:text-base"
                >
                  Book Your Lesson
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
