import React from "react";
import videoBg from "../assets/videos/video3.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: -2;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: -1;
        }

        .hero-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 600;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.1rem;
          max-width: 700px;
          opacity: 0.9;
          margin-bottom: 28px;
        }

        .hero-btn {
          padding: 14px 34px;
          border-radius: 30px;
          background: #1f7a3f;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .hero-btn:hover {
          background: #165c30;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="hero">
        <video src={videoBg} autoPlay muted loop playsInline />

        <div className="hero-content">
          <h1>Experience Tranquility at Grand Mandola</h1>
          <p>
            Where luxury, nature, and comfort come together for a perfect
            getaway.
          </p>

          <Link to="/contact" className="hero-btn">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}
