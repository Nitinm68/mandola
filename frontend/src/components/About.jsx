import about1 from "../assets/images/about1.jpeg";
import about2 from "../assets/images/about2.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding:60px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        //   background: #E6C77A;
                // background: linear-gradient(135deg, #000000, #1a1a1a);
                 background: linear-gradient(
              rgba(0,0,0,0.75),
              rgba(0,0,0,0.85)
            ),

          align-items: center;
        }

        /* LEFT IMAGE AREA */
        .about-images {
          position: relative;
          padding-left: 30px;
        }

        .about-images::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 6px;
          background: #f36a21; /* orange strip */
        }

        .img-top {
          width: 85%;
          border-radius: 4px;
        }

        .img-bottom {
          width: 70%;
          position: absolute;
          bottom: -40px;
          right: 0;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        /* RIGHT CONTENT */
        .about-content h5 {
          color: #1f7a3f;
          font-size: 16px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .about-content h2 {
          font-size: 40px;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #ff3d00;
        }

        .about-content p {
          font-size: 15px;
          line-height: 1.9;
          color: #444;
          margin-bottom: 14px;
        }

        .about-btn {
          margin-top: 20px;
          background: #ff3d00;
          color: #fff;
          border: none;
          padding: 12px 26px;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        .about-btn:hover {
          background: #d83500;
        }

        /* RESPONSIVE */
        @media(max-width: 900px) {
          .about-section {
            grid-template-columns: 1fr;
            padding: 80px 30px;
          }

          .about-images {
            margin-bottom: 60px;
          }

          .img-bottom {
            position: relative;
            bottom: 0;
            margin-top: 20px;
            width: 80%;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        {/* LEFT IMAGES */}
        <div className="about-images">
          <img src={about1} alt="about" className="img-top" />
          <img src={about2} alt="about" className="img-bottom" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h5>Welcome to -</h5>
          <h2>
            Grand Mandola
            <br />
            Lucknow
          </h2>

          <p>
            Grand Mandola Lucknow is a premium resort designed for comfort,
            elegance, and unforgettable experiences. Surrounded by calm vibes
            and modern amenities, it is the perfect destination for family
            stays, celebrations, and peaceful getaways away from the city rush.
          </p>

          <p>
            From spacious rooms and beautiful outdoor spaces to warm hospitality
            and delicious dining, every detail at Grand Mandola is thoughtfully
            curated to make your stay relaxing, memorable, and truly special.
          </p>

          <Link to="/about">
            <button className="about-btn">Read More</button>
          </Link>
        </div>
      </section>
    </>
  );
}
