import React from 'react';

export default function About() {
  const staff = [
    {
      name: "Coach Savage",
      role: "Head Sprint & Technique Coach",
      bio: "Competitive background with over 10 years experience developing swimmers and building strong technical foundations.",
      image: "/pictures/ceo2.png"
    },
    {
      name: "Coach Nats",
      role: "Swimming Coach",
      bio: "Dedicated to helping swimmers develop confidence, improve technique, and reach their individual goals in the water.",
      image: "/pictures/nats.png"
    },
    {
      name: "Coach Jada",
      role: "Swimming Coach",
      bio: "Focused on creating a positive learning environment while helping swimmers develop strong fundamentals and water confidence.",
      image: "/pictures/jada.png"
    },
    {
      name: "Arianna Ewart",
      role: "Media & Content",
      bio: "Captures the energy, progress, and memorable moments of Savage Swim Academy through photography and media.",
      image: "/pictures/arriana.png"
    }
  ];

  const reasons = [
    "Patient, personalized instruction adapted to individual learning paces.",
    "Proven modern technique training focused on safety and hydrodynamic efficiency.",
    "Flexible Monday through Sunday schedule (9:00 AM – 5:00 PM) to fit busy routines.",
    "Professional swimming instruction designed for swimmers of different ages and ability levels."
  ];

  const experience = [
    {
      title: "Lifeguard Instructor",
      organization: "Continental Pools",
      period: "2023 – Present",
      description:
        "Shaneice has served as a Lifeguard Instructor with Continental Pools, delivering lifeguard training and instruction both overseas and in Jamaica. Her work supports the development of essential lifesaving knowledge, rescue skills, and water safety practices."
    },
    {
      title: "Safety Auditor",
      organization: "Aquatic Safety & Compliance",
      period: "2025 – Present",
      description:
        "In her role as a Safety Auditor, Shaneice conducts safety inspections, assesses compliance with applicable safety standards, identifies potential hazards, and promotes safe practices within aquatic facilities."
    }
  ];

  return (
    <div className="pb-20 min-h-screen bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full h-[55vh] min-h-[400px] md:h-[650px] overflow-hidden">
        <img
          src="/pictures/about-hero.png"
          alt="Savage Swim Academy 876 swimming training in Jamaica"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/45" />

        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-4xl text-white">
            <span className="inline-block bg-sky-500/90 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm px-4 py-2 rounded-full mb-4">
              About Savage Swim Academy 876
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-5">
              More Than Swimming.
              <span className="block text-sky-300">
                Building Confidence for Life.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Swimming is an essential life skill and incredible discipline.
              Our mission is to instill water safety, proper technique, and
              lifelong self-confidence for every student who steps onto the deck.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          CEO & FOUNDER
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 pt-12 md:pt-16 mb-16 md:mb-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

          <div className="grid md:grid-cols-5">

            {/* FOUNDER PROFILE */}
            <div className="md:col-span-2 bg-slate-100 flex flex-col items-center justify-center px-5 py-8 sm:px-8 sm:py-10 md:p-10 lg:p-12">

              <div className="text-center w-full">

                <span className="inline-block text-sky-600 font-bold uppercase tracking-wider text-[9px] sm:text-xs bg-sky-50 px-3 py-1.5 rounded-full mb-5">
                  Meet the CEO & Founder
                </span>

                {/* Circular CEO Image */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-[6px] md:border-8 border-white shadow-xl bg-slate-200">
                  <img
                    src="/pictures/ceo1.png"
                    alt="Shaneice Savage, Founder and CEO of Savage Swim Academy 876 Ltd"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-5 leading-tight">
                  Shaneice Savage
                </h2>

                <p className="text-sky-600 font-semibold text-xs sm:text-sm md:text-base mt-1">
                  Founder & CEO
                </p>

                <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm mt-1">
                  Savage Swim Academy 876 Ltd
                </p>

              </div>
            </div>


            {/* CEO STORY & PROFESSIONAL EXPERIENCE */}
            <div className="md:col-span-3 p-5 sm:p-7 md:p-10 lg:p-12">

              <div className="space-y-4 md:space-y-5">

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  <strong className="text-slate-900">
                    Shaneice Savage
                  </strong>{" "}
                  is the Founder and CEO of{" "}
                  <strong className="text-slate-900">
                    Savage Swim Academy 876 Ltd
                  </strong>
                  , an academy built from a lifelong passion for swimming,
                  teaching, and helping others become confident and capable
                  in the water.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Although{" "}
                  <strong className="text-slate-900">
                    Savage Swim Academy 876 Ltd was officially founded in 2024
                  </strong>
                  , Shaneice's journey in swimming began long before the
                  academy. Swimming has been a major part of her life for as
                  long as she can remember, giving her years of personal
                  experience, knowledge, and a deep understanding of the water.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  In <strong className="text-slate-900">2017</strong>, Shaneice
                  began teaching learn-to-swim, turning her passion for
                  swimming into a purpose-driven career. Over the years, she
                  has worked with children and adults of different swimming
                  abilities, helping beginners overcome fear, develop water
                  confidence, learn essential swimming skills, and progress
                  toward becoming stronger and more independent swimmers.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Her philosophy is simple:{" "}
                  <strong className="text-slate-900">
                    every person deserves the opportunity to learn how to swim
                    in a safe, supportive, and encouraging environment.
                  </strong>{" "}
                  Shaneice believes swimming is more than a sport—it is an
                  essential life skill that can build confidence, discipline,
                  independence, and lifelong enjoyment.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Through Savage Swim Academy 876 Ltd, her vision is to create
                  more than just a swim school. She is building a brand focused
                  on{" "}
                  <strong className="text-slate-900">
                    quality swim education, water safety, fitness, wellness,
                    and community development
                  </strong>
                  , while creating opportunities for swimmers of all ages and
                  abilities.
                </p>

              </div>

              {/* Founder Quote */}
              <div className="mt-6 md:mt-7 border-l-4 border-sky-500 bg-sky-50 rounded-r-xl p-4 md:p-5">
                <p className="text-slate-700 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                  "From a lifelong love of swimming to teaching others since
                  2017, Shaneice continues to make an impact—one swimmer at a
                  time."
                </p>
              </div>

              {/* PROFESSIONAL EXPERIENCE */}
              <div className="mt-8 md:mt-10">

                <div className="mb-5">
                  <span className="text-sky-600 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                    Professional Background
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    Professional Experience
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                    Experience in lifeguard instruction and aquatic safety
                    strengthens Shaneice's commitment to safe, professional
                    swimming education.
                  </p>
                </div>

                <div className="space-y-4">

                  {experience.map((item, index) => (
                    <div
                      key={item.title}
                      className="relative bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">

                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                          {index === 0 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v18m-7-7 7 7 7-7M5 7l7-4 7 4"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M12 3l7 3v5c0 4.4-2.9 7.5-7 10-4.1-2.5-7-5.6-7-10V6l7-3Z"
                              />
                            </svg>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                                {item.title}
                              </h4>

                              <p className="text-sky-700 text-xs sm:text-sm font-semibold mt-1">
                                {item.organization}
                              </p>
                            </div>

                            <span className="self-start shrink-0 inline-flex bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                              {item.period}
                            </span>
                          </div>

                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                            {item.description}
                          </p>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          LEARNING HAPPENS IN THE WATER
          TEXT LEFT / VIDEO RIGHT
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

        <div className="bg-slate-900 text-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">

          <div className="grid md:grid-cols-2 items-stretch">

            {/* TEXT */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center order-1">

              <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                Our Approach
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 mb-5 leading-tight">
                Learning Happens in the Water
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                At Savage Swim Academy 876, swimming instruction is centered
                around creating a safe and supportive environment where
                swimmers can learn at their own pace.
              </p>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Lessons focus on water confidence, swimming technique,
                safety, independence, and steady progression. Whether a
                swimmer is entering the water for the first time or working
                to improve existing skills, instruction is adapted to their
                individual needs and goals.
              </p>

              <div className="grid grid-cols-2 gap-3">

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 sm:p-4">
                  <p className="text-sky-400 font-bold text-sm md:text-base">
                    Safety First
                  </p>

                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Building essential water safety skills.
                  </p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 sm:p-4">
                  <p className="text-sky-400 font-bold text-sm md:text-base">
                    Individual Progress
                  </p>

                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Instruction adapted to each swimmer.
                  </p>
                </div>

              </div>
            </div>


            {/* VIDEO */}
            <div className="order-2 h-[260px] sm:h-[340px] md:h-auto min-h-[400px] bg-slate-950">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/swimming-9.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ANNUAL CHRISTMAS TREAT
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

        <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 shadow-xl border border-slate-200">

          <div className="mb-8 md:mb-10">

            <span className="text-sky-600 font-bold uppercase tracking-wider text-[9px] sm:text-xs bg-sky-50 px-2 sm:px-3 py-1 rounded-full">
              Community & Joy
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3 md:mb-4 leading-tight">
              Annual Christmas Treat for the Kids
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
              Beyond standard coaching, we love bringing our swim family
              together. Our annual Christmas treat gives kids a fantastic
              opportunity to have fun off the blocks, celebrate their hard
              work all year, and receive special gift bags loaded with
              goodies and surprises.
            </p>

          </div>


          {/* Christmas Media Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8">

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img
                src="/pictures/christmas-giftbags.png"
                alt="Christmas gift bags prepared for Savage Swim Academy kids"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img
                src="/pictures/kids-treat-2.png"
                alt="Children enjoying the annual Savage Swim Academy Christmas treat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img
                src="/pictures/kids-twister.png"
                alt="Kids participating in a Christmas activity at Savage Swim Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img
                src="/pictures/gift-bags.png"
                alt="Savage Swim Academy Christmas gift bags for children"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
              <img
                src="/pictures/kids-treat.png"
                alt="Children enjoying a Christmas celebration at Savage Swim Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/gift-bags.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/kids-eating-game.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/Christmas-treat-setup.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </div>


          {/* Christmas Message */}
          <div className="bg-sky-50 border border-sky-100 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">

            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Our Christmas celebration is one of the ways we give back to
              our swimmers and celebrate the dedication, progress, and
              friendships built throughout the year.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          MEET THE TEAM
          2 x 2 STAFF GRID
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

        <div className="text-center mb-8 md:mb-12">

          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full">
            Our Team
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            Meet the People Behind the Academy
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            The people helping swimmers learn, grow, and become more confident
            in the water.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8 max-w-5xl mx-auto">

          {staff.map((member, index) => (

            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 shadow-md border border-slate-200"
            >

              {/* Staff Photo / Initials */}
              {member.image ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 md:mb-4 border-2 border-sky-100 shadow-sm bg-slate-100">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Savage Swim Academy 876`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-sky-100 rounded-full mb-3 md:mb-4 flex items-center justify-center font-bold text-sky-600 text-base sm:text-lg md:text-xl">
                  {member.name
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")}
                </div>
              )}

              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-slate-900 leading-tight">
                {member.name}
              </h3>

              <p className="text-sky-600 text-[10px] sm:text-xs md:text-sm font-medium mb-2 md:mb-3 leading-tight">
                {member.role}
              </p>

              <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                {member.bio}
              </p>

            </div>

          ))}

        </div>
      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="max-w-4xl mx-auto px-3 sm:px-4">

        <div className="bg-sky-50 border border-sky-100 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12">

          <h2 className="text-2xl font-extrabold text-slate-900 mb-5 md:mb-6 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-2 gap-3 md:gap-4">

            {reasons.map((reason, index) => (

              <div
                key={index}
                className="flex items-start space-x-2 md:space-x-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm"
              >

                <span className="text-sky-500 font-bold mt-0.5 text-sm md:text-base">
                  ✓
                </span>

                <span className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed">
                  {reason}
                </span>

              </div>

            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
