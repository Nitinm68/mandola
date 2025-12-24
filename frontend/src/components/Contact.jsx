import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8yyk37f", // 🔴 replace
        "template_zxqgqv9", // 🔴 replace
        formRef.current,
        "D1wzb06yxCWqNYafV" // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .contact-page {
          padding: 70px 80px;
        }

        .contact-wrapper {
          display: flex;
          gap: 70px;
        }

        .contact-left {
          flex: 1;
        }

        .contact-left h1 {
          font-size: 44px;
          margin-bottom: 20px;
        }

        .contact-left p {
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .contact-item {
          margin-bottom: 18px;
          font-size: 16px;
          font-weight: 500;
        }

        .contact-form {
          flex: 1;
          background: #9aff9a;
          padding: 40px;
          border-radius: 14px;
        }

        .contact-form h1 {
          margin-bottom: 25px;
        }

        .contact-form label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .contact-form input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: none;
          margin-bottom: 20px;
        }

        .contact-form button {
          background: #0b5d1e;
          color: #fff;
          padding: 12px 30px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .map-section {
          margin-top: 60px;
        }

        .map-section iframe {
          width: 100%;
          height: 350px;
          border-radius: 12px;
        }

        @media (max-width: 900px) {
          .contact-wrapper {
            flex-direction: column;
          }

          .contact-page {
            padding: 40px 20px;
          }
        }
      `}</style>

      <section className="contact-page">
        <div className="contact-wrapper">
          {/* LEFT */}
          <div className="contact-left">
            <h1>Get In Touch</h1>
            <p>
              Have a question or planning an event? Get in touch with Grand
              Mandola Lucknow for weddings, stays, corporate events, or special
              celebrations.
            </p>

            <div className="contact-item" style={{ color: "#000000ff" }}>
              📞 +91 9559942444, 9559956444, 9559936444
            </div>
            <div className="contact-item" style={{ color: "#000000ff" }}>
              ✉️ mandola.lko@gmail.com
            </div>
            <div className="contact-item" style={{ color: "#000000ff" }}>
              📍 Sahara States Rd, Jankipuram, Lucknow
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h1>Send Message</h1>

            <form ref={formRef} onSubmit={sendEmail}>
              <label>Name *</label>
              <input type="text" name="name" required />

              <label>Mobile No *</label>
              <input type="tel" name="mobile" required />

              <label>Email *</label>
              <input type="email" name="email" required />

              <label>Address *</label>
              <input type="text" name="address" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps?q=Grand+Mandola+Resorts+Lucknow&output=embed"
            loading="lazy"
            title="location-map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
