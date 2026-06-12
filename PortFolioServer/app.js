const express = require("express");
const cors = require("cors");
const contactSchema = require("./models/Contact");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
  })
);

module.exports = app;
