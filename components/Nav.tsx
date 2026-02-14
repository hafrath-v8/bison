"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDesktopProductOpen, setIsDesktopProductOpen] = useState(false);
  const desktopProductRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopProductRef.current && !desktopProductRef.current.contains(event.target)) {
        setIsDesktopProductOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header id="home" className="bg-gradient-to-r  from-black via-emerald-900 to-black">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-2">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 group">
            <span className="sr-only">BISON</span>
            <div className="relative">
              <Image
                src="/bisonlogo.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="h-11 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-emerald-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
          </a>
        </div>

        <h2 className="text-2xl tracking-wide lg:hidden font-semibold font-share-tech text-[#eccece]">
          BISON
        </h2>

        <div className="flex lg:hidden">
          <button 
            type="button" 
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2.8 inline-flex items-center justify-center rounded-md p-2.5 bg-yellow-400/20 hover:bg-yellow-400/30 backdrop-blur-sm transition-all duration-300 border border-yellow-500/30"
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              data-slot="icon" 
              aria-hidden="true" 
              className="size-7 text-[#eccece]"
            >
              <path 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#home" className="text-sm/6 font-semibold text-[#eccece] hover:text-emerald-300 transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#product" className="text-sm/6 font-semibold text-[#eccece] hover:text-emerald-300 transition-colors duration-300 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonials" className="text-sm/6 font-semibold text-[#eccece] hover:text-emerald-300 transition-colors duration-300 relative group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="text-sm/6 font-semibold text-[#eccece] hover:text-emerald-300 transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="text-sm/6 font-semibold text-[#eccece] hover:text-emerald-300 transition-colors duration-300 group px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 hover:from-yellow-500/20 hover:to-emerald-500/20 border border-yellow-500/30">
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-gradient-to-br from-black/95 via-emerald-900/90 to-black/95 backdrop-blur-md" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gradient-to-b from-black to-emerald-900 p-6 sm:max-w-sm border-l border-yellow-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <a href="#" className="-m-1.5 p-1.5 group">
                <span className="sr-only">BISON</span>
                <div className="relative">
                  <Image
                    src="/bisonlogo.png"
                    alt="Company Logo"
                    width={50}
                    height={50}
                    className="h-11 md:h-13 w-auto group-hover:rotate-12 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-emerald-500 opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-300"></div>
                </div>
              </a>
              
              <h2 className="text-2xl tracking-wide font-semibold font-share-tech text-[#eccece]">
                BISON
              </h2>

              <button 
                type="button" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 bg-yellow-400/20 hover:bg-yellow-400/30 backdrop-blur-sm transition-all duration-300 border border-yellow-500/30"
              >
                <span className="sr-only">Close menu</span>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  data-slot="icon" 
                  aria-hidden="true" 
                  className="size-6 text-[#eccece]"
                >
                  <path 
                    d="M6 18 18 6M6 6l12 12" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-yellow-500/20">
                <div className="space-y-2 py-6">
                  <a href="#home" className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-[#eccece] hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-emerald-500/20 hover:border-l-4 hover:border-yellow-400 transition-all duration-300 border-l-4 border-transparent">
                    Home
                  </a>
                  <a href="#product" className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-[#eccece] hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 hover:border-l-4 hover:border-emerald-400 transition-all duration-300 border-l-4 border-transparent">
                    Products
                  </a>
                  <a href="#testimonials" className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-[#eccece] hover:bg-gradient-to-r hover:from-yellow-600/20 hover:to-emerald-600/20 hover:border-l-4 hover:border-yellow-500 transition-all duration-300 border-l-4 border-transparent">
                    Testimonial
                  </a>
                  <a href="#about" className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-[#eccece] hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-yellow-600/20 hover:border-l-4 hover:border-emerald-500 transition-all duration-300 border-l-4 border-transparent">
                    About
                  </a>
                </div>
                <div className="py-6">
                  <a href="#contact" className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-[#eccece] hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-emerald-500/20 transition-all duration-300 group border border-yellow-500/30">
                    <span className="flex items-center justify-between">
                      Contact
                      <span className="group-hover:translate-x-2 transition-transform duration-300 text-emerald-300">→</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}