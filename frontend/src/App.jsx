// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Amenities from "./components/Amenities";
// import Gallery from "./components/Gallery";
// import Highlights from "./components/Highlights";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import AboutPage from "./components/AboutPage";
// import Services from "./components/Services";
// import Contact from "./components/Contact";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <Highlights />
//       <About />
//       <Amenities />
//       <Testimonials />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Services from "./components/Services";
import Contact from "./components/Contact";

// 🔐 Admin imports
import AdminLogin from "./admin/AdminLogin";
import AdminGallery from "./admin/AdminGallery";
import ProtectedRoute from "./admin/ProtectedRoute";

/* ===== HOME PAGE ===== */
function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Amenities />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Public Header */}
      <Header />

      <Routes>
        {/* 🌐 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔐 ADMIN ROUTES */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <AdminGallery />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Public Footer */}
      <Footer />
    </BrowserRouter>
  );
}
