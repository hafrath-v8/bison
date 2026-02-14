import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero/>
      <Shop/>
      <Testimonials/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}