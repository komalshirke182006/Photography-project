import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToHero: true } });
    } else {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logoImg} alt="LUXELENS Logo" className="logo-image" />
        <span className="logo">LUXELENS</span>
        
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={handleHomeClick}>Home</a>
          </li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#portfolio">Gallery</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
