// import i10 from "../assets/images/i10.jpeg";
// import i1 from "../assets/images/i1.jpeg";
// import i4 from "../assets/images/i4.jpeg";
// import i12 from "../assets/images/i12.jpeg";
// import i5 from "../assets/images/i5.jpeg";
// import i18 from "../assets/images/i18.jpeg";
// import i9 from "../assets/images/i9.jpeg";
// import i16 from "../assets/images/i16.jpeg";
// import i6 from "../assets/images/i6.jpeg";
// import i7 from "../assets/images/i7.jpeg";
// import i11 from "../assets/images/i11.jpeg";
// import i13 from "../assets/images/i13.jpeg";
// import i14 from "../assets/images/i14.jpeg";
// import i15 from "../assets/images/i15.jpeg";
// import i20 from "../assets/images/i20.jpg";
// import i21 from "../assets/images/i21.jpg";
// import i22 from "../assets/images/i22.jpeg";
// import i25 from "../assets/images/i25.jpeg";

// import video4 from "../assets/videos/video4.mp4";

// export default function Gallery() {
//   return (
//     <>
//       <style>{`
//         .gallery {
//           padding: 80px 80px;
//           background: #ffffff;
//           text-align: center;
//         }

//         .gallery-subtitle {
//           color: #d4b48c;
//           letter-spacing: 3px;
//           font-size: 13px;
//           margin-bottom: 10px;
//         }

//         .gallery h2 {
//           font-size: 40px;
//           margin-bottom: 60px;
//         }

//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-auto-rows: 260px;
//           gap: 18px;
//         }

//         .gallery-item {
//           position: relative;
//           overflow: hidden;
//           border-radius: 16px;
//         }

//         .gallery-item.big {
//           grid-column: span 2;
//           grid-row: span 2;
//         }

//         .gallery-item img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.7s ease;
//         }

//         .gallery-item:hover img {
//           transform: scale(1.12);
//         }

//         .gallery-video {
//           margin-top: 120px;
//         }

//         .gallery-video h3 {
//           font-size: 34px;
//           margin-bottom: 40px;
//         }

//         .video-wrapper {
//           max-width: 950px;
//           margin: auto;
//           border-radius: 22px;
//           overflow: hidden;
//           box-shadow: 0 25px 60px rgba(0,0,0,0.25);
//         }

//         .video-wrapper video {
//           width: 100%;
//           display: block;
//         }

//         @media(max-width: 1024px) {
//           .gallery-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .gallery-item.big {
//             grid-column: span 2;
//             grid-row: span 1;
//           }
//         }

//         @media(max-width: 768px) {
//           .gallery {
//             padding: 80px 30px;
//           }

//           .gallery h2 {
//             font-size: 30px;
//           }

//           .gallery-video h3 {
//             font-size: 26px;
//           }
//         }
//       `}</style>

//       <section className="gallery">
//         <p className="gallery-subtitle">EXPLORE OUR RESORT</p>
//         <h2>Grand Mandola Gallery</h2>

//         {/* PHOTO GALLERY */}
//         <div className="gallery-grid">
//           <div className="gallery-item big">
//             <img src={i10} alt="Resort View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i1} alt="Luxury Room" />
//           </div>
//           <div className="gallery-item">
//             <img src={i18} alt="Swimming Pool" />
//           </div>
//           <div className="gallery-item">
//             <img src={i5} alt="Resort Lawn" />
//           </div>
//           <div className="gallery-item">
//             <img src={i12} alt="Banquet Hall" />
//           </div>
//           <div className="gallery-item">
//             <img src={i15} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i13} alt="Banquet Hall" />
//           </div>
//           <div className="gallery-item">
//             <img src={i11} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i14} alt="Banquet Hall" />
//           </div>
//           <div className="gallery-item">
//             <img src={i6} alt="Banquet Hall" />
//           </div>
//           <div className="gallery-item">
//             <img src={i7} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i4} alt="Banquet Hall" />
//           </div>
//           <div className="gallery-item">
//             <img src={i16} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i9} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i20} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i22} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i21} alt="Night View" />
//           </div>
//           <div className="gallery-item">
//             <img src={i25} alt="Night View" />
//           </div>
//         </div>

