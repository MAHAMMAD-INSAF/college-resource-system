const express = require("express");
const multer = require("multer");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createNote, getNotes } = require("../controllers/notesController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", auth, role(["Faculty"]), upload.single("file"), createNote);
router.get("/", auth, getNotes);

module.exports = router;
