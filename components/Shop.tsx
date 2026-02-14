"use client";

import { useState, useMemo, useEffect } from "react";
import ProductCard from "./product";

const PRODUCTS = [
  { id: 1, name: "Urban Hoodie", brand: "Hoodie", price: 1800, image: "tshirt.jpg" },
  { id: 2, name: "Classic Tee", brand: "T-Shirt", price: 3200, image: "tshirt.jpg" },
  { id: 3, name: "Street Bottom", brand: "Bottom", price: 3800, image: "tshirt.jpg" },
  { id: 4, name: "Winter Hoodie", brand: "Hoodie", price: 5500, image: "tshirt.jpg" },
  { id: 5, name: "Oversize Tee", brand: "T-Shirt", price: 4200, image: "tshirt.jpg" },
  { id: 6, name: "Printed Tee", brand: "T-Shirt", price: 2800, image: "/tshirt.jpg" },
  { id: 7, name: "Sport Hoodie", brand: "Hoodie", price: 4000, image: "/tshirt.jpg" },
  { id: 8, name: "Zip Hoodie", brand: "Hoodie", price: 3900, image: "/tshirt.jpg" },

  { id: 9, name: "Summer Tee", brand: "T-Shirt", price: 2600, image: "tshirt.jpg" },
  { id: 10, name: "Casual Hoodie", brand: "Hoodie", price: 3600, image: "tshirt.jpg" },
  { id: 11, name: "Gym Bottom", brand: "Bottom", price: 3000, image: "tshirt.jpg" },
  { id: 12, name: "Premium Tee", brand: "T-Shirt", price: 4500, image: "tshirt.jpg" },
  { id: 13, name: "Heavy Hoodie", brand: "Hoodie", price: 6000, image: "tshirt.jpg" },
  { id: 14, name: "Slim Bottom", brand: "Bottom", price: 3400, image: "tshirt.jpg" },
  { id: 15, name: "Street Tee", brand: "T-Shirt", price: 3100, image: "tshirt.jpg" },
  { id: 16, name: "Basic Hoodie", brand: "Hoodie", price: 2900, image: "tshirt.jpg" },
];

const BRANDS = ["All", "Hoodie", "T-Shirt", "Bottom"];

export default function Shop() {
  const [brand, setBrand] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setVisibleCount(5);
    }
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (brand === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.brand === brand);
  }, [brand]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const changeBrand = (value: string) => {
    setBrand(value);
    setVisibleCount(isMobile ? 5 : 8);
  };

  const loadMore = () => {
    setVisibleCount(filteredProducts.length); // show all
  };

  const showLess = () => {
    setVisibleCount(isMobile ? 5 : 8); // back to initial
  };

  return (
    
    <section id="product" className="sm:py-15 py-10 bg-[#fafaf7f7]">
      
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-12 text-center">
          Our Collection
        </h2>

        {/* Filters */}
        <div className="mb-10 sticky top-0 z-10 bg-[#FAFAF7] px-8 py-4">
  <div className="flex flex-wrap gap-2">
    {BRANDS.map((b) => (
      <button
        key={b}
        onClick={() => changeBrand(b)}
        className={`sm:px-4 px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
          brand === b
            ? "bg-emerald-900/90 text-white"
            : "bg-white text-[#2B2B2B] border border-[#E8DCC8] hover:bg-[#f4f2ec]"
        }`}
      >
        {b}
      </button>
    ))}
  </div>
</div>


        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More / Show Less */}
        {filteredProducts.length > (isMobile ? 5 : 8) && (
          <div className="flex justify-center mt-10 gap-4">
            {visibleCount < filteredProducts.length ? (
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-emerald-900/90 text-white rounded-lg font-semibold hover:bg-[#6B7A4F]"
              >
                Load More
              </button>
            ) : (
              <button
                onClick={showLess}
                className="px-8 py-3 bg-[#E8DCC8] text-[#2B2B2B] rounded-lg font-semibold hover:bg-[#d6cdbb]"
              >
                Show Less
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
