const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const upload = require("../middleware/upload");
const { createAssignment, getAssignments } = require("../controllers/assignmentsController");

const router = express.Router();

// 📌 Get all assignments (Students, Faculty, Admin)
router.get("/", auth, getAssignments);

// 📌 Upload assignment (Faculty only)
router.post("/", auth, role(["Faculty"]), upload.single("file"), createAssignment);

module.exports = router;
