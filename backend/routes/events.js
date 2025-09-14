const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createEvent, getEvents } = require("../controllers/eventsController");

const router = express.Router();

router.post("/", auth, role(["Admin"]), createEvent);
router.get("/", auth, getEvents);

module.exports = router;
