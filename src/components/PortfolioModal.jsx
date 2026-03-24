import { useState } from "react";
import "./PortfolioModal.css";

function PortfolioModal({ show, onClose, category, images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!show) return null;

  const headlines = {
    wedding: "Our Wedding Photos Gallery",
    prewedding: "Our Pre-Wedding Photos Gallery",
    portrait: "Our Portrait Photos Gallery",
    event: "Our Event Photos Gallery",
    fashion: "Our Fashion Photos Gallery",
  };

  const headline = headlines[category] || "Portfolio Gallery";

  // Next image
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous image
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="portfolio-modal-overlay">
      <div className="portfolio-modal-box">

        <span className="close-btn" onClick={() => {
          setSelectedIndex(null);
          onClose();
        }}>×</span>

        <h2>{headline}</h2>

        {/* 🔹 SINGLE IMAGE VIEW */}
        {selectedIndex !== null ? (
          <div className="single-image-view">
            <button className="nav-btn left" onClick={prevImage}>❮</button>

            <img
              src={images[selectedIndex]}
              alt="Large View"
              className="single-image"
            />

            <button className="nav-btn right" onClick={nextImage}>❯</button>
          </div>
        ) : (
          /* 🔹 GRID VIEW */
          <div className="portfolio-modal-grid">
            {images.map((img, index) => (
              <div
                key={index}
                className="portfolio-modal-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={img} alt={`${category} ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default PortfolioModal;
