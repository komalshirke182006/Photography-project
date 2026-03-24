import "./ServiceModal.css";
import { useState } from "react";
import BookingForm from "./BookingForm";


function ServiceModal({ show, onClose, service }) {

    const [showBooking, setShowBooking] = useState(false);

  if (!show) return null; // do not show if show = false

  return (
    <div className="modal-overlay">
      <div className="modal-box">
{!showBooking && (
  <span className="close-btn" onClick={onClose}>×</span>
)}

        <img src={service.image} alt={service.title} />

        <h2>{service.title}</h2>

        <p>{service.description}</p>

        <ul>
          <li>✔ Professional editing</li>
          <li>✔ High-resolution images</li>
          <li>✔ On-time delivery</li>
          <li>✔ Personalized approach</li>
        </ul>

        <div className="modal-actions">
          <button className="book-btn" onClick={() => setShowBooking(true)}>
  Book Now
</button>

          
        </div>
      </div>
      <BookingForm
  show={showBooking}
  onClose={() => setShowBooking(false)}
  serviceName={service.title}
/>

    </div>

    
  );
}

export default ServiceModal;
