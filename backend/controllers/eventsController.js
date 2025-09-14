const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const event = await Event.create({ title, description, date, postedBy: req.user.id });
  res.json(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.find().populate("postedBy", "name role");
  res.json(events);
};
