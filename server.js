import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file received" });
  }

  console.log("File:", req.file.originalname);
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
