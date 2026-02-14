"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Kanishka Chathidhu",
      initials: "KC",
      quote:
        "Absolutely love my custom tee from BISON.LK! The print quality is top-notch and fits perfectly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Perin Patrik",
      initials: "PP",
      quote:
        "The designs are unique and the service is excellent. Definitely my go-to for custom T-shirts!",
      rating: 5,
    },
    {
      id: 3,
      name: "Antony Vijayathaas",
      initials: "AV",
      quote:
        "Fast delivery, vibrant prints, and great quality fabric. Highly recommend BISON.LK!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ishfaq Ahmed",
      initials: "IA",
      quote:
        "My friends loved my custom DTF printed T-shirt. Superb quality and attention to detail!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 bg-[#FAFAF7] overflow-hidden">
      {/* Optional background blur circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#7C8C5C] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#E8DCC8] rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-12 text-center">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-emerald-900/90 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#555] mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-900/90 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <p className="font-semibold text-[#2B2B2B]">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
