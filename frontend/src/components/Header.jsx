import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* ===== TOP STRIP ===== */
.top-strip {
  background: #E6C77A;
  color: #fff;
  padding: 6px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.top-left span {
  margin-right: 20px;
}

.top-right {
  display: flex;
  gap: 14px;
}

.social-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

/* ===== MAIN HEADER ===== */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #000;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header.scrolled {
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
}

.logo img {
  height: 48px;
}

nav {
  display: flex;
  gap: 32px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

/* CALL ICON */
.call-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid #1f7a3f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f7a3f;
  font-size: 18px;
}

/* HAMBURGER */
.menu-btn {
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

/* RIGHT ACTIONS */
.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* ========== MOBILE ========== */
@media (max-width: 900px) {
  nav {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .header-actions {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .call-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .top-strip {
    flex-direction: column;
    gap: 6px;
    padding: 8px 14px;
    font-size: 12px;
    text-align: center;
  }

  .top-left {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .top-left span {
    margin-right: 0;
  }
}

/* ===== BACKDROP ===== */
.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(5px);
  z-index: 9998;
}

/* ===== RIGHT DRAWER ===== */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 320px;
  height: 100vh;
  background: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* DRAWER HEADER */
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  color: #fff;
  font-size: 18px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.drawer-header svg {
  cursor: pointer;
}

/* DRAWER LINKS */
.mobile-drawer a {
  padding: 16px 22px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.mobile-drawer a:hover {
  background: #1f7a3f;
}
`}</style>

      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="top-left">
          <span>✉️ mandola.lko@gmail.com</span>
          <span>📞 +91 9559942444</span>
          <span>📞 +91 9559956444</span>
          <span>📞 +91 9559936444</span>
        </div>

        <div className="top-right">
          <a
            href="https://www.facebook.com/share/19awkTeN52/"
            target="_blank"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/grand_mandola?igsh=MTJkN21tZjU5eTJ2eg=="
            target="_blank"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@grandmandola?si=xeG23qnvH58d9-Rt"
            target="_blank"
            className="social-icon"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="header-actions">
          <a href="tel:+919559942444" className="call-icon">
            📞
          </a>
          <div className="menu-btn" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <>
          <div
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="mobile-drawer">
            <div className="drawer-header">
              <span>Menu</span>
              <FaTimes onClick={() => setMenuOpen(false)} />
            </div>

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </>
      )}
    </>
  );
}
