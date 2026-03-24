import "./BookingForm.css";

function BookingForm({ show, onClose }) {

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // directly close form after submit
    onClose();
  };

  return (
    <div className="booking-overlay">
      <div className="booking-wrapper">
        <span className="close-btn" onClick={onClose}>×</span>

        {/* LEFT INFO */}
        <div className="booking-info">
          <h2>Let’s Create Something Beautiful</h2>
          <p>
            Book a professional photography session and turn your
            moments into timeless memories.
          </p>

          <ul>
            <li>📸 Wedding & Pre-Wedding</li>
            <li>👗 Fashion & Portrait</li>
            <li>🎉 Events & Celebrations</li>
            <li>⭐ Trusted by 500+ clients</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Book Your Shoot</h3>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />

          <select required>
            <option value="">Select Shoot Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Portrait</option>
            <option>Event</option>
            <option>Fashion</option>
          </select>

          <input type="date" required />
          <input type="text" placeholder="Location / City" required />

          <textarea placeholder="Message (optional)"></textarea>

          <button type="submit">Confirm Booking</button>
        </form>

      </div>
    </div>
  );
}

export default BookingForm;
