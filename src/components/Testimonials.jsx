import { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Corporate Client",
    image: "images/user1.jpg",
    rating: 5,
    text:
      "Outstanding corporate headshots! Sarah made the entire team feel comfortable and confident. The results exceeded our expectations.",
  },
  {
    id: 2,
    name: "Emma Williams",
    role: "Wedding Client",
    image: "images/user2.jpg",
    rating: 5,
    text:
      "Absolutely stunning wedding photos! Every special moment was captured beautifully. We couldn’t be happier with the results.",
  },
  {
    id: 3,
    name: "Daniel Roberts",
    role: "Portrait Client",
    image: "images/user3.jpg",
    rating: 4,
    text:
      "Professional, friendly, and extremely talented. The portraits turned out amazing.",
  },
  {
    id: 4,
    name: "Sophia Patel",
    role: "Fashion Client",
    image: "images/user4.jpg",
    rating: 5,
    text:
      "Creative vision and attention to detail were outstanding. The photos were editorial-level quality.",
  },
  {
    id: 5,
    name: "Rahul Mehta",
    role: "Event Client",
    image: "images/user5.jpg",
    rating: 5,
    text:
      "Captured every important moment perfectly. Highly professional and punctual service.",
  },
  {
    id: 6,
    name: "Olivia Brown",
    role: "Lifestyle Client",
    image: "images/user6.jpg",
    rating: 4,
    text:
      "Natural, candid, and beautiful shots. Loved the editing style and composition.",
  },
];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  const t = testimonials[index];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2><br></br><br></br>
      <h6><p className="section-subtitle">What Our Clients Say</p></h6>

      <div className="testimonial-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="testimonial-card">
          <img src={t.image} alt={t.name} className="testimonial-img" />

          <div className="stars">
            {"★".repeat(t.rating)}
          </div>

          <p className="testimonial-text">"{t.text}"</p>

          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
