"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToShop = () => {
    const shopSection = document.getElementById("shop");
    shopSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
        delay: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section
      
      className="relative pb-8 min-h-[calc(100vh_-_clamp(60px,8vh,75px))] flex items-center justify-center overflow-hidden bg-gradient"
    >
      {/* ================= MOBILE BACKGROUND VIDEO (SM ONLY) ================= */}
      <div className="absolute opacity-70 inset-0 z-0 sm:block md:hidden overflow-hidden">
        <video
          src="/mock.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full opacity-60 ml-[-20] sm:opacity-100 h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#7C8C5C] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#E8DCC8] rounded-full opacity-20 blur-3xl"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-share-tech lg:text-7xl font-black text-[#eccece] mb-4 mt-2 leading-tight"
            >
              Define Your Style with BISON.LK
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-[#f7eda5c4] font-semibold mb-4"
            >
              Style That Speaks Without Words
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#fdfdfdac] mb-10 max-w-xl leading-relaxed"
            >
              Sri Lanka's top DTF printed T-shirt hub discover unique, custom, 
              and ready-to-wear tees for every style. Premium prints, vibrant colors, 
              and affordable prices for everyone.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
  onClick={scrollToShop}
  className="px-2 py-2 sm:px-8 sm:py-4 bg-black text-[#eccece] font-bold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg border border-yellow-500/30 hover:border-yellow-400"
>
  Shop Collection
</button>

 <button
  onClick={scrollToShop}
  className="px-2 py-2 sm:px-8 sm:py-4 bg-black text-[#eccece] font-bold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg border border-yellow-500/30 hover:border-yellow-400"
>
  Custom Print Your T-Shirt
</button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                variants={badgeVariants}
                className="flex items-center gap-3 text-sm font-semibold text-[#fdfdfdac]"
              >
                <div className="w-3 h-3 bg-[#7C8C5C] rounded-full"></div>
                Trusted by 100+ customers
              </motion.div>
              <motion.div
                variants={badgeVariants}
                className="flex items-center gap-3 text-sm font-semibold text-[#fdfdfdac]"
              >
                <div className="w-3 h-3 bg-[#7C8C5C] rounded-full"></div>
                Authenticity Guaranteed
              </motion.div>
              <motion.div
                variants={badgeVariants}
                className="flex items-center gap-3 text-sm font-semibold text-[#fdfdfdac]"
              >
                <div className="w-3 h-3 bg-[#7C8C5C] rounded-full"></div>
                Fast Delivery
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE VIDEO (MD & LG ONLY) ================= */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden md:block"
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              <video
                src="/mock.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
      clipPath: "inset(0 14% 0 22%)"
    }}
                className="sm:h-170 sm:opacity-100 opacity-10 object-cover scale-118"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#7C8C5C] rounded-full opacity-20 blur-2xl"
            ></motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2B2B2B] rounded-full opacity-10 blur-3xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
