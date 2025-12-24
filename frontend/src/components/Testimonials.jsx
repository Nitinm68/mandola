import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Verma",
      role: "Delhi, India",
      text: "An absolutely peaceful and luxurious experience. The staff was warm, the rooms were elegant, and the ambiance was just perfect for relaxation.",
    },
    {
      name: "Ritika Sharma",
      role: "Lucknow, India",
      text: "One of the best resorts I have ever stayed in. Clean rooms, amazing food, and a very calm environment. Highly recommended!",
    },
    {
      name: "Rahul Mehta",
      role: "Mumbai, India",
      text: "Perfect place for a weekend getaway. The hospitality and services were top-notch. Will definitely visit again.",
    },
  ];

  return (
    <>
      <style>{`
        // .testimonials {
        //   padding: 120px 80px;
        //  background: linear-gradient(135deg, #000000, #1a1a1a);
       
        //           color: #fff;
        //   text-align: center;
        // }

        .testimonials {
  padding: 80px 80px;
  background: #ffffff;   /* ✅ white background */
  color: #000;           /* ✅ text black for readability */
  text-align: center;
}


        .testimonials-subtitle {
          color: #E6C77A;
          letter-spacing: 3px;
          font-size: 13px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .testimonials h2 {
          font-size: 40px;
          margin-bottom: 70px;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .testimonial-card {
        //   background: rgba(255,255,255,0.08);
         background: #f8f8f8; 
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 40px 30px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .quote-icon {
          font-size: 28px;
          color: #E6C77A;
          margin-bottom: 20px;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.8;
        //   color: #ddd;
        color: #555;
          margin-bottom: 30px;
        }

        .stars {
          color: #E6C77A;
          margin-bottom: 25px;
        }

        .guest {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .guest-icon {
          font-size: 56px;
          color: #E6C77A;
        }

        .guest h4 {
          font-size: 15px;
          margin: 0;
          color: #111;
        }

        .guest span {
          font-size: 12px;
          color: #aaa;
        }

        @media(max-width: 900px) {
          .testimonials {
            padding: 90px 30px;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonials h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="testimonials">
        <div className="testimonials-subtitle">Guest Experiences</div>
        <h2>What Our Guests Say</h2>

        <div className="testimonial-grid">
          {reviews.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <FaQuoteLeft className="quote-icon" />

              <p className="testimonial-text">{item.text}</p>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="guest">
                <FaUserCircle className="guest-icon" />
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
