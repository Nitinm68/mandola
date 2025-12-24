import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .why-section {
          width: 100%;
          background: linear-gradient(
            90deg,
            #f6fbc8 0%,
            #f6fbc8 50%,
            #dff5c2 50%,
            #dff5c2 100%
          );
          padding: 100px 0;
        }

        .why-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .why-col h2 {
          font-size: 40px;
          margin-bottom: 50px;
          color: #000;
        }

        .why-item {
          display: flex;
          gap: 16px;
          margin-bottom: 36px;
        }

        .why-icon {
          color: #0a7a3f;
          font-size: 28px;
          margin-top: 4px;
        }

        .why-item h4 {
          font-size: 20px;
          margin-bottom: 6px;
          color: #000;
        }

        .why-item p {
          font-size: 15px;
          line-height: 1.8;
          color: #333;
        }

        @media (max-width: 900px) {
          .why-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .why-col h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="why-section">
        <div className="why-container">
          {/* LEFT */}
          <div className="why-col">
            <h2>Why Choose Grand Mandola?</h2>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Perfect Wedding Destination</h4>
                <p>
                  From grand weddings and receptions to intimate celebrations,
                  Grand Mandola offers stunning lawns and elegant venues that
                  turn your special moments into lifelong memories.
                </p>
              </div>
            </div>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Ideal for Families & Celebrations</h4>
                <p>
                  A peaceful and safe resort environment where families can
                  relax, enjoy quality time, and celebrate birthdays,
                  anniversaries, and special occasions together.
                </p>
              </div>
            </div>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Corporate & Conference Ready</h4>
                <p>
                  Well-planned spaces suitable for corporate meetings,
                  conferences, seminars, and team gatherings in a calm,
                  distraction-free setting.
                </p>
              </div>
            </div>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Modern Amenities & Spacious Areas</h4>
                <p>
                  Comfortable rooms, open lawns, ample parking, and premium
                  facilities ensure a seamless experience for guests across all
                  types of events.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="why-col">
            <h2>Guest Benefits</h2>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Memorable Experiences</h4>
                <p>
                  Whether it’s a wedding, family getaway, or corporate event,
                  every experience at Grand Mandola is thoughtfully crafted to
                  be truly memorable.
                </p>
              </div>
            </div>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Comfort & Convenience</h4>
                <p>
                  Enjoy a hassle-free stay with attentive staff, smooth
                  services, and well-managed facilities designed for complete
                  guest comfort.
                </p>
              </div>
            </div>

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>One Destination, Multiple Purposes</h4>
                <p>
                  Stay, celebrate, meet, relax, and reconnect — Grand Mandola
                  brings together luxury, functionality, and warmth at one
                  destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
