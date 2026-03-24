import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoImg from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-about">
          <h2 className="footer-logo">
            <img src={logoImg} alt="LUXELENS Logo" />
            LUXELENS
          </h2>

          <p>
            Professional photography studio capturing life’s most precious
            moments. Creating timeless memories through the lens.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank"> <FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /> </a>
            <a href="https://twitter.com" target="_blank"><FaXTwitter /></a>
           <a href="https://pinterest.com" target="_blank"> <FaPinterestP /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#portfolio">Gallery</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li>Wedding</li>
            <li>Portrait</li>
            <li>Fashion</li>
            <li>Events</li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 LuxeLens Studio. Crafted with ❤️ for photography lovers.</p>
        <span>Terms & Conditions | Privacy Policy | FAQs</span>
      </div>
    </footer>
  );
}

export default Footer;
