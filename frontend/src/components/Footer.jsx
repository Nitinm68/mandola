import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(
              rgba(0,0,0,0.75),
              rgba(0,0,0,0.85)
            ),
            url("/images/footer-bg.jpg");
          background-size: cover;
          background-position: center;
          color: #fff;
          padding: 90px 0 0;
        }

        .footer-inner {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 50px;
        }

        /* BRAND */
        .footer-brand img {
          width: 170px;
          margin-bottom: 18px;
        }

        .footer-brand p {
          font-size: 14px;
          line-height: 1.8;
          color: #ddd;
        }

        .socials {
          display: flex;
          gap: 14px;
          margin-top: 18px;
        }

        .socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: 0.3s;
        }

        .socials a:hover {
          background: #e6c77a;
          color: #000;
          transform: translateY(-3px);
        }

        /* TITLES */
        .footer h4 {
          font-size: 18px;
          margin-bottom: 22px;
          position: relative;
        }

        .footer h4::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 40px;
          height: 2px;
          background: #e6c77a;
        }

        /* LINKS */
        .footer ul {
          list-style: none;
          padding: 0;
        }

        .footer ul li {
          margin-bottom: 12px;
          font-size: 14px;
          color: #ddd;
          cursor: pointer;
          transition: 0.3s;
        }

        .footer ul li:hover {
          color: #e6c77a;
          padding-left: 6px;
        }

        /* CONTACT */
        .contact-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 14px;
          font-size: 14px;
          color: #ddd;
          line-height: 1.6;
        }

        .contact-item svg {
          color: #e6c77a;
          font-size: 18px;
          margin-top: 3px;
        }

        /* BOTTOM BAR */
        .footer-bottom {
          margin-top: 70px;
          background: #0b2f14;
          padding: 14px 0;
          text-align: center;
          font-size: 14px;
          color: #fff;
        }

        .footer-bottom span {
          color: #e6c77a;
        }
.footer ul li a {
  color: #ddd;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
}

.footer ul li a:hover {
  color: #e6c77a;
  padding-left: 6px;
}

.footer .quick-links li {
  margin-bottom: 12px;
}

.footer .quick-links li a {
  display: block;
  font-size: 14px;
  color: #ddd;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer .quick-links li a:hover {
  color: #e6c77a;
  padding-left: 6px;
}

        /* RESPONSIVE */
        @media(max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer {
            padding-top: 70px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          {/* BRAND */}
          <div className="footer-brand">
            <img src={logo} alt="Company Logo" />
            <p>
              We deliver precise and reliable valuation reports to help you make
              confident business and investment decisions. From startups to
              established enterprises, we provide accurate valuations that
              empower strategic growth.
            </p>

            <div className="socials">
              <a href="https://www.facebook.com/share/19awkTeN52/">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/grand_mandola?igsh=MTJkN21tZjU5eTJ2eg==">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@grandmandola?si=xeG23qnvH58d9-Rt">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4>Our Services</h4>
            <ul>
              <li>Luxury Accommodation</li>
              <li>Banquet & Event Hosting</li>
              <li>Wedding & Destination Events</li>
              <li>Restaurant & Fine Dining</li>
              <li>Swimming Pool & Recreation</li>
              <li>Corporate Meetings & Conferences</li>
              <li>24×7 Room Service</li>
              <li>Ample Parking Facility</li>
              <li>Beautiful Lawns & Open Spaces</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4>Contact Us</h4>

            <div className="contact-item">
              <MdCall />
              <span>+91 9559942444, 9559956444</span>
            </div>

            <div className="contact-item">
              <MdEmail />
              <span>mandola.lko@gmail.com</span>
            </div>

            <div className="contact-item">
              <MdLocationOn />
              <span>
                Sahara States Rd, Sahara States, Sahara Club, Jankipuram,
                Lucknow, Uttar Pradesh 226021
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © 2025 All Rights Reserved | Powered by{" "}
          <a
            href="https://arikab2b.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Arika B2B</span>
          </a>
        </div>
      </footer>
    </>
  );
}
