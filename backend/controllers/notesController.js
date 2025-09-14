const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const note = await Note.create({ title, description, fileUrl, uploadedBy: req.user.id });
  res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find().populate("uploadedBy", "name role");
  res.json(notes);
};
