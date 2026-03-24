import { useState } from "react";
import "./Portfolio.css";
import PortfolioModal from "./PortfolioModal";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const portfolioImages = {
    all: [
     "/images/portfolio1.jpg",
      "/images/portfolio2.jpg",
      "/images/portfolio3.jpg",
      "/images/portfolio4.jpg",
      "/images/portfolio5.jpg",
      "/images/portfolio6.jpg",
      "/images/portfolio7.jpg",
      "/images/portfolio8.jpg",
      "/images/portfolio9.jpg",
      "/images/portfolio10.jpg",
    ],
    wedding: ["/images/wedding.jpg", "/images/portfolio1.jpg", "/images/portfolio5.jpg","/images/wedding1.jpg","/images/wedding2.jpg","/images/wedding3.jpg","/images/wedding4.jpg","/images/wedding5.jpg",
        "/images/wedding6.jpg","/images/wedding7.jpg","/images/wedding8.jpg","/images/wedding9.jpg","/images/wedding10.jpg","/images/wedding11.jpg","/images/wedding12.jpg","/images/wedding13.jpg","/images/wedding14.jpg",
        "/images/wedding15.jpg","/images/wedding16.jpg","/images/wedding17.jpg","/images/wedding18.jpg","/images/wedding19.jpg","/images/wedding20.jpg","/images/wedding21.jpg","/images/wedding22.jpg","/images/wedding23.jpg",
        "/images/wedding24.jpg","/images/wedding25.jpg",
    ],
    prewedding: ["/images/prewedding.jpg", "/images/prewedding1.jpg", "/images/prewedding2.jpg", "/images/prewedding3.jpg", "/images/prewedding4.jpg", "/images/prewedding5.jpg", "/images/prewedding6.jpg", "/images/prewedding7.jpg"
      , "/images/prewedding8.jpg", "/images/prewedding9.jpg", "/images/prewedding10.jpg", "/images/prewedding11.jpg", "/images/prewedding12.jpg", "/images/prewedding13.jpg", "/images/prewedding14.jpg", "/images/prewedding15.jpg"
      , "/images/prewedding16.jpg", "/images/prewedding17.jpg", "/images/prewedding18.jpg", 
    ],
    portrait: ["/images/portrait.jpg", "/images/portrait1.jpg", "/images/portrait2.jpg", "/images/portrait3.jpg", "/images/portrait4.jpg", "/images/portrait5.jpg", "/images/portrait6.jpg", "/images/portrait7.jpg",
       "/images/portrait8.jpg" , "/images/portrait9.jpg", "/images/portrait10.jpg", "/images/portfolio3.jpg", "/images/portfolio8.jpg"
    ],
    event: ["/images/event.jpg", "/images/portfolio4.jpg", "/images/portfolio9.jpg","/images/event1.jpg","/images/event2.jpg","/images/event3.jpg","/images/event4.jpg","/images/event5.jpg","/images/event6.jpg","/images/event7.jpg"
      ,"/images/event8.jpg","/images/event9.jpg","/images/event10.jpg","/images/event11.jpg","/images/event12.jpg","/images/event13.jpg","/images/event14.jpg","/images/event15.jpg","/images/event16.jpg","/images/event17.jpg","/images/event18.jpg"
      ,"/images/event19.jpg"
    ],
    fashion: ["/images/fashion.jpg", "/images/portfolio10.jpg","/images/fashion1.jpg","/images/fashion2.jpg","/images/fashion3.jpg","/images/fashion4.jpg","/images/fashion5.jpg","/images/fashion6.jpg",
      "/images/fashion7.jpg","/images/fashion8.jpg","/images/fashion9.jpg","/images/fashion10.jpg","/images/fashion11.jpg","/images/fashion12.jpg","/images/fashion3.jpg",
    ],
  };

 const handleCategoryClick = (category) => {
  if (category === "all") {
    setActiveCategory("all");
    setShowModal(false); // don't show modal
  } else {
    setActiveCategory(category);
    setShowModal(true); // ✅ show modal
  }
};


  return (
    <section id="portfolio" className="portfolio">
      <h1>Gallery</h1>
      <h6>A Glimpise of Our Best Work</h6>
      {/* Buttons */}
      <div className="portfolio-buttons">
        {["all", "wedding", "prewedding", "portrait", "event", "fashion"].map((cat) => (
          <button
            key={cat}
            className={`portfolio-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Always display All images grid */}
      <div className="portfolio-grid">
        {portfolioImages.all.map((img, index) => (
          <div key={index} className="portfolio-item">
            <img src={img} alt={`All ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal for selected category (wedding, prewedding, etc.) */}
      <PortfolioModal
  show={showModal}
  onClose={() => {
    setShowModal(false);      // closes modal
    setActiveCategory("all"); // sets "All" button active
  }}
  category={activeCategory}
  images={portfolioImages[activeCategory]}
/>

    </section>
  );
}

export default Portfolio;
