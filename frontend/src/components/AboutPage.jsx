import Testimonials from "../components/Testimonials";
// import Highlights from "../components/Highlights";
import aboutImg from "../assets/images/about1.jpeg";
import WhyChooseUs from "./WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-page {
          padding: 120px 0;
          background: #ffffff;
        }

        .about-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .about-content h5 {
          color: #e6c77a;
          letter-spacing: 3px;
          font-size: 13px;
          margin-bottom: 12px;
        }

        .about-content h2 {
          font-size: 42px;
          margin-bottom: 20px;
          color: #111;
        }

        .about-content p {
          font-size: 15px;
          line-height: 1.9;
          color: #555;
          margin-bottom: 14px;
        }

        .about-image img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }

        @media(max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
          }

          .about-content h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* ABOUT GRAND MANDOLA */}
      <section className="about-page">
        <div className="about-container">
          <div className="about-content">
            <h5>ABOUT GRAND MANDOLA</h5>
            <h2>Experience Luxury, Comfort & Elegance</h2>

            <p>
              Grand Mandola Resort is a premium destination designed for guests
              who seek comfort, tranquility, and world-class hospitality.
              Surrounded by peaceful landscapes, our resort offers a perfect
              escape from everyday life.
            </p>

            <p>
              With elegantly designed rooms, modern amenities, fine dining, and
              warm personalized service, Grand Mandola ensures every stay
              becomes a memorable experience for families, couples, and
              corporate guests alike.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="Grand Mandola Resort" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / HIGHLIGHTS */}
      <WhyChooseUs></WhyChooseUs>

      {/* TESTIMONIALS (REUSED) */}
      <Testimonials />
    </>
  );
}
