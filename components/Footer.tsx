"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-900/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
  <div className="flex items-center gap-2 mb-4">
    {/* Brand Logo */}
    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
      <img
        src="/bisonlogo.png"       // <-- Replace with your logo path
        alt="BISON.LK Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <span className="font-bold font-share-tech text-xl">BISON.LK</span>
  </div>
  <p className="text-gray-400">Best-designed T-shirts in Sri Lanka.</p>
</div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#product"
                  className="hover:text-white transition-colors"
                >
                  Product
                </Link>
              </li>
             
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonial
                </Link>
              </li>
               <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://instagram.com/bison.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=94756677456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:@bison@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2026 BISON.LK. Developed by BISON Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
