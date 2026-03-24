import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";   // ✅ ADD THIS
import "./Hero.css";
import BookingForm from "./BookingForm";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const images = [hero1, hero2, hero3];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();                

  // 🔁 Hero image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ SCROLL TO HERO WHEN COMING FROM OTHER PAGES
  useEffect(() => {
    if (location.state?.scrollToHero) {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section
        className="hero"
        id="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-overlay">
          <h1>Capturing Moments, Creating Memories</h1>
          <p>Professional Photography That Tells Your Story</p>

          <button onClick={() => setShowBooking(true)}>
            Book A Shot
          </button>
        </div>
      </section>

      <BookingForm
        show={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </>
  );
}

export default Hero;