//         {/* VIDEO SECTION */}
//         <div className="gallery-video">
//           <h3>Experience Grand Mandola in Motion</h3>

//           <div className="video-wrapper">
//             <video src={video4} controls muted loop playsInline />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { api } from "../services/api";

/* 🔹 STATIC IMAGES */
import i10 from "../assets/images/i10.jpeg";
import i1 from "../assets/images/i1.jpeg";
import i4 from "../assets/images/i4.jpeg";
import i12 from "../assets/images/i12.jpeg";
import i5 from "../assets/images/i5.jpeg";
import i18 from "../assets/images/i18.jpeg";
import i9 from "../assets/images/i9.jpeg";
import i16 from "../assets/images/i16.jpeg";
import i6 from "../assets/images/i6.jpeg";
import i7 from "../assets/images/i7.jpeg";
import i11 from "../assets/images/i11.jpeg";
import i13 from "../assets/images/i13.jpeg";
import i14 from "../assets/images/i14.jpeg";
import i15 from "../assets/images/i15.jpeg";
import i20 from "../assets/images/i20.jpg";
import i21 from "../assets/images/i21.jpg";
import i22 from "../assets/images/i22.jpeg";
// import i25 from "../assets/images/i25.jpeg";

import video4 from "../assets/videos/video4.mp4";

export default function Gallery() {
  const [adminImages, setAdminImages] = useState([]);

  useEffect(() => {
    api.get("/gallery").then((res) => setAdminImages(res.data));
  }, []);

  const staticImages = [
    i10,
    i1,
    i18,
    i5,
    i12,
    i15,
    i13,
    i11,
    i14,
    i6,
    i7,
    i4,
    i16,
    i9,
    i20,
    i22,
    i21,
  ];

  return (
    <>
      {/* 🌟 INTERNAL CSS */}
      <style>{`
  .gallery {
    padding: 90px 80px;
    background: #ffffff;
    text-align: center;
  }

  .gallery-subtitle {
    color: #c9a35c;
    letter-spacing: 4px;
    font-size: 13px;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .gallery h2 {
    font-size: 40px;
    margin-bottom: 70px;
  }

  /* ✅ FIXED SIZE GRID */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  /* ✅ ALL CARDS SAME SIZE */
  .gallery-item {
    height: 260px;               /* 🔥 FIXED HEIGHT */
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    background: #f4f4f4;
  }

  /* ✅ IMAGE PERFECT FIT */
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;           /* 🔥 MOST IMPORTANT */
    transition: transform 0.7s ease;
  }

  /* ✨ PREMIUM HOVER */
  .gallery-item::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 60%,
      rgba(0,0,0,0.35)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .gallery-item:hover::after {
    opacity: 1;
  }

  .gallery-item:hover img {
    transform: scale(1.12);
  }

  /* 🎥 VIDEO */
  .gallery-video {
    margin-top: 130px;
  }

  .gallery-video h3 {
    font-size: 34px;
    margin-bottom: 45px;
  }

  .video-wrapper {
    max-width: 960px;
    margin: auto;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 30px 70px rgba(0,0,0,0.28);
  }

  .video-wrapper video {
    width: 100%;
    display: block;
  }

  /* 📱 RESPONSIVE */
  @media(max-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 768px) {
    .gallery {
      padding: 70px 28px;
    }

    .gallery h2 {
      font-size: 30px;
    }

    .gallery-item {
      height: 220px;
    }
  }
`}</style>

      {/* 🖼️ SECTION */}
      <section className="gallery">
        <p className="gallery-subtitle">EXPLORE OUR RESORT</p>
        <h2>Grand Mandola Gallery</h2>

        <div className="gallery-grid">
          {staticImages.map((img, i) => (
            <div className="gallery-item" key={`static-${i}`}>
              <img src={img} alt="Resort" />
            </div>
          ))}

          {adminImages.map((img) => (
            <div className="gallery-item" key={img._id}>
              <img src={img.imageUrl} alt="Resort Upload" />
            </div>
          ))}
        </div>

        {/* 🎥 VIDEO */}
        <div className="gallery-video">
          <h3>Experience Grand Mandola in Motion</h3>
          <div className="video-wrapper">
            <video src={video4} controls muted loop playsInline />
          </div>
        </div>
      </section>
    </>
  );
}
