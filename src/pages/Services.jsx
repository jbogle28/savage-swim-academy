import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
const offerings = [
{
title: "Savage Splashers (Kids)",
description:
"Personalized swimming lessons for children designed to build water confidence, essential water safety skills, proper swimming technique, and swimming independence.",
tag: "Kids",
mediaType: "picture",
mediaSrc: "/pictures/baby-swimming.png",
alt: "Children's swimming lessons and learn-to-swim training in Kingston Jamaica",
},
{
title: "Savage Aquatic Warriors (Adults)",
description:
"Customized adult swimming lessons for beginners and developing swimmers who want to overcome water hesitation, improve swimming technique, and become more confident in the water.",
tag: "Adults",
mediaType: "picture",
mediaSrc: "/pictures/adult-swim-class.png",
alt: "Adult swimming class and swimming lessons in Kingston Jamaica",
},
];

return ( <div className="pb-20 min-h-screen bg-slate-50 text-slate-900">

```
  {/* =========================================================
      HERO SECTION
  ========================================================= */}
  <section className="relative w-full h-[55vh] min-h-[400px] md:h-[650px] overflow-hidden">

    <img
      src="/pictures/services-hero.png"
      alt="Savage Swim Academy 876 swimming lessons and aquatic training in Kingston Jamaica"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-slate-950/45" />

    {/* Hero content */}
    <div className="relative z-10 h-full flex items-center justify-center px-4 pt-16 sm:pt-0 text-center">
      <div className="max-w-4xl text-white">

        <span className="inline-block bg-sky-500/90 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm px-4 py-2 rounded-full mb-4">
          Savage Swim Academy 876
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-5">
          Swimming Lessons &amp;
          <span className="block text-sky-300">
            Programs
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
          Learn to swim with Savage Swim Academy 876 through personalized
          swimming lessons and structured swim programs for children and
          adults in Kingston, Jamaica. All swimming lessons and sessions
          are available by appointment only.
        </p>

      </div>
    </div>
  </section>


  {/* =========================================================
      THE SAVAGE WAY TO LEARN TO SWIM
  ========================================================= */}
  <section className="max-w-4xl mx-auto px-3 sm:px-4 pt-16 md:pt-20 mb-16 md:mb-20">

    <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm border border-slate-200">

      {/* MOBILE LAYOUT */}
      <div className="block md:hidden">

        {/* Floating Video */}
        <div className="float-left w-[43%] mr-4 mb-2 rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-[4/3]">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/swimming-4.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Text wraps around video */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
          The Savage Way to Learn to Swim
        </h2>

        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          At Savage Swim Academy 876, we understand that every swimmer
          learns differently, regardless of age or experience level.
          Our swimming lessons in Kingston, Jamaica begin with one-on-one
          instruction, giving each swimmer personalized attention while
          allowing our coaches to focus on individual needs, comfort
          level, goals, and pace of learning.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Our learn-to-swim sessions are designed to build water
          confidence, proper swimming techniques, water safety skills,
          and independence. Swimmers continue with individual instruction
          until they have developed the skills and confidence needed to
          safely manage themselves in the water.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Once a swimmer reaches the appropriate level, we may recommend
          transitioning into group swimming classes. This helps swimmers
          build confidence around others, stay motivated, and continue
          developing their skills in a fun environment.
        </p>

        <div className="clear-both" />

      </div>


      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">

        {/* Text */}
        <div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            The Savage Way to Learn to Swim
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
            At Savage Swim Academy 876, we understand that every swimmer
            learns differently, regardless of age or experience level.
            Our swimming lessons in Kingston, Jamaica begin with one-on-one
            instruction, giving each swimmer personalized attention while
            allowing our coaches to focus on individual needs, comfort
            level, goals, and pace of learning.
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
            Our learn-to-swim sessions are designed to build water
            confidence, proper swimming techniques, water safety skills,
            and independence. Swimmers continue with individual instruction
            until they have developed the skills and confidence needed to
            safely manage themselves in the water.
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Once a swimmer reaches the appropriate level, we may recommend
            transitioning into group swimming classes. This helps swimmers
            build confidence around others, stay motivated, and continue
            developing their skills in a fun environment.
          </p>

        </div>


        {/* Video */}
        <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-900">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/swimming-4.mp4" type="video/mp4" />
          </video>

        </div>

      </div>

    </div>
  </section>


  {/* =========================================================
      PROGRAMS
  ========================================================= */}
  <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

    <div className="text-center mb-7 md:mb-10">

      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
        Swim Lessons for Kids &amp; Adults
      </h2>

      <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-4">
        Whether you are looking for children's swimming lessons, adult
        swimming classes, or beginner learn-to-swim instruction in Kingston,
        our programs are designed around each swimmer's individual goals.
      </p>

      <p className="inline-flex bg-sky-50 text-sky-700 border border-sky-100 px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
        All lessons are by appointment only.
      </p>

    </div>


    {/* TWO COLUMNS ON MOBILE */}
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8">

      {offerings.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between"
        >

          <div>

            {/* Media */}
            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] md:aspect-[4/3] mb-3 md:mb-5 bg-slate-100">

              {item.mediaType === "video" ? (

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={item.mediaSrc} type="video/mp4" />
                </video>

              ) : (

                <img
                  src={item.mediaSrc}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

              )}

            </div>

            <div className="inline-block bg-sky-100 text-sky-700 text-[9px] sm:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full mb-2 md:mb-3">
              {item.tag}
            </div>

            <h3 className="text-sm sm:text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-3 leading-tight">
              {item.title}
            </h3>

            <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              {item.description}
            </p>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white text-center font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl transition"
          >
            Book Lesson
          </Link>

        </div>

      ))}

    </div>
  </section>


  {/* =========================================================
      PARENTAL WATER SAFETY PROGRAM
  ========================================================= */}
  <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

    <div className="bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-800">

      <div className="grid md:grid-cols-2 items-stretch">

        {/* Program introduction */}
        <div className="p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col justify-center">

          <span className="inline-flex self-start bg-sky-500/15 text-sky-400 border border-sky-400/20 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            Parent &amp; Caregiver Education
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Savage Swim Parental Water Safety Program
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            The Savage Swim Parental Water Safety Program is designed to
            empower parents and caregivers with the knowledge, awareness,
            and practical skills needed to help keep children safe around
            water.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            At Savage Swim Academy 876, we believe water safety starts with
            education. Our goal is to give parents the tools they need to
            create safer experiences for their families in and around the
            water.
          </p>

        </div>


        {/* Program focus */}
        <div className="bg-slate-950/70 p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col justify-center">

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5">
            What the Program Covers
          </h3>

          <div className="space-y-3 sm:space-y-4">

            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center text-xs font-extrabold">
                01
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Active supervision and responsible water awareness.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center text-xs font-extrabold">
                02
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Identifying common water-related risks and hazards.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center text-xs font-extrabold">
                03
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Basic water safety practices for pools and aquatic
                environments.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center text-xs font-extrabold">
                04
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Appropriate responses to water-related emergencies.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center text-xs font-extrabold">
                05
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Building confidence and awareness around water.
              </p>
            </div>

          </div>

          <Link
            to="/bookings"
            className="mt-7 inline-flex justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm md:text-base py-3 px-6 rounded-xl transition shadow-lg"
          >
            Inquire About the Program
          </Link>

        </div>

      </div>

    </div>
  </section>


  {/* =========================================================
      PRICING / PACKAGES
  ========================================================= */}
  <div className="max-w-7xl mx-auto px-3 sm:px-4 space-y-14 md:space-y-16">

    {/* =======================================================
        STANDARD RATES
    ======================================================= */}
    <section>

      <div className="text-center mb-7 md:mb-10">

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
          Standard Swim Rates
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm">
          Individual swimming lessons for customers paying per session.
          All prices are in Jamaican Dollars (JMD).
        </p>

        <p className="text-sky-600 text-xs sm:text-sm font-bold mt-2">
          Appointments only.
        </p>

      </div>


      {/* TWO COLUMNS ON MOBILE */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8 max-w-4xl mx-auto">

        {/* Kids Rate */}
        <div className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-3 md:mb-5 bg-slate-900">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/swimming-6.mp4" type="video/mp4" />
              </video>

            </div>

            <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 mb-2 leading-tight">
              Savage Splashers (Kids)
            </h3>

            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Individual swimming lesson for children focused on
              confidence, water safety, and foundational swimming skills.
            </p>

            <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-slate-900 mb-4 md:mb-6">
              JMD $4,000{" "}
              <span className="block md:inline text-[10px] sm:text-xs md:text-sm font-normal text-slate-500">
                / session
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl transition"
          >
            Book Lesson
          </Link>

        </div>


        {/* Adult Rate */}
        <div className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-3 md:mb-5 bg-slate-900">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/swimming-10.mp4" type="video/mp4" />
              </video>

            </div>

            <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 mb-2 leading-tight">
              Savage Aquatic Warriors (Adults)
            </h3>

            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Individual adult swimming lessons for beginners and
              developing swimmers looking to improve confidence and
              technique.
            </p>

            <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-slate-900 mb-4 md:mb-6">
              JMD $4,500{" "}
              <span className="block md:inline text-[10px] sm:text-xs md:text-sm font-normal text-slate-500">
                / session
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl transition"
          >
            Book Lesson
          </Link>

        </div>

      </div>
    </section>


    {/* =======================================================
        SWIM PACKAGES
    ======================================================= */}
    <section>

      <div className="text-center mb-7 md:mb-10">

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
          Swim Lesson Packages
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Save with five-lesson swimming packages designed to support
          consistent learning and swimming skill development. All prices
          are in Jamaican Dollars (JMD).
        </p>

      </div>


      {/* TWO COLUMNS ON MOBILE */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8 max-w-4xl mx-auto">

        {/* Kids Package */}
        <div className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-3 md:mb-5 bg-slate-100">

              <img
                src="/pictures/participant-1.png"
                alt="Child participating in swimming lessons in Jamaica"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>

            <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 mb-2 leading-tight">
              Splashers Package (5 Lessons)
            </h3>

            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Bundled swimming lessons for children focused on consistent
              progression and skill development.
            </p>

            <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-slate-900 mb-4 md:mb-6">
              JMD $18,000{" "}
              <span className="block md:inline text-[10px] sm:text-xs md:text-sm font-normal text-slate-500">
                / 5 lessons
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl transition"
          >
            Book Package
          </Link>

        </div>


        {/* Adult Package */}
        <div className="bg-slate-900 text-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-7 shadow-xl border border-slate-800 flex flex-col justify-between relative">

          <span className="absolute -top-2 right-2 md:-top-3 md:right-8 bg-sky-500 text-white text-[8px] sm:text-[10px] md:text-xs font-extrabold px-2 py-1 rounded-full uppercase tracking-wider">
            Best Value
          </span>

          <div>

            <div className="rounded-lg md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-3 md:mb-5 bg-slate-100">

              <img
                src="/pictures/participant-2.png"
                alt="Adult participating in swimming lessons in Kingston Jamaica"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>

            <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2 leading-tight">
              Warriors Package (5 Lessons)
            </h3>

            <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Bundled swimming training for adults focused on confidence,
              technique, and continued development.
            </p>

            <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-white mb-4 md:mb-6">
              JMD $24,000{" "}
              <span className="block md:inline text-[10px] sm:text-xs md:text-sm font-normal text-slate-400">
                / 5 lessons
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white text-center font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl transition shadow-lg"
          >
            Book Package
          </Link>

        </div>

      </div>
    </section>


    {/* =======================================================
        PRIVATE & EXCLUSIVE
    ======================================================= */}
    <section>

      <div className="text-center mb-7 md:mb-10">

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
          Private &amp; Exclusive Swimming Experience
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Private swimming lessons, private pool bookings, group sessions,
          parties, events, and exclusive aquatic experiences. All prices
          are in Jamaican Dollars (JMD).
        </p>

      </div>


      {/* THREE COLUMNS ON MOBILE */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">

        {/* Private Splashers */}
        <div className="bg-white rounded-lg md:rounded-2xl p-2 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-md md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-2 sm:mb-3 md:mb-5 bg-slate-100">

              <img
                src="/pictures/participant-3.png"
                alt="Private swimming lessons for children in Jamaica"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>

            <h3 className="font-bold text-[11px] sm:text-sm md:text-lg text-slate-900 mb-1 sm:mb-2 leading-tight">
              Private Splashers
            </h3>

            <p className="text-slate-500 text-[9px] sm:text-xs md:text-sm mb-3 md:mb-6 leading-relaxed">
              Exclusive private swimming session for children.
            </p>

            <div className="text-sm sm:text-lg md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-6">
              JMD $4,500
              <span className="block md:inline text-[8px] sm:text-xs md:text-sm font-normal text-slate-500">
                / session
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-[9px] sm:text-xs md:text-base py-1.5 sm:py-2 md:py-3 rounded-md md:rounded-xl transition"
          >
            Book Private
          </Link>

        </div>


        {/* Private Warriors */}
        <div className="bg-white rounded-lg md:rounded-2xl p-2 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-md md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-2 sm:mb-3 md:mb-5 bg-slate-100">

              <img
                src="/pictures/participant-4.png"
                alt="Private adult swimming lessons in Kingston Jamaica"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>

            <h3 className="font-bold text-[11px] sm:text-sm md:text-lg text-slate-900 mb-1 sm:mb-2 leading-tight">
              Private Warriors
            </h3>

            <p className="text-slate-500 text-[9px] sm:text-xs md:text-sm mb-3 md:mb-6 leading-relaxed">
              Exclusive private swimming session for adults.
            </p>

            <div className="text-sm sm:text-lg md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-6">
              JMD $5,000
              <span className="block md:inline text-[8px] sm:text-xs md:text-sm font-normal text-slate-500">
                / session
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-[9px] sm:text-xs md:text-base py-1.5 sm:py-2 md:py-3 rounded-md md:rounded-xl transition"
          >
            Book Private
          </Link>

        </div>


        {/* Lifeguard */}
        <div className="bg-white rounded-lg md:rounded-2xl p-2 sm:p-4 md:p-7 shadow-md border border-slate-200 flex flex-col justify-between">

          <div>

            <div className="rounded-md md:rounded-xl overflow-hidden shadow-inner aspect-[4/3] mb-2 sm:mb-3 md:mb-5 bg-slate-100">

              <img
                src="/pictures/participant-6.png"
                alt="Professional event lifeguard service in Jamaica"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>

            <h3 className="font-bold text-[11px] sm:text-sm md:text-lg text-slate-900 mb-1 sm:mb-2 leading-tight">
              Event Lifeguard Service
            </h3>

            <p className="text-slate-500 text-[9px] sm:text-xs md:text-sm mb-3 md:mb-6 leading-relaxed">
              Professional lifeguard coverage for private events, parties,
              and aquatic activities.
            </p>

            <div className="text-sm sm:text-lg md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-6">
              JMD $6,000
              <span className="block md:inline text-[8px] sm:text-xs md:text-sm font-normal text-slate-500">
                / service
              </span>
            </div>

          </div>

          <Link
            to="/bookings"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold text-[9px] sm:text-xs md:text-base py-1.5 sm:py-2 md:py-3 rounded-md md:rounded-xl transition"
          >
            Book Lifeguard
          </Link>

        </div>

      </div>
    </section>


    {/* =========================================================
        SEO / LOCAL SERVICE CLOSING SECTION
    ========================================================= */}
    <section className="max-w-4xl mx-auto text-center pt-2">

      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
        Ready to Learn to Swim in Kingston, Jamaica?
      </h2>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
        Whether you are searching for swimming lessons in Kingston,
        swimming classes for kids, adult swim lessons, private swimming
        instruction, beginner learn-to-swim classes, or parent water
        safety education, Savage Swim Academy 876 is here to help you
        become more comfortable, capable, and confident around the water.
      </p>

      <p className="text-sky-600 font-bold text-sm mb-5">
        Swimming lessons are available by appointment only.
      </p>

      <Link
        to="/bookings"
        className="inline-flex bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-xl transition"
      >
        Book a Swim Lesson
      </Link>

    </section>

  </div>
</div>


);
}
