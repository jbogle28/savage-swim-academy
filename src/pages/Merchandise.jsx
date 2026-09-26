import React from 'react';

export default function Merchandise() {
  const merchandise = [
    {
      name: "Savage Swim Academy Hats",
      description:
        "Represent Savage Swim Academy 876 with official academy hats designed for swimmers, families, and supporters.",
      image: "/pictures/hats.png",
      available: true,
      tag: "Available",
    },
    {
      name: "Savage Swim Academy T-Shirts",
      description:
        "Official Savage Swim Academy apparel featuring the academy brand. More styles and sizes coming soon.",
      image: null,
      available: false,
      tag: "Coming Soon",
    },
    {
      name: "Savage Swim Academy Swimwear",
      description:
        "Academy swimwear designed for training, lessons, and showing your Savage Swim Academy spirit in the water.",
      image: null,
      available: false,
      tag: "Coming Soon",
    },
    {
      name: "Savage Swim Academy Water Bottles",
      description:
        "Stay hydrated before, during, and after training with official Savage Swim Academy water bottles.",
      image: null,
      available: false,
      tag: "Coming Soon",
    },
    {
      name: "Savage Swim Academy Bags",
      description:
        "Practical academy bags for carrying swimwear, towels, training gear, and everyday essentials.",
      image: null,
      available: false,
      tag: "Coming Soon",
    },
    {
      name: "Savage Swim Academy Towels",
      description:
        "Complete your swim-day essentials with official Savage Swim Academy towels.",
      image: null,
      available: false,
      tag: "Coming Soon",
    },
  ];

  return (
    <div className="pb-20 min-h-screen bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full h-[55vh] min-h-[400px] md:h-[650px] overflow-hidden">

        <img
          src="/pictures/merch-hero.png"
          alt="Savage Swim Academy 876 merchandise in Kingston Jamaica"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/45" />

        <div className="relative z-10 h-full flex items-center justify-center px-4 pt-16 sm:pt-0 text-center">

          <div className="max-w-4xl text-white">

            <span className="inline-block bg-sky-500/90 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm px-4 py-2 rounded-full mb-4">
              Savage Swim Academy 876
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-5">
              Wear the
              <span className="block text-sky-300">
                Savage Spirit.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Represent Savage Swim Academy 876 in and out of the water
              with official academy merchandise made for swimmers,
              families, and supporters.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          MERCHANDISE INTRO
      ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 pt-16 md:pt-20 mb-12 md:mb-16 text-center">

        <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full">
          Official Merchandise
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-5">
          Savage Swim Academy Merchandise
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Show your support for Savage Swim Academy 876 with official
          merchandise. Our collection is growing, with new apparel,
          swim gear, and academy essentials being introduced over time.
        </p>

      </section>


      {/* =========================================================
          MERCHANDISE GRID
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 mb-16 md:mb-20">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8">

          {merchandise.map((item, index) => (

            <div
              key={index}
              className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col ${
                !item.available ? "opacity-95" : ""
              }`}
            >

              {/* =====================================================
                  PRODUCT MEDIA
              ===================================================== */}
              <div className="aspect-square bg-slate-100 relative overflow-hidden">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.name} - Savage Swim Academy 876 merchandise`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center bg-slate-100">

                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                      <span className="text-sky-500 text-lg sm:text-2xl font-extrabold">
                        S
                      </span>
                    </div>

                    <p className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                      Product Preview
                    </p>

                  </div>
                )}

                {/* Status Badge */}
                <div
                  className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                    item.available
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-900/85 text-white"
                  }`}
                >
                  {item.tag}
                </div>

              </div>


              {/* =====================================================
                  PRODUCT INFORMATION
              ===================================================== */}
              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">

                <h3 className="text-sm sm:text-base md:text-xl font-bold text-slate-900 leading-tight mb-2">
                  {item.name}
                </h3>

                <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-1">
                  {item.description}
                </p>

                {item.available ? (
                  <button
                    type="button"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white text-[10px] sm:text-xs md:text-sm font-bold py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl transition"
                  >
                    Shop Hats
                  </button>
                ) : (
                  <div className="w-full bg-slate-100 text-slate-500 text-center text-[10px] sm:text-xs md:text-sm font-bold py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl">
                    Coming Soon
                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          COMING SOON MESSAGE
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-3 sm:px-4">

        <div className="bg-slate-900 text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl">

          <span className="inline-block bg-sky-500/20 text-sky-300 border border-sky-400/20 font-bold uppercase tracking-wider text-[9px] sm:text-xs px-3 py-1 rounded-full mb-4">
            More Coming Soon
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            More Savage Gear Is on the Way
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our merchandise collection is growing. Keep checking back
            for new Savage Swim Academy apparel, swimwear, accessories,
            and training essentials.
          </p>

        </div>

      </section>

    </div>
  );
}
