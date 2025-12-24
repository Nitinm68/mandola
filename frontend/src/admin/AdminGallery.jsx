// import { useEffect, useState } from "react";
// import { api } from "../services/api";
// import { FaImages, FaTrash } from "react-icons/fa";

// export default function AdminGallery() {
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch gallery images
//   const fetchImages = async () => {
//     try {
//       const res = await api.get("/gallery");
//       setImages(res.data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   // 🔹 Upload image
//   const upload = async () => {
//     if (!image) {
//       alert("Please select an image first");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       await api.post("/gallery", formData);
//       setImage(null);
//       fetchImages();
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Upload failed. Check backend logs.");
//     }
//   };

//   // 🔹 Delete image
//   const remove = async (id) => {
//     if (!window.confirm("Delete this image?")) return;

//     try {
//       await api.delete(`/gallery/${id}`);
//       fetchImages();
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   return (
//     <div style={{ padding: 40 }}>
//       <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <FaImages /> Admin Gallery
//       </h2>

//       {/* FILE INPUT */}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//       />

//       <br />
//       <br />

//       <button onClick={upload} disabled={loading}>
//         {loading ? "Uploading..." : "Upload"}
//       </button>

//       {/* IMAGE GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//           gap: 16,
//           marginTop: 30,
//         }}
//       >
//         {images.map((img) => (
//           <div key={img._id} style={{ position: "relative" }}>
//             <img
//               src={img.imageUrl}
//               alt="gallery"
//               style={{ width: "100%", borderRadius: 8 }}
//             />

//             <button
//               onClick={() => remove(img._id)}
//               style={{
//                 position: "absolute",
//                 top: 8,
//                 right: 8,
//                 background: "red",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: 6,
//                 cursor: "pointer",
//               }}
//             >
//               <FaTrash size={12} />
//             </button>

//             <button
//               onClick={() => {
//                 localStorage.removeItem("adminToken");
//                 window.location.href = "/admin/login";
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { api } from "../services/api";
import { FaImages, FaTrash, FaSignOutAlt } from "react-icons/fa";

export default function AdminGallery() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    const res = await api.get("/gallery");
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const upload = async () => {
    if (!image) return alert("Please select an image");
    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);
    await api.post("/gallery", formData);
    setLoading(false);
    setImage(null);
    fetchImages();
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    await api.delete(`/gallery/${id}`);
    fetchImages();
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div style={{ padding: 40 }}>
      {/* 🔹 HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <FaImages /> Admin Gallery
        </h2>

        {/* ✅ LOGOUT BUTTON */}
        <button
          onClick={logout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#111827",
            color: "#fff",
            border: "none",
            padding: "8px 14px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* UPLOAD */}
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <br />
      <button onClick={upload}>{loading ? "Uploading..." : "Upload"}</button>

      {/* IMAGE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
          marginTop: 30,
        }}
      >
        {images.map((img) => (
          <div key={img._id} style={{ position: "relative" }}>
            <img
              src={img.imageUrl}
              alt="gallery"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />

            <button
              onClick={() => remove(img._id)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                padding: 6,
                cursor: "pointer",
              }}
            >
              <FaTrash size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
