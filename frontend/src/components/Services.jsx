import {
  FaBed,
  FaUtensils,
  FaGlassCheers,
  FaSpa,
  FaSwimmer,
  FaDumbbell,
  FaWifi,
  FaParking,
  FaConciergeBell,
  FaUsers,
  FaBriefcase,
  FaTree,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaBed />,
      title: "Luxury Accommodation",
      desc: "Well-appointed luxury rooms and suites designed for comfort, elegance, and a peaceful stay.",
    },
    {
      icon: <FaUtensils />,
      title: "Multi-Cuisine Restaurant",
      desc: "Delight your taste buds with our carefully curated multi-cuisine dining experience.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Banquet & Events",
      desc: "Perfect venue for weddings, receptions, birthdays, and private celebrations.",
    },
    {
      icon: <FaBriefcase />,
      title: "Corporate Meetings",
      desc: "Professional setup for meetings, conferences, seminars, and corporate retreats.",
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      desc: "Relax and rejuvenate with soothing spa therapies and wellness treatments.",
    },
    {
      icon: <FaSwimmer />,
      title: "Swimming Pool",
      desc: "Enjoy a refreshing swim in our clean and well-maintained swimming pool.",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Center",
      desc: "Stay active with modern fitness equipment in our well-equipped gym.",
    },
    {
      icon: <FaTree />,
      title: "Lawns & Open Spaces",
      desc: "Beautiful landscaped lawns perfect for outdoor events and leisure walks.",
    },
    {
      icon: <FaWifi />,
      title: "High-Speed Wi-Fi",
      desc: "Stay connected with complimentary high-speed internet across the resort.",
    },
    {
      icon: <FaParking />,
      title: "Ample Parking",
      desc: "Spacious and secure parking facilities for all guests and event visitors.",
    },
    {
      icon: <FaConciergeBell />,
      title: "24×7 Room Service",
      desc: "Round-the-clock room service to ensure a comfortable and hassle-free stay.",
    },
    {
      icon: <FaUsers />,
      title: "Family Friendly Services",
      desc: "Safe and welcoming environment suitable for families, kids, and groups.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          padding: 80px 0;
          background: #ffffff;
        }

        .services-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          text-align: center;
        }

        .services-container h5 {
          color: #e6c77a;
          letter-spacing: 3px;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .services-container h2 {
          font-size: 42px;
          margin-bottom: 60px;
          color: #111;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: #f9f9f9;
          padding: 40px 30px;
          border-radius: 16px;
          transition: 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .service-icon {
          font-size: 38px;
          color: #e6c77a;
          margin-bottom: 18px;
        }

        .service-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #111;
        }

        .service-card p {
          font-size: 14px;
          line-height: 1.8;
          color: #555;
        }

        @media(max-width: 768px) {
          .services-container h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="services-page">
        <div className="services-container">
          <h5>OUR SERVICES</h5>
          <h2>Experience Luxury & Comfort</h2>

          <div className="services-grid">
            {services.map((item, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
