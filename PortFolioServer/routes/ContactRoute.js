const express = require("express");
const Contact = require("../models/Contact");
const contactValidation = require("../middleware/contactValidation");

const router = express.Router();

router.get("/", contactValidation, async (req, res) => {
  try {
    const { firstname, lastname, email, services } = req.body;
    if (!firstname || !lastname || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({
      firstname,
      lastname,
      email,
      services,
    });

    res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
});

module.exports = router;
