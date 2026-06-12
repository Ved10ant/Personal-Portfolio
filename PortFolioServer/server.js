require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
const contactValidation = require("./middleware/contactValidation");

const contactRoutes = require("./routes/ContactRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow all localhost ports during development
      if (origin.startsWith("http://localhost:")) {
        return callback(null, true);
      }

      // Allow your production frontend
      if (origin === "https://your-frontend.vercel.app") {
        return callback(null, true);
      }

      // Block everything else
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
// DB Connection
dbConnection();

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
