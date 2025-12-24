const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const cloudinary = require("../config/cloudinary");
const Gallery = require("../models/Gallery");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("FILE RECEIVED:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No image received" });
    }

    // ⬇️ Upload buffer to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: "mandola-gallery" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary Error:", error);
          return res.status(500).json({ message: "Cloudinary upload failed" });
        }

        const image = await Gallery.create({
          imageUrl: result.secure_url,
        });

        res.json(image);
      }
    );

    result.end(req.file.buffer);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
});

router.get("/", async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
});

router.delete("/:id", async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
