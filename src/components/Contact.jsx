import "./Contact.css";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();        
    setSuccess(true);          // show success message

    setTimeout(() => {
      setSuccess(false);       // hide after 3 seconds
    }, 3000);

    e.target.reset();          // clear form
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <h6><p className="contact-subtitle">
        Let’s create something beautiful together
      </p></h6>

      <div className="contact-container">
        {/* LEFT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT INFO CARD */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            <strong>📍 Address</strong>
            <br />
            123 Studio Street, MG Road, Pune.
          </p>

          <p>
            <strong>📞 Phone</strong>
            <br />
            +91 7854960213
          </p>

          <p>
            <strong>✉ Email</strong>
            <br />
            hello@luxelens.com
          </p>

          <p>
            <strong>⏰ Working Hours</strong>
            <br />
            Mon–Fri: 9:00 AM – 6:00 PM
            <br />
            Sat: 10:00 AM – 4:00 PM
          </p>

          <div className="contact-socials">
            <a href="https://facebook.com" target="_blank"> <FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /> </a>
            <a href="https://twitter.com" target="_blank"><FaXTwitter /></a>
           <a href="https://pinterest.com" target="_blank"> <FaPinterestP /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
