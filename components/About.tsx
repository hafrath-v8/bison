"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-up">
            <div className="relative aspect-square bg-gradient-to-br from-[#F5EBDC] to-[#E8DCC8] rounded-2xl shadow-lg overflow-hidden">
              <img
                src="tshirt.jpg"
                alt="Vintage shoes collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-6">
              Our Story
            </h2>
           <p className="text-lg text-[#555] leading-relaxed mb-6">
  BISON.LK was born from a passion for creating the best-designed T-shirts in Sri Lanka. Our team combines creativity, style, and quality to deliver T-shirts that are fashionable and expressive. Each design is crafted to stand out.
</p>

<p className="text-lg text-[#555] leading-relaxed mb-6">
  We believe everyone deserves premium T-shirts that reflect their personality. Using high-quality fabrics and vibrant prints, every shirt is made to be worn with pride and confidence.
</p>

<p className="text-lg text-[#555] leading-relaxed mb-8">
  Our collection offers bold graphic tees, minimalistic designs, and casual wear for every occasion. Step into your style with BISON.LK, where every T-shirt reflects the art of design.
</p>



            <div className="flex gap-4">
  <div className="flex-1 p-4 bg-[#F5EBDC] rounded-lg">
    <p className="text-2xl font-bold text-[#7C8C5C]">100+</p>
    <p className="text-sm text-[#2B2B2B]">Unique T-Shirt Designs</p>
  </div>
  <div className="flex-1 p-4 bg-[#F5EBDC] rounded-lg">
    <p className="text-2xl font-bold text-[#7C8C5C]">200+</p>
    <p className="text-sm text-[#2B2B2B]">Happy Customers</p>
  </div>
  <div className="flex-1 p-4 bg-[#F5EBDC] rounded-lg">
    <p className="text-2xl font-bold text-[#7C8C5C]">Sri Lanka</p>
    <p className="text-sm text-[#2B2B2B]">Proudly Local</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
