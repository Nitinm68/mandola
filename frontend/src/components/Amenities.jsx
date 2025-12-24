import {
  FiWifi,
  FiCoffee,
  FiDroplet,
  FiActivity,
  FiMapPin,
} from "react-icons/fi";
import { FaBath } from "react-icons/fa";
export default function Amenities() {
  const amenities = [
    {
      icon: <FiWifi />,
      title: "High Speed Wifi",
      desc: "Enjoy seamless, high-speed internet access throughout the resort.",
    },
    {
      icon: <FiMapPin />,
      title: "Parking Space",
      desc: "Ample and secure parking space provided for all guests.",
    },
    {
      icon: <FiCoffee />,
      title: "Restaurant & Bar",
      desc: "Savor gourmet dishes and refreshing drinks in our restaurant.",
    },
    {
      icon: <FiDroplet />,
      title: "Spa Center",
      desc: "Relax and rejuvenate with a variety of premium spa treatments.",
    },
    {
      icon: <FiActivity />,
      title: "Fitness Center",
      desc: "Stay active with modern equipment in our fitness center.",
    },
    {
      icon: <FaBath />,
      title: "Swimming Pool",
      desc: "Unwind and refresh in our beautifully designed swimming pool.",
    },
  ];

  return (
    <>
      <style>{`
        .amenities-section {
          padding: 110px 80px;
          background: #faf8f4;
          text-align: center;
        }

        .amenities-subtitle {
          font-size: 13px;
          letter-spacing: 3px;
          color: #b89b72;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .amenities-title {
          font-size: 40px;
          margin-bottom: 70px;
          color: #222;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
          max-width: 1100px;
          margin: auto;
        }

        .amenity-item {
          display: flex;
          gap: 18px;
          text-align: left;
          align-items: flex-start;
        }

        .amenity-icon {
          font-size: 32px;
          color: #b89b72;
          min-width: 40px;
        }

        .amenity-item h4 {
          font-size: 18px;
          margin-bottom: 6px;
          color: #222;
          font-weight: 500;
        }

        .amenity-item p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }

        @media(max-width: 900px) {
          .amenities-section {
            padding: 80px 30px;
          }

          .amenities-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <section className="amenities-section" id="amenities">
        <div className="amenities-subtitle">Modern and Comfortable</div>
        <h2 className="amenities-title">Facilities and amenities</h2>

        <div className="amenities-grid">
          {amenities.map((item, i) => (
            <div className="amenity-item" key={i}>
              <div className="amenity-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
