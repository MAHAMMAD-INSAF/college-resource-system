const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {
  const { title } = req.body;
  const fileUrl = req.file ? `/uploads/assignments/${req.file.filename}` : null;
  const assignment = await Assignment.create({ title, fileUrl, uploadedBy: req.user.id });
  res.json(assignment);
};

exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find().populate("uploadedBy", "name role");
  res.json(assignments);
};
