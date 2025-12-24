import { FiMapPin, FiHome, FiSmile, FiDollarSign } from "react-icons/fi";

export default function Highlights() {
  return (
    <>
      <style>{`
        .highlights {
          padding: 50px 80px;
          background: #faf8f4;
        }

        .highlights-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
          text-align: center;
        }

        .highlight-item svg {
          font-size: 34px;
          color: #c2a17a;
          margin-bottom: 18px;
        }

        .highlight-item h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
          color: #222;
        }

        .highlight-item p {
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          max-width: 240px;
          margin: auto;
        }

        @media(max-width: 900px) {
          .highlights {
            padding: 70px 30px;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <section className="highlights">
        <div className="highlights-grid">
          <div className="highlight-item">
            <FiMapPin />
            <h4>Located in the heart of the city</h4>
            <p>
              Ideally located in the city's heart for easy access and
              convenience.
            </p>
          </div>

          <div className="highlight-item">
            <FiHome />
            <h4>Luxurious, modern, and comfortable</h4>
            <p>
              Experience a luxurious, modern, and fully equipped space for
              comfort.
            </p>
          </div>

          <div className="highlight-item">
            <FiSmile />
            <h4>Friendly and welcoming staff</h4>
            <p>
              Our friendly and welcoming staff ensure a delightful stay every
              time.
            </p>
          </div>

          <div className="highlight-item">
            <FiDollarSign />
            <h4>Best prices and great offers</h4>
            <p>
              Enjoy unbeatable prices with fantastic offers tailored just for
              you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
