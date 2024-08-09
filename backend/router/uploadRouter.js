import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    // Changed file.filename to file.fieldname
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Changed extrename to extname
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Images only!")); // Changed error message handling
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb); // Added fileFilter to multer configuration
  },
});

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded!" }); // Added error handling for missing file
  }

  res.send({
    message: "Image Uploaded Successfully!",
    // Replaced backslashes with forward slashes for consistent path formatting
    image: `/${req.file.path.replace(/\\/g, "/")}`,
  });
});

export default router;
